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
	'idUser' = 'idUser',
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
	idUser?: string;

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
			idUser: null,
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
                    <img class="poster" src="${this.image}" alt="This a poster of the movie named ${
				this.utitle
			}" ></img>
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

			// Obtener los datos de la película
			const movieData: Partial<DataShapeMovie> = {};

			// Añadir solo propiedades que estén definidas
			if (this.uid) movieData.id = this.uid;
			if (this.image) movieData.image = this.image;
			if (this.categories) movieData.categories = this.categories.split(',');
			if (this.utitle) movieData.title = this.utitle;
			if (this.director) movieData.director = this.director;
			if (this.release_date) movieData.release_date = this.release_date;
			if (this.cast) movieData.cast = this.cast;
			if (this.crew) movieData.crew = this.crew;
			if (this.image_sec) movieData.image_sec = this.image_sec;
			if (this.description) movieData.description = this.description;
			if (this.catch_phrase) movieData.catch_phrase = this.catch_phrase;
			if (this.idUser) movieData.idUser = this.idUser;

			// Verificar si el UID está presente
			if (!movieData.id) {
				alert('Movie ID is required.');
				return;
			}

			// Obtener el ID de la lista actual desde el estado de la aplicación
			const currentListId = appState.currentnewlistid;

			// Verificar si la lista actual no está vacía
			if (currentListId) {
				// Llamar a la función en Firebase para agregar la película a la lista
				await Firebase.addMovieToList(appState.user, currentListId, movieData as DataShapeMovie);
			} else {
				alert('Please select a list.');
			}
		});
	}
}

customElements.define('my-moviecardadd', MovieCardAdd);
