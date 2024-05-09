export class Profile extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = /*html*/ `
        <custom-navbar><custom-navbar>
			`;
		}
	}
}

customElements.define('app-profile', Profile);
