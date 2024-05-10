import { appState } from '../../store';
import { DataShapeMovie } from '../../types/movies';
import styles from './MovieCardADD.css';
import Firebase from '../../services/firebase';

export enum AttributeMovieCardAdd {
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
}

export default class MovieCardAdd extends HTMLElement {
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
		this.isLiked = false; // Inicialmente no está en la lista de favoritos
	}

	static get observedAttributes() {
		const attrs: Record<AttributeMovieCardAdd, null> = {
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

	attributeChangedCallback(propName: AttributeMovieCardAdd, oldValue: string | number, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
                <div class="container" data-uid="${this.uid}" data-image="${this.image}" data-categories="${
				this.categories
			}" data-title="${this.utitle}" data-director="${this.director}" data-release="${this.release_date}" data-cast="${
				this.cast
			}" data-crew="${this.crew}" data-imgbanner="${this.image_sec}" data-description="${
				this.description
			}" data-phrase="${this.catch_phrase}">
                    <img class="poster" src="${this.image}" >
                    <section class="content">
                        <button id="LikeButton">${this.isLiked ? '-' : '+'}</button>
                    </section>
                </div>
            `;
		}

		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssMovieCardAdd = this.ownerDocument.createElement('style');
		cssMovieCardAdd.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMovieCardAdd);

		// Obtener referencia al botón de like/dislike
		const likeButton = this.shadowRoot?.querySelector('#LikeButton') as HTMLButtonElement;

		// Agregar listener al botón
		likeButton.addEventListener('click', async () => {
			// Cambiar el estado de isLiked
			this.isLiked = !this.isLiked;

			// Cambiar el texto del botón según el estado
			likeButton.textContent = this.isLiked ? '-' : '+';

			// Realizar aquí las acciones que desees al dar clic al botón
			// Por ejemplo, agregar o remover de la lista de favoritos, etc.
			// Obtener los datos de la película
			const movieData: DataShapeMovie = {
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
			};

			// Obtener el ID de la lista actual desde el estado de la aplicación
			const currentListId = appState.currentnewlistid;

			// Verificar si la lista actual y los datos de la película no están vacíos
			if (currentListId && Object.values(movieData).every((val) => val !== '')) {
				// Llamar a la función en Firebase para agregar la película a la lista
				await Firebase.addMovieToList('8Ff0fUFnkPYot7FEJt8u', currentListId, movieData);
			} else {
				alert('Please select a list and make sure all movie data is available.');
			}
		});
	}
}

customElements.define('my-moviecardadd', MovieCardAdd);
