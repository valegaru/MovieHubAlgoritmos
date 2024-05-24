import css from './AddMovieToList.css'; // Asegúrate de tener el archivo CSS correspondiente
import { DataShapeMovie } from '../../types/movies';
import { MovieCard } from '../exports';
import { addObserver, appState, dispatch } from '../../store';
import { GetMovies } from '../../store/actions';
import { navigate } from '../../store/actions';

class AddMovieToList extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		if (this.shadowRoot) {
			const movies: DataShapeMovie[] = appState.movielist;
			const styles = document.createElement('style');
			styles.textContent = css;
			this.shadowRoot.innerHTML = `
                <section id="cards">
                    ${movies
											.map(
												(movie) => `
                            <my-moviecardadd image="${movie.image}" uid="${movie.id}" categories="${movie.categories}" utitle="${movie.title}" director="${movie.director}" release_date="${movie.release_date}" cast="${movie.cast}" crew="${movie.crew}" image_sec="${movie.image_sec}" description="${movie.description}" catch_phrase="${movie.catch_phrase}"></my-moviecardadd>
                        `
											)
											.join('')}
                </section>
            `;
			this.shadowRoot.appendChild(styles);
		}
	}
}

customElements.define('my-addmovietolist', AddMovieToList);
export default AddMovieToList;