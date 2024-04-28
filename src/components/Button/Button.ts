import styles from './ButtonCustom.css';

export enum AttributeButton {
	'buttonlabel' = 'buttonlabel',
}

class ButtonCustom extends HTMLElement {
	buttonlabel?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeButton, null> = {
			buttonlabel: null,
		};
		return Object.keys(attrs);
	}

	// Método llamado cuando se cambia un atributo observado
	attributeChangedCallback(propName: AttributeButton, oldValue: string | undefined, newValue: string | undefined) {
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
	      <button type="button">${this.buttonlabel}</button>
      `;
			}
		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssButton = this.ownerDocument.createElement('style');
		cssButton.innerHTML = styles;
		this.shadowRoot?.appendChild(cssButton);
	}
	}

export default ButtonCustom;
customElements.define('my-button', ButtonCustom);
