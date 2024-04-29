//en la pantalla de cada pelicula es la parte del poster con el nombre de la peli abajo y el director y la fecha de lanzamiento
import styles from './FigureMovie.css';

export enum AttributeFigureMovie {
	'poster' = 'poster',
	'director' = 'director',
	'utitle' = 'utitle',
	'release_year' = 'release_year',
}

export default class FigureMovie extends HTMLElement {
	poster?: string;
	director?: string;
	utitle?: string;
	release_year?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeFigureMovie, null> = {
			poster: null,
			director: null,
			utitle: null,
			release_year: null,
		};
		return Object.keys(attrs);
	}

	// Método llamado cuando se cambia un atributo observado
	attributeChangedCallback(propName: AttributeFigureMovie, oldValue: string | undefined, newValue: string | undefined) {
		// Actualización del valor del atributo en la instancia
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		// Se vuelve a renderizar el componente
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		// Verificar si existe el shadowRoot
		if (this.shadowRoot) {
			// Se establece la estructura HTML del componente
			this.shadowRoot.innerHTML = `
			<section>
<img src="${this.poster}>
<h1>${this.utitle}</h1>
<p>Directed by ${this.director} - ${this.release_year}</p>
      </section>
      `;
		}
		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssFigureMovie = this.ownerDocument.createElement('style');
		cssFigureMovie.innerHTML = styles;
		this.shadowRoot?.appendChild(cssFigureMovie);
	}
}

customElements.define('my-figuremovie', FigureMovie);
