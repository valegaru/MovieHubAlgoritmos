import { movies } from './data/dataFetch';
import './components/indexPadre';
import MoviesCards, { Attribute } from './components/MovieCard/MovieCard';
//aca importo Nav
//aca importo banner

class AppContainer extends HTMLElement {
	movies: MoviesCards[] = [];
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		movies.forEach((user) => {
			const movieProfiles = this.ownerDocument.createElement('movie-card') as MoviesCards;
			movieProfiles.setAttribute(Attribute.image, user.image);
			this.movies.push(movieProfiles);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<my-banner message="Track films you've watched. Save those you want to see. Tell your friends what's good."></my-banner>
			<category-section name="Películas populares" category="popular"></category-section>
				<category-section name="Películas de cinema" category="cinema"></category-section>
				<category-section name="Películas en tendencia" category="trending"></category-section>
				<category-section name="Películas clásicas" category="classics"></category-section>
			`;
			if (this.shadowRoot)
				this.movies.forEach((targets) => {
					this.shadowRoot?.appendChild(targets);
				});
		}
	}
}

customElements.define('app-container', AppContainer);
