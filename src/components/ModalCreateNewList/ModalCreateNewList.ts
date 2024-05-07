import css from './ModalCreateNewList.css';
class ModalCreateNewList extends HTMLElement {
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
      <section class="modal-new-list">
            <span class="close"
                ><img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0yMDUuNjYsMTk0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTM5LjMxLDYxLjY2LDIwNS42NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTE2LjY5LDEyOCw1MC4zNCw2MS42NkE4LDgsMCwwLDEsNjEuNjYsNTAuMzRMMTI4LDExNi42OWw2Ni4zNC02Ni4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMTM5LjMxLDEyOFoiPjwvcGF0aD48L3N2Zz4="
                    alt="close"
            /></span>
            <h1 class="title-list">New list</h1>
            <form class="info-list">
                <label for="name-list">Name</label>
                <input
                    type="text"
                    id="name-list"
                    name="name"
                    placeholder="Enter the list name"
                />
                <label for="url-list">URL list image</label>
                <input
                    type="text"
                    id="url-list"
                    name="name"
                    placeholder="Enter the URL of the image list"
                />
                <section>
                    <button type="submit">ADD FILMS</button>
                </section>
            </form>
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

customElements.define('my-modal-list', ModalCreateNewList);
export default ModalCreateNewList;
