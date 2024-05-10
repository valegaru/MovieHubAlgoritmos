import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';

import styles from './favorites.css';

export class Favorites extends HTMLElement {
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
			<my-banner section_title="Favorites"></my-banner>
			<my-favoritemovies></my-favoritemovies>
			`;
		}
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);
	}
}

customElements.define('app-favorites', Favorites);
