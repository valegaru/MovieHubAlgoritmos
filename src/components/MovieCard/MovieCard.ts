import { addFavorites, getFavoriteMovies, getFavoriteMoviesListener, removeFavorite } from '../../services/firebase';
import { appState, dispatch } from '../../store';
import {
	SaveMovieCast,
	SaveMovieCatchPhrase,
	SaveMovieCategories,
	SaveMovieCrew,
	SaveMovieDescription,
	SaveMovieDirector,
	SaveMovieId,
	SaveMovieImage,
	SaveMovieImageSec,
	SaveMovieReleaseDate,
	SaveMovieTitle,
	navigate,
} from '../../store/actions';
import { DataShapeMovie } from '../../types/movies';
import styles from './MovieCard.css';

export enum Attribute {
	'image' = 'image',
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
	'idUser' = 'idUser',
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
	idUser?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.isLiked = false; // Inicialmente se muestra el botón de "Dislike"
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
			idUser: null,
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
		this.initializeListener();
	}

	initializeListener() {
		const userId = appState.user;
		getFavoriteMoviesListener(userId, (favoriteMovies: DataShapeMovie[]) => {
			this.updateFavoriteStatus(favoriteMovies);
		});
	}

	updateFavoriteStatus(favoriteMovies: DataShapeMovie[]) {
		const isFavorite = favoriteMovies.some((movie) => movie.id === this.uid);
		const likeButton = this.shadowRoot?.querySelector('.like') as HTMLImageElement;
		const dislikeButton = this.shadowRoot?.querySelector('.dislike') as HTMLImageElement;
		if (likeButton && dislikeButton) {
			likeButton.style.display = isFavorite ? 'inline' : 'none';
			dislikeButton.style.display = isFavorite ? 'none' : 'inline';
		}
		this.isLiked = isFavorite;
	}

	render() {
		// Verificar si existe el shadowRoot
		if (this.shadowRoot) {
			// Se establece la estructura HTML del componente
			this.shadowRoot.innerHTML = `
            <div class="container" data-uid="${this.uid}" data-image="${this.image}" data-categories="${this.categories}" data-title="${this.utitle}" data-director="${this.director}" data-release="${this.release_date}" data-cast="${this.cast}" data-crew="${this.crew}" data-imgbanner="${this.image_sec}" data-description="${this.description}" data-phrase="${this.catch_phrase}">
                <img class="poster" src="${this.image}" alt="This a poster of the movie named ${this.utitle}" ></img>
                <section class="content">
                    <section class="viewdetails">
                        <a class="link">
                            <img class="details"src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png" alt="eye icon"/></a>
                        <p>View details</p>
                    </section>
                    <img class="dislike" src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt="heart icon empty" />
                    <img class="like" src="https://img.icons8.com/ios-filled/50/FFFFFF/like--v1.png" alt="heart icon full" />
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
				dispatch(SaveMovieDescription(this.description));
				dispatch(SaveMovieCatchPhrase(this.catch_phrase));
			});

			// Obtener referencias a los botones de "like" y "dislike"
			const likeButton = this.shadowRoot.querySelector('.like') as HTMLImageElement;
			const dislikeButton = this.shadowRoot.querySelector('.dislike') as HTMLImageElement;

			// Agregar listeners a los botones
			likeButton.addEventListener('click', async () => {
				// Eliminar la película de la colección "Favorites"
				const userId = appState.user;
				try {
					await removeFavorite(userId, this.uid || '');
					console.log('Película eliminada de Favorites');
				} catch (error) {
					console.error('Error al eliminar la película de Favorites', error);
				}

				// Actualizar la vista
				likeButton.style.display = 'none';
				dislikeButton.style.display = 'inline';
			});

			dislikeButton.addEventListener('click', async () => {
				// Guardar la película en la colección "Favorites"
				const userId = appState.user;
				try {
					await addFavorites(userId, this.uid ? this.uid : '', {
						id: this.uid || '',
						image: this.image || '',
						categories: this.categories ? this.categories.split(',') : [],
						title: this.utitle || '',
						director: this.director || '',
						release_date: this.release_date || '',
						cast: this.cast || '',
						crew: this.crew || '',
						image_sec: this.image_sec || '',
						description: this.description || '',
						catch_phrase: this.catch_phrase || '',
						idUser: this.idUser || '',
					});
					console.log('Película guardada en Favorites');
				} catch (error) {
					console.error('Error al guardar la película en Favorites', error);
				}

				// Actualizar la vista
				likeButton.style.display = 'inline';
				dislikeButton.style.display = 'none';
			});
		}

		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssMovieCard = this.ownerDocument.createElement('style');
		cssMovieCard.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMovieCard);
	}
}

export default MovieCard;
customElements.define('movie-card', MovieCard);
