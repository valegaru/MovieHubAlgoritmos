import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
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
			<custom-navbar><custom-navbar>
			`;
		}
	}
}

customElements.define('app-profile', Profile);
