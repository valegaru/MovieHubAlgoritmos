import styles from './Banner.css';

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
			let htmlContent = `
			<section id="allbanner" style="background-image: url('${this.image || "https://pbs.twimg.com/media/GJ331yEWQAAtUzN.jpg "}');">
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
