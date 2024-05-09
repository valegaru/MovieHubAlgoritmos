import css from './FavoriteMovies.css';
import { DataShapeMovie } from '../../types/movies';
import { MovieCard } from '../exports';
import { addObserver, appState, dispatch } from '../../store';
import { navigate } from '../../store/actions';

class FavoriteMovies extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		if (this.shadowRoot) {
			const favoriteMovies: DataShapeMovie[] = appState.favlist;
			const styles = document.createElement('style');
			styles.textContent = css;
			this.shadowRoot.innerHTML = `
				<h1 id="favoriteMoviesTitle">Favorite Movies</h1>
				<section id="favoriteMovies">
					${favoriteMovies
						.map(
							(movie) => `
								<movie-card
									image="${movie.image}"
									uid="${movie.id}"
									categories="${movie.categories}"
									utitle="${movie.title}"
									director="${movie.director}"
									release_date="${movie.release_date}"
									cast="${movie.cast}"
									crew="${movie.crew}"
									image_sec="${movie.image_sec}"
									description="${movie.description}"
									catch_phrase="${movie.catch_phrase}">
								</movie-card>
							`
						)
						.join('')}
				</section>
			`;
			this.shadowRoot.appendChild(styles);
		}
	}
}

customElements.define('my-favoritemovies', FavoriteMovies);
export default FavoriteMovies;
