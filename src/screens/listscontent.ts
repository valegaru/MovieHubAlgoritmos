import { addObserver, appState, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';
import { Navbar } from '../components/exports';
import { Banner } from '../components/exports';
import styles from './newlist.css'; // cambiar

export class ListContent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	// 	async connectedCallback() {
	// 	// Comprobar si el contenido de la lista ya está cargado
	// 	if (!appState.listcontent || appState.listcontent.length === 0) {
	// 		const action4 = await GetContentLists('8Ff0fUFnkPYot7FEJt8u', appState.currentnewlistid);
	// 		dispatch(action4);
	// 		console.log('content', appState.listcontent);
	// 	}
	// 	this.render();
	// }

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = /*html*/ `
			<my-banner section_title="${appState.currentnewlistname}" image=${appState.currentnewlistimage}></my-banner>
			<my-listmovies></my-listmovies>
			`;
		}
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);
	}
}

customElements.define('app-listcontent', ListContent);
