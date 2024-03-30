import { movies } from './data/dataFetch';
import './components/indexPadre';
import MoviesCards, { Attribute } from './components/MovieCard/MovieCard';
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
			this.shadowRoot.innerHTML = `
      <my-banner message="Track films you've watched. Save those you want to see. Tell your friends what's good."
			buttonlabel="GET AN ACCOUNT - IT'S FREE"></my-banner>
			<category-section name="Películas populares" category="popular"></category-section>
				<category-section name="Películas de cinema" category="cinema"></category-section>
				<category-section name="Películas en tendencia" category="trending"></category-section>
				<category-section name="Películas clásicas" category="classics"></category-section>
			`;
		}
	}
}

customElements.define('app-container', AppContainer);
