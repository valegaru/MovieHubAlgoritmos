import styles from './MovieCard.css';
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
			this.shadowRoot.innerHTML = /*html*/ `
      <section class="movie-content"  >
				<img src="${this.image}" width="200" height="300" >
			</section>
			<section class="content">
			<img width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png" alt="visible--v1"/>
			<p>View details</p>
			<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt="like--v1"/>
			<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/like--v1.png" alt="like--v1"/>
			<p>Like</p>
			</section>

      `;
		}
		const cssMovieCard = this.ownerDocument.createElement('style');
		cssMovieCard.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMovieCard);
	}
}

export default MovieCard;
customElements.define('movie-card', MovieCard);
