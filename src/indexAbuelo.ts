import { movies } from './data/dataFetch';
import './components/indexPadre';
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
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
      <my-banner message="Track films you've watched. Save those you want to see. Tell your friends what's good."></my-banner>
			`;
	}
}

customElements.define('app-container', AppContainer);
