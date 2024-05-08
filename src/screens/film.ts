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
			<my-actionandicon label="Like" icon_url="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" description_icon="heart icon"></my-actionandicon>
			<my-actionandicon label="Edit film" icon_url="https://img.icons8.com/material/24/FFFFFF/pencil--v2.png" description_icon="pencil icon"></my-actionandicon>
			<my-actionandicon label="Add to a list" icon_url="https://img.icons8.com/ios-glyphs/30/FFFFFF/bookmark-ribbon.png" description_icon="bookmark icon"></my-actionandicon>
			<my-actionandicon label="Share" icon_url="https://img.icons8.com/ios-glyphs/30/FFFFFF/share--v1.png" description_icon="share icon"></my-actionandicon>
			`;
		}
	}
}

customElements.define('app-filmpage', FilmPage);
