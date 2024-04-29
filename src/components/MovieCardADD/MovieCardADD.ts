//Los posters de pelicula con un mas por encima de newlist
import styles from './MovieCardADD.css';

export enum AttributeMovieCardAdd {
	'image' = 'image', //from data
}

export default class MovieCardAdd extends HTMLElement {
	image?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeMovieCardAdd, null> = {
			image: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeMovieCardAdd, oldValue: string | number, newValue: string | undefined) {
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
			<section class="container">
			<img class="poster" src="${this.image}" >
		</section>
    <button id ="AddButton">+</button>
			`;
		}

		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssMovieCardAdd = this.ownerDocument.createElement('style');
		cssMovieCardAdd.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMovieCardAdd);
	}
}

customElements.define('my-moviecardadd', MovieCardAdd);
