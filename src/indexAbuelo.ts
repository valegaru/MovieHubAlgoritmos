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
			this.shadowRoot.innerHTML = /*html*/ `
			<my-banner message="Track films you've watched. Save those you want to see. Tell your friends what's good."></my-banner>
			<modal-movie></modal-movie>
			<category-section name="POPULAR FILMS IN THE COMMUNITY" category="popular"></category-section>
				<category-section name="ON CINEMA RIGHT NOW" category="cinema"></category-section>
				<category-section name="TRENDING THIS WEEK" category="trending"></category-section>
				<category-section name="CLASSICS" category="classics"></category-section>
			`;
		}
	}
}

customElements.define('app-container', AppContainer);
