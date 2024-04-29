//es la parte del boton de continuas y de terminos y condiciones que va en el login y en el sign in
import styles from './SubmitAndTerms.css';

export enum AttributeSubmitAndTerms {
	'btn_text' = 'btn_text',
	'message' = 'message',
}

export default class SubmitAndTerms extends HTMLElement {
	btn_text?: string;
	message?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeSubmitAndTerms, null> = {
			btn_text: null,
			message: null,
		};
		return Object.keys(attrs);
	}

	// Método llamado cuando se cambia un atributo observado
	attributeChangedCallback(
		propName: AttributeSubmitAndTerms,
		oldValue: string | undefined,
		newValue: string | undefined
	) {
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
			<section>
      <button type="submit">${this.btn_text}</button>
      <p>${this.message}<a href="https://en.wikipedia.org/wiki/Terms_of_service">Our Conditions of Use and Privacy Notice</a>e</p>
      </section>
      `;
		}
		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssExtraInfo = this.ownerDocument.createElement('style');
		cssExtraInfo.innerHTML = styles;
		this.shadowRoot?.appendChild(cssExtraInfo);
	}
}

customElements.define('my-submitandterms', SubmitAndTerms);
