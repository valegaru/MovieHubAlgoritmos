import css from './ModalCreateNewList.css';
export default class ModalCreateNewList extends HTMLElement {
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
      <section class = "modal-new-list" style="display: none;">
      <span class = "close"><img src="https://img.icons8.com/ios-filled/50/FB953C/delete-sign--v1.png" alt="delete-sign--v1"/></span>
        <h1>New list</h1>
        <form class="info-list">
					<label for="name-list">Name</label><br>
          <input type="text" id="name-list" name="name" placeholder="Enter the list name"><br><br>
          <label for="url-list">URL list image</label><br>
          <input type="text" id="url-list" name="name" placeholder="Enter the URL of the image list"><br><br>
        </form>
        <section>
          <button type = "submit">ADD FILMS</button>
        </section>
      </section>
      `;

			const cssAddMovie = this.ownerDocument.createElement('style');
			cssAddMovie.innerHTML = css;
			this.shadowRoot?.appendChild(cssAddMovie);

			const modal = this.shadowRoot.querySelector('.modal-new-list')! as HTMLDivElement;
			const span = this.shadowRoot.querySelector('.close')!;
			span.addEventListener('click', () => {
				modal.style.display = 'none';
			});
		}
	}
}
