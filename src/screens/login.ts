import '../components/exports';

export class LogIn extends HTMLElement {
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
     <my-sessionform utitle="LOG IN" password="Password" emailornumber="Mobile number or email"></my-sessionform>
		 <my-submitandterms btn_text="Continue" message="By using our services you agree to" btn_type="submit"></my-submitandterms>
		 </section>
		 <hr><p>New to this website</p><hr>
		 <a href="sign in page"><button>Create your account</button></a>
				</body>
			`;
		}
	}
}

customElements.define('app-login', LogIn);
