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

		//boton de mandar el formulario
		const submitandterms = this.shadowRoot?.querySelector('my-submitandterms');
		if (submitandterms) {
			const button = submitandterms.shadowRoot?.querySelector('#send');
			button?.addEventListener('click', () => {
				dispatch(navigate('DASHBOARD'));
			});
		}
	}

	changeEmail(e: any) {
		formData.email = e?.target?.value;
	}

	changePassword(e: any) {
		formData.password = e?.target?.value;
	}

	changeName(e: any) {
		formData.name = e?.target?.value;
	}

	changeMobile(e: any) {
		formData.mobile = e?.target?.value;
	}

	submitForm() {
		createUser(formData);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<body>
			<section>
     <my-sessionform utitle="SIGN IN" email="Email" your_name="Your name" mobile_number="Mobile number" re_password="Re-enter password" password="Password" ></my-sessionform>
		 <my-submitandterms btn_text="Create account" message="By creating an account, you agree to" btn_type="submit"></my-submitandterms>
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
