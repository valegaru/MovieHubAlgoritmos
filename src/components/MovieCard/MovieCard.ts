// export enum Attribute {
// 	'image' = 'image',
// }

// class MovieCard extends HTMLElement {
// 	image?: string;

// 	constructor() {
// 		super();
// 		this.attachShadow({ mode: 'open' });
// 	}

// 	static get observedAttributes() {
// 		const attrs: Record<Attribute, null> = {
// 			image: null,
// 		};
// 		return Object.keys(attrs);
// 	}

// 	attributeChangeCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
// 		switch (propName) {
// 			default:
// 				this[propName] = newValue;
// 				break;
// 		}
// 		this.render();
// 	}

// 	connectedCallback() {
// 		this.render();
// 	}

// 	render() {
// 		if (this.shadowRoot) {
// 			this.shadowRoot.innerHTML = ``;
// 		}
// 	}
// }
// customElements.define('movie-card', MovieCard);
// export default MovieCard;
