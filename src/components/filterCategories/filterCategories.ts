import { movies, type DataShape } from '../../data/dataFetch';
import css from './filterCategories.css';

export enum Attribute {
	'name' = 'name',
	'category' = 'category',
	'link' = 'link',
}
//la variable name se usa para el titulo de cada sección
//link es para que cuando se hunda en el nombre de la seccion, te lleve a una pagina asociada
//las movieCard se meten en un array y las imagenes son traidas de la data
class CategorySection extends HTMLElement {
	name?: string;
	category?: string;
	link?: string;
	moviesData?: DataShape[];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			name: null,
			category: null,
			link: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}
	//se filtran las pelis por categoria y se guarda en la data jiji
	filterData(category: string) {
		this.moviesData = movies.filter((movie) => movie.categories.includes(category));
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | number, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		//se llama la funcion filter pq se cambia la categoria y se cambia la data. Cuando se cambia la categoria se cambia la data
		this.filterData(this.category!);
		this.render();
	}

	//aca se usa el map para que itere sobre la data y devuelva un nuevo array de las pelis
	//se usa el join para q ese array se convierta en una sola cadena de texto
	render() {
		if (this.shadowRoot) {
			const styles = document.createElement('style');
			styles.textContent = css;
			const movieElements = this.moviesData != undefined ? this.moviesData : [];
			console.log(movieElements);

			this.shadowRoot.innerHTML = /*html*/ `
                <a href="${this.link}"><h1>${this.name}</h1></a>
				<section id="cards">
					${movieElements
						.map(
							(movie) => /*html*/ `
						<movie-card image="${movie.image}"></movie-card>
					`
						)
						.join('')}
				</section>

            `;

			this.shadowRoot.appendChild(styles);
		}
	}
}
customElements.define('category-section', CategorySection);
export default CategorySection;
