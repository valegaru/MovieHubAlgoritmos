import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';
import styles from './login.css';
import { logIn } from '../services/firebase';

const formData = {
	email: '',
	password: '',
};

export class LogIn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		//boton de create account de abajo
		const buttonn = this.shadowRoot?.querySelector('#navigatetosignin');
		buttonn?.addEventListener('click', () => {
			dispatch(navigate('SIGNIN'));
		});
		//boton de mandar el formulario
		const button = this.shadowRoot?.querySelector('#send');
		button?.addEventListener('click', () => {
			dispatch(navigate('DASHBOARD'));
		});

		//x para cerrar el formulario
		const close = this.shadowRoot?.querySelector('.close');
		if (close) {
			close.addEventListener('click', () => {
				dispatch(navigate('DASHBOARD'));
			});
		}

		// Agregar listeners a los inputs y enlazarlos al contexto de la instancia de SignIn
		const emailInput = this.shadowRoot?.querySelector('input[name="email"]');
		emailInput?.addEventListener('change', this.changeEmail.bind(this));

		const passwordInput = this.shadowRoot?.querySelector('input[name="password"]');
		passwordInput?.addEventListener('change', this.changePassword.bind(this));

		// // Agregar listener al botón de submit y enlazarlo al contexto de la instancia de SignIn
		const submitButton = this.shadowRoot?.querySelector('#send');
		submitButton?.addEventListener('click', this.submitForm.bind(this));
	}

	changeEmail(e: any) {
		formData.email = e?.target?.value;
	}

	changePassword(e: any) {
		formData.password = e?.target?.value;
	}
	submitForm() {
		logIn(formData);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<section>
			<section id="form">
			<section id="my-sessionform">
			<section id="header">
                  <span class="close"><img src="https://img.icons8.com/ios-filled/50/FB953C/delete-sign--v1.png" alt="delete-sign--v1"/></span>
                  <h1>LOG IN</h1>
              </section>
							<label for="email">Email</label><br>
							<input type="text" class="space" name="email" placeholder="johndoe@movie.com"><br><br>
							<label for="password">Password</label><br>
							<input type="text" class="space" name="password" placeholder="At least 8 characters"><br><br>
							</section>
							<section id="my-submitandterms">
							<button type="submit" id="send">Continue</button>
							<p>By using our services you agree to<a href="https://en.wikipedia.org/wiki/Terms_of_service"> Our Conditions of Use and Privacy Notice</a>.</p>
							</section>
		 </section>
		 <section id="extrainfo">
		 <section id="extrainfo-content">
		 <hr><p>New to this website</p><hr>
		 </section>
		 <button id="navigatetosignin">Create your account</button>
		 </section>
		 </section>
			`;
		}
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);
	}
}

customElements.define('app-login', LogIn);
