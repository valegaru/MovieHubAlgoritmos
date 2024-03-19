export enum Attribute { //enum es algo de ts, permiten definir un conjunto de constantes con nombres
	'image' = 'image',
	'message' = 'message',
}

class Banner extends HTMLElement {
	image?: string; //los dos puntos despues de cada propiedad y o que viene es para definirlas
	message?: string;

	//igual que en js
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	//diferente a js
	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			message: null,
		};
		return Object.keys(attrs); // return ['image','name', 'uid', ....]; (es otra forma m[as simple de hacerlo pero a que esta contando es mas rigurosa])
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		// esta rayita | significa "o", string o undefined
		switch (propName) {
			default:
				this[propName] = newValue; //siempre hay que dejar esta linea
				break;
		}
		this.render();
	}

	//igual que en js
	connectedCallback() {
		this.render();
	}

	//diferente a js
	render() {
		if (this.shadowRoot) {
			//si el shadowroot existe entonces se va a hacer lo siguiente
			this.shadowRoot.innerHTML = `
      <section>
        <img src="${
					this.image ||
					'https://static.vecteezy.com/system/resources/previews/002/236/321/non_2x/movie-trendy-banner-vector.jpg'
				}"><img>
        <h1>${this.message || 'Not working'}</h1>
        <button type="button">GET AN ACCOUNT - IT'S FREE</button>
        </section>
        `;
		}
	}
}

export default Banner;
customElements.define('my-banner', Banner);
