import css from './filterCategories.css';
import Firebase from '../../services/firebase';
import { DataShapeMovie } from '../../types/movies';
import { MovieCard } from '../exports';
import { Attribute as AttributeMovie } from '../MovieCard/MovieCard';
import { addObserver, appState, dispatch } from '../../store';
import { GetMovies, SaveImageCategory, SaveTitleCategory, navigateCategory } from '../../store/actions';
import { navigate } from '../../store/actions';
export enum Attribute {
	'name' = 'name',
	'category' = 'category',
	'image' = 'image',
}
//la variable name se usa para el titulo de cada sección
//link es para que cuando se hunda en el nombre de la seccion, te lleve a una pagina asociada
//las movieCard se meten en un array y las imagenes son traidas de la data
class CategorySection extends HTMLElement {
	name?: string;
	category?: string;
	image?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			name: null,
			category: null,
			image: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}
	//se filtran las pelis por categoria y se guarda en la data jiji

	attributeChangedCallback(propName: Attribute, oldValue: string | number, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		//se llama la funcion filter pq se cambia la categoria y se cambia la data. Cuando se cambia la categoria se cambia la data
		this.render();
	}

	//aca se usa el map para que itere sobre la data y devuelva un nuevo array de las pelis
	//se usa el join para q ese array se convierta en una sola cadena de texto
	async render() {
		if (this.shadowRoot) {
			const movies: DataShapeMovie[] = appState.movielist;
			const moviesData = movies.filter((movie) =>
				movie.categories?.includes(this.category != undefined ? this.category : 'undefined')
			);
			console.log('category', this.category, moviesData);
			const styles = document.createElement('style');
			styles.textContent = css;
			this.shadowRoot.innerHTML = `
                <h1 id="titlecategory">${this.name || ''}</h1>
				<section id="cards">
					${moviesData
						.map(
							(movie) => `
						<movie-card image="${movie.image}" uid="${movie.id}" categories="${movie.categories}" utitle="${movie.title}" director="${movie.director}" release_date="${movie.release_date}"></movie-card>
					`
						)
						.join('')}
				</section>
            `;
			const inputImageSec = this.shadowRoot.querySelector('#titlecategory');
			inputImageSec?.addEventListener('click', () => {
				dispatch(navigate('CATEGORIES'));
				dispatch(navigateCategory(this.category)); //hacer otra action como navigate que le paso yo un string, el payload de la accion seria this.category
				dispatch(SaveTitleCategory(this.name));
				dispatch(SaveImageCategory(this.image));
				console.log(appState);
			});
			this.shadowRoot.appendChild(styles);
		}
	}
}
customElements.define('category-section', CategorySection);
export default CategorySection;
