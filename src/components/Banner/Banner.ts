import styles from './Banner.css';
import ButtonCustom, { AttributeButton } from '../ButtonCustom/ButtonCustom';

export enum Attribute {
	'section_title' = 'section_title',
	'image' = 'image',
	'message' = 'message',
	'buttonlabel' = 'buttonlabel',
}

class Banner extends HTMLElement {
	section_title?: string;
	image?: string;
	message?: string;
	buttonlabel?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			section_title: null,
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
			let htmlContent = `
            <custom-navbar></custom-navbar>
            <section>
                <section>
        `;

			// Comprobar si section_title tiene un valor definido antes de incluir el <h1>
			if (this.section_title) {
				htmlContent += `<h1>${this.section_title}</h1>`;
			}

			// Comprobar si message tiene un valor definido antes de incluir el <h1>
			if (this.message) {
				htmlContent += `<h1>${this.message}</h1>`;
			}

			htmlContent += `
                </section>
        `;

			// Comprobar si buttonlabel tiene un valor definido antes de incluir el <button>
			if (this.buttonlabel) {
				htmlContent += `<button type="button" id="accountButton">${this.buttonlabel}</button>`;
			}

			htmlContent += `
            </section>
        `;

			this.shadowRoot.innerHTML = htmlContent;
		}
		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssBanner = this.ownerDocument.createElement('style');
		cssBanner.innerHTML = styles;
		this.shadowRoot?.appendChild(cssBanner);
	}
}

export default Banner;
customElements.define('my-banner', Banner);
