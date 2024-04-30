import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import { movies } from '../services/dataFetch';
import '../components/exports';

export class Profile extends HTMLElement {
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
			<h1>PROFILE</h1>
			`;
		}
	}
}

customElements.define('app-profile', Profile);
