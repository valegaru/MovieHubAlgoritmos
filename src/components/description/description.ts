//En la pantalla de cada peli, es el microcomponente de la descripcion
//en la pantalla de cada pelicula es la parte del poster con el nombre de la peli abajo y el director y la fecha de lanzamiento
import styles from './description.css';

export enum AttributeDescriptionMovie {
	'catch_phrase' = 'catch_phrase',
	'description' = 'description',
}

export default class DescriptionMovie extends HTMLElement {
	catch_phrase?: string; //from data
	description?: string; //from data

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeDescriptionMovie, null> = {
			description: null,
			catch_phrase: null,
		};
		return Object.keys(attrs);
	}


	attributeChangedCallback(
		propName: AttributeDescriptionMovie,
		oldValue: string | undefined,
		newValue: string | undefined
	) {

		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {

		if (this.shadowRoot) {

			this.shadowRoot.innerHTML = `
			<section>
			<b><p>${this.catch_phrase || ''}</p></b>
<p id="description">${this.description}</p>
      </section>
      `;
		}

		const cssDescriptionMovie = this.ownerDocument.createElement('style');
		cssDescriptionMovie.innerHTML = styles;
		this.shadowRoot?.appendChild(cssDescriptionMovie);
	}
}

customElements.define('my-descriptionmovie', DescriptionMovie);
