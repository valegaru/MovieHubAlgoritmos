//creo que deberia ser una por categoria pero luego resolvemos esta parte de las pantallas
import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';
import { appState } from '../store/index';
import { AppState } from '../types/store';

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
			<h1>CATEGORIES</h1>
			<category-section category=${appState.currentcategory}></category-section>
			`;
		}
	}
}

customElements.define('app-categories', Categories);
