import { movies } from './data/dataFetch';
import './components/indexPadre';
import MoviesCards, { Attribute } from './components/MovieCard/MovieCard';
import styles from './indexAbuelo.css';
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
			//el contenido dle banner se esta renderizando por encima de el del modal
			this.shadowRoot.innerHTML = `
			<body>
      <my-banner message="Track films you've watched. Save those you want to see. Tell your friends what's good."
			buttonlabel="GET AN ACCOUNT, IT'S FREE"></my-banner>
			<category-section name="Popular films in the community" category="popular" link="https://myflixerz.to/movie"></category-section>
				<category-section name="On cinema right now" category="cinema"></category-section>
				<category-section name="Trending this week" category="trending"></category-section>
				<category-section name="classics" category="classics"></category-section>
				<modal-movie></modal-movie>
				</body>
			`;
		}
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);
	}
}

customElements.define('app-container', AppContainer);
