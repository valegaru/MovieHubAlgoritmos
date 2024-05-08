import { appState, dispatch } from '../../store';
import {
	SaveMovieCast,
	SaveMovieCategories,
	SaveMovieCrew,
	SaveMovieDirector,
	SaveMovieId,
	SaveMovieImage,
	SaveMovieImageSec,
	SaveMovieReleaseDate,
	SaveMovieTitle,
	navigate,
} from '../../store/actions';
import styles from './MovieCard.css';

export enum Attribute {
	'image' = 'image', //from data
	'uid' = 'uid',
	'categories' = 'categories',
	'utitle' = 'utitle',
	'director' = 'director',
	'release_date' = 'release_date',
	'cast' = 'cast',
	'crew' = 'crew',
	'image_sec' = 'image_sec',
	'description' = 'description',
	'catch_phrase' = 'catch_phrase',
}

class MovieCard extends HTMLElement {
	image?: string;
	uid?: string;
	categories?: string;
	utitle?: string;
	director?: string;
	release_date?: string;
	cast?: string;
	crew?: string;
	image_sec?: string;
	description?: string;
	catch_phrase?: string;
	isLiked: boolean;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.isLiked = true; // Inicialmente se muestra el botón de "Dislike"
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			uid: null,
			categories: null,
			utitle: null,
			director: null,
			release_date: null,
			cast: null,
			crew: null,
			image_sec: null,
			description: null,
			catch_phrase: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | number, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();

		//HACER CLICK en el ojo y su label para ver los detalles de la peli
	}

	render() {
		// Verificar si existe el shadowRoot
		if (this.shadowRoot) {
			// Se establece la estructura HTML del componente
			this.shadowRoot.innerHTML = /*En <a href="https://myflixerz.to/" class="details"> luego se ponen los hypervinculos dinamicos*/ `
			<div class="container" data-uid="${this.uid}" data-image="${this.image}" data-categories="${this.categories}" data-title="${this.utitle}" data-director="${this.director}" data-release="${this.release_date}" data-cast="${this.cast}" data-crew="${this.crew}" data-imgbanner="${this.image_sec}" data-description="${this.description}" data-phrase="${this.catch_phrase}">
			<img class="poster" src="${this.image}" >
			<section class="content">
			<section class="viewdetails">
				<a class="link">
					<img class="details"src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png" alt="visible--v1"/></a>
				<p>View details</p>
				</section>
				<img class="dislike"  src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt="like--v1"/>
				<img class="like"  src="https://img.icons8.com/ios-filled/50/FFFFFF/like--v1.png" alt="like--v1"/>
				<p>Like</p>
				</section>
		</div>
			`;

			const view = this.shadowRoot.querySelector('.viewdetails');
			view?.addEventListener('click', () => {
				dispatch(navigate('FILMPAGE'));
				dispatch(SaveMovieId(this.uid));
				dispatch(SaveMovieImage(this.image));
				dispatch(SaveMovieCategories(this.categories));
				dispatch(SaveMovieTitle(this.utitle));
				dispatch(SaveMovieDirector(this.director));
				dispatch(SaveMovieReleaseDate(this.release_date));
				dispatch(SaveMovieCast(this.cast));
				dispatch(SaveMovieCrew(this.crew));
				dispatch(SaveMovieImageSec(this.image_sec));
				console.log('date', this.release_date);
				console.log('cast appstate', appState.moviedirector);
				console.log('imagesaved', this.image);
				//dispatch(SaveTitleCategory(this.name));
			});

			// Obtener referencias a los botones de "like" y "dislike"
			const likeButton = this.shadowRoot.querySelector('.like') as HTMLImageElement;
			const dislikeButton = this.shadowRoot.querySelector('.dislike') as HTMLImageElement;

			// Agregar listeners a los botones
			likeButton.addEventListener('click', () => {
				this.isLiked = true;
				likeButton.style.display = 'none';
				dislikeButton.style.display = 'inline';
			});

			dislikeButton.addEventListener('click', () => {
				this.isLiked = false;
				dislikeButton.style.display = 'none';
				likeButton.style.display = 'inline';
			});

			// Mostrar el botón correcto según el estado actual
			likeButton.style.display = this.isLiked ? 'none' : 'inline';
			dislikeButton.style.display = this.isLiked ? 'inline' : 'none';
		}

		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssMovieCard = this.ownerDocument.createElement('style');
		cssMovieCard.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMovieCard);
	}
}

export default MovieCard;
customElements.define('movie-card', MovieCard);
