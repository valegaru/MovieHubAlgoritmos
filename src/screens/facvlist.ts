import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';
import { Navbar } from '../components/exports';
import { Banner } from '../components/exports';

export class NewList extends HTMLElement {
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
			<my-banner></my-banner>
			`;
		}
	}
}

customElements.define('app-newlist', NewList);
