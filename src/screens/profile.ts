import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';
import styles from './profile.css';
import { getUser } from '../services/firebase';

export class Profile extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += /*html*/ `
			<custom-navbar><custom-navbar>
			`;

			this.shadowRoot.innerHTML += /*html*/ `
				<my-profile></my-profile>
				<my-yourcontributions></my-yourcontributions>
			`;
		}
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);

		const showUser = await getUser();
	}

	// async createUser(data: any) {
	// 	console.log("Firebase User")
	// 	this.
	// }

	// renderUser() {

	// }
}

customElements.define('app-profile', Profile);
