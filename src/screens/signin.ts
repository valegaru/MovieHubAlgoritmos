import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';
import styles from './sigin.css';
import { createUser } from '../services/firebase';

const formData = {
	email: '',
	password: '',
	name: '',
	mobile: '',
};

export class SignIn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		//a para loguearse
		const aref = this.shadowRoot?.querySelector('#loginpage');
		aref?.addEventListener('click', () => {
			dispatch(navigate('LOGIN'));
		});

		//x para cerrar el formulario
		const close = this.shadowRoot?.querySelector('.close');
		if (close) {
			close.addEventListener('click', () => {
				dispatch(navigate('LOGIN'));
			});
		}

		// Agregar listeners a los inputs y enlazarlos al contexto de la instancia de SignIn
		const emailInput = this.shadowRoot?.querySelector('input[name="email"]');
		emailInput?.addEventListener('change', this.changeEmail.bind(this));

		const passwordInput = this.shadowRoot?.querySelector('input[name="password"]');
		passwordInput?.addEventListener('change', this.changePassword.bind(this));

		const nameInput = this.shadowRoot?.querySelector('input[name="name"]');
		nameInput?.addEventListener('change', this.changeName.bind(this));

		const mobileInput = this.shadowRoot?.querySelector('input[name="mobile"]');
		mobileInput?.addEventListener('change', this.changeMobile.bind(this));

		// Agregar listener al botón de submit y enlazarlo al contexto de la instancia de SignIn
		const submitButton = this.shadowRoot?.querySelector('#send');
		submitButton?.addEventListener('click', this.submitForm.bind(this));
	}

	changeEmail(e: any) {
		const email = e?.target?.value;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (emailRegex.test(email)) {
			formData.email = email;
		} else {
			alert('Please enter a valid email address.');
		}
	}

	changePassword(e: any) {
		const password = e?.target?.value;
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
		if (passwordRegex.test(password)) {
			formData.password = password;
		} else {
			alert('Password must be at least 8 characters long and contain at least one number or special character.');
		}
	}

	changeName(e: any) {
		const name = e?.target?.value;
		const nameRegex = /^[A-Za-z\s]+$/;
		if (nameRegex.test(name)) {
			formData.name = name;
		} else {
			alert('Name must contain only letters.');
		}
	}

	changeMobile(e: any) {
		const mobile = e?.target?.value;
		const mobileRegex = /^\+\d+$/;
		if (mobileRegex.test(mobile)) {
			formData.mobile = mobile;
		} else {
			alert('Mobile number must start with "+" followed by country code and number.');
		}
	}

	submitForm() {
		if (formData.email && formData.password && formData.name && formData.mobile) {
			createUser(formData);
		} else {
			alert('Please fill out all fields correctly.');
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = /*html*/ `
			<body>
			<section id="main">
			<section id="my-sessionform">
			<section id="header">
                  <span class="close"><img src="https://img.icons8.com/ios-filled/50/FB953C/delete-sign--v1.png" alt="delete-sign--v1"/></span>
                  <h1>SIGN UP</h1>
              </section>
							<label for="name">Your name</label><br>
							<input type="text" class="space" name="name" placeholder="First and Last name"><br><br>
							<label for="mobile">Mobile number</label><br>
                  <input type="text" class="space" name="mobile" placeholder="Don't forget your country code"><br><br>
									<label for="email">Email</label><br>
                  <input type="text" class="space" name="email" placeholder="johndoe@movie.com"><br><br>
									<label for="password">Password</label><br>
                  <input type="text" class="space" name="password" placeholder="At least 8 characters"><br><br>
									</section>
									<section id="my-submitandterms">
									<button type="submit" id="send">Create account</button>
									<p>By creating an account, you agree to<a href="https://en.wikipedia.org/wiki/Terms_of_service"> Our Conditions of Use and Privacy Notice</a>.</p>
									</section>
		 <hr>
		 <p>Already have an account? <a id="loginpage">Log in</a></p>
		 </section>
		</body>
			`;
		}
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);
	}
}
customElements.define('app-signin', SignIn);