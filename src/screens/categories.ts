//creo que deberia ser una por categoria pero luego resolvemos esta parte de las pantallas
import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';
import { appState } from '../store/index';
import { AppState } from '../types/store';

import styles from './categories.css';

export class Categories extends HTMLElement {
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
			<my-banner section_title=${appState.titlecategory} image=${appState.imagecategory}></my-banner>
			<category-section category=${appState.currentcategory}></category-section>
			`;
		}
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);
	}
}

customElements.define('app-categories', Categories);
