import styles from './ProfileInfo.css';
import { getUser } from '../../services/firebase';

export default class ProfileInfo extends HTMLElement {
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
    <section class="container">
      <section class="profile">
        <div class = "profile-image">
          <img src="https://i.pinimg.com/564x/89/c8/c5/89c8c501627cac554a35242923c33ece.jpg"  alt="Profile Picture">
        </div>
      </section>
      <form class="form" method="post" action="/submit-form">
        <section class="form-group">
          <label for="name">Name</label>
          <br>
          <input type="text" id="name" name="name">
        </section>

        <section class="form-group">
          <label for="mobile">Mobile Number</label>
          <br>
          <input type="tel" id="mobile" name="mobile">
        </section>

        <section class="form-group">
          <label for="email">Email</label>
          <br>
          <input type="email" id="email" name="email">
        </section>

        <section class="form-group">
          <label for="password">Password</label>
          <br>
          <input type="password" id="password" name="password" value="••••••••">
        </section>

        <section class="form-actions">
          <button type="submit" class="edit-profile">Edit</button>
        </section>
    </form>
  </section>
			`;
		}
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);
	}
}

customElements.define('my-profile', ProfileInfo);
