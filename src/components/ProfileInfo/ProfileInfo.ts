import styles from './ProfileInfo.css';
import { getUser, getUserData, getUserEmail, updateUser, uploadFile } from '../../services/firebase';
import { appState } from '../../store';
import { getProfileImageUrl } from '../../services/firebase';

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

		const nameInput = this.shadowRoot?.querySelector('#name') as HTMLInputElement;
		nameInput?.addEventListener('change', this.validateName.bind(this));

		const mobileInput = this.shadowRoot?.querySelector('#mobile') as HTMLInputElement;
		mobileInput?.addEventListener('change', this.validateMobile.bind(this));
	}

	validateName(e: any) {
		const name = e?.target?.value;
		const nameRegex = /^[A-Za-z\s]+$/;
		if (name && !nameRegex.test(name)) {
			alert('Name must contain only letters.');
		}
	}

	validateMobile(e: any) {
		const mobile = e?.target?.value;
		const mobileRegex = /^\+\d+$/;
		if (mobile && !mobileRegex.test(mobile)) {
			alert('Mobile number must start with "+" followed by country code and number.');
		}
	}

	handleImageClick() {
		const fileInput = this.shadowRoot?.querySelector('#profile-pic') as HTMLInputElement;
		fileInput?.click();
	}

	async handleFileSelect(event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files ? input.files[0] : null;
		if (file) {
			await uploadFile(file, appState.user);
			const imageUrl = await getProfileImageUrl(appState.user);
			if (imageUrl) {
				const profileImage = this.shadowRoot?.querySelector('.profile-image img') as HTMLImageElement;
				if (profileImage) {
					profileImage.src = imageUrl;
				}
			}
		}
	}

	async handleSubmit(event: Event) {
		event.preventDefault();

		const userId = appState.user;
		const nameInput = this.shadowRoot?.querySelector('#name') as HTMLInputElement;
		const mobileInput = this.shadowRoot?.querySelector('#mobile') as HTMLInputElement;

		const updatedData: { username?: string; mobilenumber?: string } = {};

		if (nameInput?.value) {
			updatedData.username = nameInput.value;
		}

		if (mobileInput?.value) {
			updatedData.mobilenumber = mobileInput.value;
		}

		if (userId && this.isFormValid(updatedData)) {
			await updateUser(userId, updatedData);
		}
	}

	isFormValid(data: { username?: string; mobilenumber?: string }) {
		const nameRegex = /^[A-Za-z\s]+$/;
		const mobileRegex = /^\+\d+$/;

		if (data.username && !nameRegex.test(data.username)) {
			alert('Name must contain only letters.');
			return false;
		}

		if (data.mobilenumber && !mobileRegex.test(data.mobilenumber)) {
			alert('Mobile number must start with "+" followed by country code and number.');
			return false;
		}

		return true;
	}

	async render() {
		const userData = await getUserData();
		if (!userData) return;
		const userEmail = await getUserEmail();
		if (!userEmail) return;
		const profileImageUrl = await getProfileImageUrl(appState.user);

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = /*html*/ `
                <section class="container">
					<section class="profile">
						<div class="profile-image">
							<img src="${
								profileImageUrl
									? profileImageUrl
									: 'https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg'
							}" alt="Profile Picture">
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
