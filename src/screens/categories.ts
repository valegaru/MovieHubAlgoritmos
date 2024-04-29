//creo que deberia ser una por categoria pero luego resolvemos esta parte de las pantallas
import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import { movies } from '../services/dataFetch';
import '../components/exports';

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
			`;
		}
	}
}

customElements.define('app-categories', Categories);
