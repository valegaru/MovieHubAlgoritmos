//En la pantalla de cada peli, es el microcomponente que dice por ejemplo LIKE e icono. Edit film e icono, etc..
import styles from './ActionAndIcon.css';
export enum AttributeActionAndIcon {
	'icon_url' = 'icon_url',
	'label' = 'label',
	'link' = 'link',
	'description_icon' = 'description_icon', //para accesibilidad
}

export default class ActionAndIcon extends HTMLElement {
	icon_url?: string;
	label?: string;
	link?: string;
	description_icon?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeActionAndIcon, null> = {
			icon_url: null,
			label: null,
			link: null,
			description_icon: null,
		};
		return Object.keys(attrs);
	}

	// Método llamado cuando se cambia un atributo observado
	attributeChangedCallback(
		propName: AttributeActionAndIcon,
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
<a href="${this.link}"><p>${this.label}</p> <img src="${this.icon_url}" alt="${this.description_icon}"></a>
      `;
			// Se crea un elemento <style> para aplicar los estilos CSS
			const cssActionAndIcon = this.ownerDocument.createElement('style');
			cssActionAndIcon.innerHTML = styles;
			this.shadowRoot?.appendChild(cssActionAndIcon);
		}
	}
}

customElements.define('my-actionandicon', ActionAndIcon);
