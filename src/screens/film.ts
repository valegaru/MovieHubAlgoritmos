// cada pelicula
import { addObserver, dispatch } from '../store/index';
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
			<h1>FilmPage</h1>
			`;
		}
	}
}

customElements.define('app-filmpage', FilmPage);
