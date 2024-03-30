import css from '../MovieCard/Movie.css';
export enum Attribute {
	'image' = 'image',
}

class MovieCard extends HTMLElement {
	image?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | number, newValue: string | undefined) {
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
			const styles = document.createElement('style');
			styles.textContent = css;
			this.shadowRoot.innerHTML = /*html*/ `
      <div>
				<img src="${this.image}"  width="200">
			</div>
      `;
		}
	}
}

export default MovieCard;
customElements.define('movie-card', MovieCard);
