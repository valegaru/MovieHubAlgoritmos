//el boton con un fondo y el nombre de tu lista al cual le das click para entrar a la lista
export enum AttributeList {
	'background' = 'background',
	'name_list' = 'name_list',
}

export default class List extends HTMLElement {
	background?: string;
	name_list?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeList, null> = {
			background: null,
			name_list: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeList, oldValue: string | undefined, newValue: string | undefined) {
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
			this.shadowRoot.innerHTML = /*html*/ `
        <section>
          <img src="${this.background}" alt="Background entered by user from the URL">
          <h1>${this.name_list}</h1>
        </section>
      `;
		}
	}
}

customElements.define('my-list', List);
