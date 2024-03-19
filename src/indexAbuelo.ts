import { movies } from './data/dataFetch';
//aca importo MovieCard
//aca importo Nav
//aca importo banner

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
		}
	}
}

customElements.define('app-container', AppContainer);
