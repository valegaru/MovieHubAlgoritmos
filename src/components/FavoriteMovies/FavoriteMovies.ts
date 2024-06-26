import css from './FavoriteMovies.css';
import { DataShapeMovie } from '../../types/movies';
import { MovieCard } from '../exports';
import { addObserver, appState, dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { getFavoriteMoviesListener } from '../../services/firebase';

class FavoriteMovies extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.initializeListener();
	}

	initializeListener() {
		const userId = appState.user;
		getFavoriteMoviesListener(userId, (favoriteMovies: DataShapeMovie[]) => {
			this.render(favoriteMovies);
		});
	}

	render(favoriteMovies: DataShapeMovie[] = []) {
		if (this.shadowRoot) {
			const styles = document.createElement('style');
			styles.textContent = css;

			this.shadowRoot.innerHTML = `
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