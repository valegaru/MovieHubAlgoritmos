import { movies } from './data/dataFetch';
//aca importo MovieCard
//aca importo Nav
//aca importo banner

class AppContainer extends HTMLElement {
	films: MyFilm[] = []; //creo un arreglo de peliculas porque a data tiene varios trabajadores y voy a renderizar de mis componentes film

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		movies.forEach((user) => {
			const FilmCard = this.ownerDocument.createElement('my-movie') as MyFilm; //my-movie es la etiqueta del componente que cree en MovieCard
			filmCard.setAttribute(Attribute.image, user.image); //voy a declarar la imagen como image en MovieCard
			filmCard.setAttribute(Attribute.uid, String(user.id)); //voy a declarar el id como uid en MovieCard
			this.films.push(FilmCard);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.films.forEach((film) => {
				this.shadowRoot?.appendChild(film);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
