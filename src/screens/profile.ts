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

	logout() {
		indexedDB.deleteDatabase('firebase-heartbeat-database');
		indexedDB.deleteDatabase('firebaseLocalStorageDb');
		window.location.reload();
	}

	async render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = /*html*/ `
				<custom-navbar class="profile-page"></custom-navbar>
				<div class="profile-container">
					<my-profile></my-profile>
					<my-yourcontributions></my-yourcontributions>
				</div>
			`;

			const logoutBtn = this.ownerDocument.createElement('button');
			logoutBtn.innerText = 'Logout';
			logoutBtn.className = 'logout-button'; // Aplicar clase para los estilos
			logoutBtn.addEventListener('click', this.logout);
			this.shadowRoot?.appendChild(logoutBtn);
		}
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);

		const showUser = await getUser();
	}
}

customElements.define('app-profile', Profile);
