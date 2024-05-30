import styles from './ProfileInfo.css';
import { getUser, updateUser } from '../../services/firebase';
import { appState } from '../../store';

export default class ProfileInfo extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		this.attachEventListeners();
	}

	attachEventListeners() {
		const form = this.shadowRoot?.querySelector('form');
		form?.addEventListener('submit', this.handleSubmit.bind(this));
	}

	async handleSubmit(event: Event) {
		event.preventDefault();

		const userId = appState.user; // Asegúrate de que esto obtiene el ID correctamente
		const nameInput = this.shadowRoot?.querySelector('#name') as HTMLInputElement;
		const mobileInput = this.shadowRoot?.querySelector('#mobile') as HTMLInputElement;

		const updatedData = {
			username: nameInput?.value,
			mobilenumber: mobileInput?.value,
		};

		if (userId) {
			await updateUser(userId, updatedData);
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = /*html*/ `
              <section class="container">
                  <section class="profile">
                      <div class="profile-image">
                          <img src="https://i.pinimg.com/564x/89/c8/c5/89c8c501627cac554a35242923c33ece.jpg" alt="Profile Picture">
                      </div>
                  </section>
                  <form class="form" method="post">
                      <section class="form-group">
                          <label for="name">Name</label>
                          <br>
                          <input type="text" id="name" name="name" value="John Dae">
                      </section>
                      <section class="form-group">
                          <label for="mobile">Mobile Number</label>
                          <br>
                          <input type="tel" id="mobile" name="mobile" value="+57 3015476756">
                      </section>
                      <section class="form-actions">
                          <br>
                          <button type="submit" class="edit-profile">Edit</button>
                      </section>
                  </form>
              </section>
          `;

			const cssIndex = this.ownerDocument.createElement('style');
			cssIndex.innerHTML = styles;
			this.shadowRoot?.appendChild(cssIndex);
		}
	}
}

customElements.define('my-profile', ProfileInfo);
