import css from './ModalCreateNewList.css';
import Firebase from '../../services/firebase';
import { appState, dispatch } from '../../store';
import { navigate } from '../../store/actions';

export default class ModalCreateNewList extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		if (this.shadowRoot) {
			const modalNewList = document.createElement('section');
			modalNewList.classList.add('modal-new-list');

			const closeSpan = document.createElement('span');
			closeSpan.classList.add('close');
			closeSpan.addEventListener('click', () => {
				this.style.display = 'none';
			});

			const closeImg = document.createElement('img');
			closeImg.src =
				'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMDUuNjYsMTk0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTM5LjMxLDYxLjY2LDIwNS42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTE2LjY5LDEyOCw1MC4zNCw2MS42NkE4LDgsMCwwLDEsNjEuNjYsNTAuMzRMMTI4LDExNi42OWw2Ni4zNC02Ni4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMTM5LjMxLDEyOFoiPjwvcGF0aD48L3N2Zz4=';
			closeImg.alt = 'Close';

			closeSpan.appendChild(closeImg);

			const title = document.createElement('h1');
			title.classList.add('title-list');
			title.textContent = 'New list';

			const form = document.createElement('form');
			form.classList.add('info-list');

			const nameLabel = document.createElement('label');
			nameLabel.htmlFor = 'name-list';
			nameLabel.textContent = 'Name';

			const nameInput = document.createElement('input');
			nameInput.type = 'text';
			nameInput.id = 'name-list';
			nameInput.name = 'name-list';
			nameInput.placeholder = 'Enter the list name';

			const urlLabel = document.createElement('label');
			urlLabel.htmlFor = 'url-list';
			urlLabel.textContent = 'URL list image';

			const urlInput = document.createElement('input');
			urlInput.type = 'text';
			urlInput.id = 'url-list';
			urlInput.name = 'url-list';
			urlInput.placeholder = 'Enter the URL of the image list';

			const buttonSection = document.createElement('section');

			const addButton = document.createElement('button');
			addButton.type = 'submit';
			addButton.textContent = 'ADD FILMS';
			buttonSection.appendChild(addButton);

			form.appendChild(nameLabel);
			form.appendChild(nameInput);
			form.appendChild(urlLabel);
			form.appendChild(urlInput);
			form.appendChild(buttonSection);

			modalNewList.appendChild(closeSpan);
			modalNewList.appendChild(title);
			modalNewList.appendChild(form);

			this.shadowRoot.appendChild(modalNewList);

			const cssAddMovie = this.ownerDocument.createElement('style');
			cssAddMovie.innerHTML = css;
			this.shadowRoot.appendChild(cssAddMovie);

			addButton.addEventListener('click', async (event) => {
				event.preventDefault();
				dispatch(navigate('NEWLIST'));
				// Obtener los valores de los campos de entrada
				const listName = (this.shadowRoot?.querySelector('#name-list') as HTMLInputElement).value;
				const listImage = (this.shadowRoot?.querySelector('#url-list') as HTMLInputElement).value;

				// Verificar si los campos no están vacíos
				if (listName.trim() !== '' && listImage.trim() !== '') {
					// Guardar el nombre de la lista
					dispatch({ action: 'SaveCurrentNewListName', payload: listName });

					// Guardar la imagen de la lista
					dispatch({ action: 'SaveCurrentNewListImage', payload: listImage });


					// Llamar a la acción addListAndGetId de Firebase
					const newListId = await Firebase.addListAndGetId(appState.user, listName, listImage, []);


					// Guardar el ID de la lista
					dispatch({ action: 'SaveCurrentNewListId', payload: newListId });
					

					// Limpiar los campos después de enviar
					(this.shadowRoot?.querySelector('#name-list') as HTMLInputElement).value = '';
					(this.shadowRoot?.querySelector('#url-list') as HTMLInputElement).value = '';
				} else {
					alert('Please fill in all fields.');
				}
			});
		}
	}
}

customElements.define('my-modal-list', ModalCreateNewList);
