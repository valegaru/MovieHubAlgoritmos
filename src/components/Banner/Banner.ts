import styles from './Banner.css';

export enum Attribute {
	'image' = 'image',
	'message' = 'message',
	'buttonlabel' = 'buttonlabel',
}

class Banner extends HTMLElement {
	image?: string;
	message?: string;
	buttonlabel?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			message: null,
			buttonlabel: null,
		};
		return Object.keys(attrs);
	}

	// Método llamado cuando se cambia un atributo observado
	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
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
			<custom-navbar></custom-navbar>
      <section>
			<section>
        <h1>${this.message || 'Not working'}</h1>
				</section>
        <button type="button" id="accountButton">${this.buttonlabel}</button>
      </section>
      `;
			// Se agrega un listener al botón
			const button = this.shadowRoot.querySelector('#accountButton');
			if (button) {
				button.addEventListener('click', () => {
					window.location.href =
						'https://static.vecteezy.com/system/resources/previews/002/236/321/non_2x/movie-trendy-banner-vector.jpg'; // Reemplazar el enlace por el de sign in
				});
			}
		}
		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssBanner = this.ownerDocument.createElement('style');
		cssBanner.innerHTML = styles;
		this.shadowRoot?.appendChild(cssBanner);
	}
}

export default Banner;
customElements.define('my-banner', Banner);
