//en la pantalla de cada peli es el mirco componente que tiene por titulo cast o crew o genre, y su informacion correspondiente
import styles from './ExtraInfo.css';

export enum AttributeExtraInfo {
	'section_title' = 'section_title',
	'content' = 'content',
}

export default class ExtraInfo extends HTMLElement {
	section_title?: string;
	content?: string; //from data

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeExtraInfo, null> = {
			section_title: null,
			content: null,
		};
		return Object.keys(attrs);
	}

	// Método llamado cuando se cambia un atributo observado
	attributeChangedCallback(propName: AttributeExtraInfo, oldValue: string | undefined, newValue: string | undefined) {
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
      <h4>${this.section_title}</h4>
      <hr></hr>
<p>${this.content}</p>
      </section>
      `;
		}
		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssExtraInfo = this.ownerDocument.createElement('style');
		cssExtraInfo.innerHTML = styles;
		this.shadowRoot?.appendChild(cssExtraInfo);
	}
}

customElements.define('my-extrainfo', ExtraInfo);
