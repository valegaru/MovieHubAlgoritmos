import { addObserver, dispatch } from '../store/index';
import { GetContentLists, navigate } from '../store/actions';
import '../components/exports';
import { Navbar } from '../components/exports';
import { Banner } from '../components/exports';
import { ModalCreateNewList } from '../components/exports';
import { appState } from '../store/index';
import styles from './mylists.css';
import { DataShapeLists } from '../services/dataLists';
import List from '../components/List/List';
import { UserMovieList } from '../services/getDataUserMovieLists';

export class MyLists extends HTMLElement {
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
				${this}
				<section class="container">
					<my-banner section_title="My Lists"></my-banner>
					<button id="modal-button">Create new list</button>
					<my-modal-list id="open"></my-modal-list>
					<button id="favorites">Favorites</button>
					<section id="lists"></section>
				</section>
			`;

			const modalButton = this.shadowRoot?.querySelector('#modal-button');
			const modal = this.shadowRoot?.querySelector('#open') as HTMLElement;
			modal.style.display = 'none';
			modalButton?.addEventListener('click', () => {
				modal.style.display = 'flex';
			});

			const button = this.shadowRoot?.querySelector('#favorites');
			button?.addEventListener('click', () => {
				dispatch(navigate('FAVORITES'));
			});

			// Renderizar las listas de películas del usuario
			const listsSection = this.shadowRoot?.querySelector('#lists');
			const userMovieLists: UserMovieList[] = appState.usermovielists || [];

			userMovieLists.forEach((list) => {
				const listButton = document.createElement('button');
				listButton.textContent = list.name;
				listButton.style.backgroundImage = `url(${list.image})`;
				const myid = (listButton.dataset.id = list.id);
				listButton.addEventListener('click', async () => {
					// Guardar el nombre y la imagen de la lista
					dispatch({ action: 'SaveCurrentNewListName', payload: list.name });
					dispatch({ action: 'SaveCurrentNewListImage', payload: list.image });
					// Guardar el ID de la lista
					dispatch({ action: 'SaveCurrentNewListId', payload: myid });
					console.log('idlist', appState.currentnewlistid);
					console.log('listname', appState.currentnewlistname);
					console.log('listimage', appState.currentnewlistimage);

					// Obtener el contenido de la lista y despachar la acción
					const action4 = await GetContentLists('8Ff0fUFnkPYot7FEJt8u', myid);
					dispatch(action4);
					console.log('contentfromclick', appState.listcontent);

					dispatch(navigate('LISTCONTENT'));
				});
				listsSection?.appendChild(listButton);
			});

			const cssIndex = this.ownerDocument.createElement('style');
			cssIndex.innerHTML = styles;
			this.shadowRoot?.appendChild(cssIndex);
		}
	}
}
customElements.define('app-mylists', MyLists);
