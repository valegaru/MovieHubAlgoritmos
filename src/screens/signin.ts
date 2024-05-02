import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';
import styles from './sigin.css';

export class SignIn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const aref = this.shadowRoot?.querySelector('#loginpage');
		aref?.addEventListener('click', () => {
			dispatch(navigate('LOGIN'));
		});
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
