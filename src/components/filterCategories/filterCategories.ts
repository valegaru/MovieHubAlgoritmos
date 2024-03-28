import { movies, type DataShape } from '../../data/dataFetch';
import css from './filterCategories.css';

export enum Attribute {
	'name' = 'name',
	'category' = 'category',
}
//la variable name se usa para el titulo de cada sección
class CategorySection extends HTMLElement {
	name?: string;
	category?: string;
	moviesData?: DataShape[];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			name: null,
			category: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	filterData(category: string) {
		this.moviesData = movies.filter((movie) => movie.categories.includes(category));
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | number, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const styles = document.createElement('style');
			styles.textContent = css;
			const movieElements = this.moviesData != undefined ? this.moviesData : [];
			this.shadowRoot.innerHTML = /*html*/ `
                <h2>${this.name}</h2>
				<div id="cards">
					${movieElements
						.map(
							(movie) => /*html*/ `
						<custom-card img="${movie.image}"></custom-card>
					`
						)
						.join('')}
				</div>

            `;

			this.shadowRoot.appendChild(styles);
		}
	}
}
customElements.define('category-section', CategorySection);
export default CategorySection;
