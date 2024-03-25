import { movies } from './data/dataFetch';
import './components/indexPadre';
import MyFilm from './components/MovieCard/MovieCard';

class AppContainer extends HTMLElement {
	// films: MyFilm[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// movies.forEach((user) => {
		// 	const FilmCard = this.ownerDocument.createElement('my-movie') as MyFilm; //my-movie es la etiqueta del componente que cree en MovieCard
		// 	FilmCard.setAttribute('image', user.image); //voy a declarar la imagen como image en MovieCard //voy a declarar el id como uid en MovieCard
		// 	this.films.push(FilmCard);
		// });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<navbar></navbar>`;
			// this.films.forEach((film) => {
			// 	this.shadowRoot?.appendChild(film);
			// };
		}
	}
}

customElements.define('app-container', AppContainer);
