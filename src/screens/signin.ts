import { movies } from '../services/dataFetch';
import './components/exports';

class SignIn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<body>
			<section>
     <my-sessionform utitle="SIGN IN" email="Email" your_name="Your name" mobile_number="Mobile number" re_password="Re-enter password" password="Password" ></my-sessionform>
		 <my-submitandterms btn_text="Create account" message="By creating an account, you agree to"></my-submitandterms>
		 <hr>
		 <p>Already have an account? <a href="Log in page">Log in</a></p>
		 </section>
		</body>
			`;
		}
	}
}

customElements.define('app-signin', SignIn);
