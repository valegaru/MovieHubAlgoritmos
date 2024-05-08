// cada pelicula
import { addObserver, appState, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';

export class FilmPage extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<my-banner image="${appState.movieimagesec}"></my-banner>
			<my-figuremovie  poster=${appState.movieimage} utitle="${appState.movietitle}" director="${appState.moviedirector}" release_date=${appState.moviereleasedate}></my-figuremovie>
			<my-descriptionmovie catch_phrase="${appState.moviecatchphrase}" description="${appState.moviedescription}"></my-descriptionmovie>
			<my-extrainfo section_title="Cast" content="${appState.moviecast}"></my-extrainfo>
			<my-extrainfo section_title="Crew" content="${appState.moviecrew}"></my-extrainfo>
			<my-extrainfo section_title="Genres" content="${appState.moviecategories}"></my-extrainfo>
			`;
		}
	}
}

customElements.define('app-filmpage', FilmPage);
