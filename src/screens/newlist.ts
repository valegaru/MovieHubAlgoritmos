import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';

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
			this.shadowRoot.innerHTML = `
			<h1>NewList</h1>
			`;
		}
	}
}

customElements.define('app-newlist', NewList);
