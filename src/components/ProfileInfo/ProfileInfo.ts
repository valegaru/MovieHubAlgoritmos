import styles from './ProfileInfo.css';
import { getUser, getUserData, getUserEmail, updateUser, uploadFile } from '../../services/firebase';
import { appState } from '../../store';

export default class ProfileInfo extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		await this.render();
		this.attachEventListeners();
	}

	attachEventListeners() {
		const form = this.shadowRoot?.querySelector('form');
		form?.addEventListener('submit', this.handleSubmit.bind(this));

		const profileImage = this.shadowRoot?.querySelector('.profile-image');
		profileImage?.addEventListener('click', this.handleImageClick.bind(this));

		const fileInput = this.shadowRoot?.querySelector('#profile-pic');
		fileInput?.addEventListener('change', this.handleFileSelect.bind(this));
	}

	handleImageClick() {
		const fileInput = this.shadowRoot?.querySelector('#profile-pic') as HTMLInputElement;
		fileInput?.click();
	}

	async handleFileSelect(event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files ? input.files[0] : null;
		if (file) {
			await uploadFile(file);
		}
	}

	async handleSubmit(event: Event) {
		event.preventDefault();

		const userId = appState.user;
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

	async render() {
		const userData = await getUserData();
		if (!userData) return;
		const userEmail = await getUserEmail();
		if (!userEmail) return;

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = /*html*/ `
                <section class="container">
					<section class="profile">
						<div class="profile-image">
							<img src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg" alt="Profile Picture">
							<div class="overlay">
								<span>Change Photo</span>
							</div>
						</div>
						<input type="file" id="profile-pic" style="display:none">
					</section>
					<form class="form" method="post">
						<section class="form-group">
							<label for="name">Name</label>
							<br>
							<input type="text" id="name" name="name" placeholder="${userData.username}">
						</section>
						<section class="form-group">
							<label for="mobile">Mobile Number</label>
							<br>
							<input type="tel" id="mobile" name="mobile" placeholder="${userData.mobilenumber}">
						</section>
						<section class="form-group">
							<label for="email">Email</label>
							<br>
							<input type="email" id="email" name="email" value="${userEmail}" readonly>
						</section>
						<section class="form-group">
							<label for="password">Password</label>
							<br>
							<input type="password" id="password" name="password" value="••••••••" readonly>
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
