export enum Attribute {
	'image' = 'image',
	'message' = 'message',
}

class Banner extends HTMLElement {
	image?: string;
	message?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			message: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
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
        <img src="${this.image || 'https://tenyearsago.files.wordpress.com/2019/07/500banner.png?w=1200'}">
        <h1>${this.message || 'Not working'}</h1>
        <button type="button" id="accountButton">GET AN ACCOUNT - IT'S FREE</button>
      </section>
      `;
			const button = this.shadowRoot.querySelector('#accountButton');
			if (button) {
				button.addEventListener('click', () => {
					window.location.href =
						'https://static.vecteezy.com/system/resources/previews/002/236/321/non_2x/movie-trendy-banner-vector.jpg'; // Reemplazar el enlace por el de sign in
				});
			}
		}
	}
}

export default Banner;
customElements.define('my-banner', Banner);
