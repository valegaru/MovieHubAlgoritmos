import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';
import { Navbar } from '../components/exports';
import { Banner } from '../components/exports';
import { ModalCreateNewList } from '../components/exports';
import { appState } from '../store/index';
import styles from './mylists.css';

export class MyLists extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = /*html*/ `
			<section>
				<my-banner section_title="My Lists"></my-banner>
				<button id ="modal-button">Create new list</button>
				<my-modal-list id ="open"></my-modal-list>
			</section>
				`;
		}
		const modalButton = this.shadowRoot?.querySelector('#modal-button');
		const modal = this.shadowRoot?.querySelector('#open') as HTMLElement;
		modal.style.display = 'none';
		modalButton?.addEventListener('click', () => {
			modal.style.display = 'flex';
		});
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);
	}
}

customElements.define('app-mylists', MyLists);
