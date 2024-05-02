import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import '../components/exports';
import styles from './login.css';

export class LogIn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const button = this.shadowRoot?.querySelector('#navigatetosignin');
		button?.addEventListener('click', () => {
			dispatch(navigate('SIGNIN'));
		});

		const submitandterms = this.shadowRoot?.querySelector('my-submitandterms');
		if (submitandterms) {
			const button = submitandterms.shadowRoot?.querySelector('#send');
			button?.addEventListener('click', () => {
				dispatch(navigate('DASHBOARD'));
			});
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<section>
			<section id="form">
     <my-sessionform utitle="LOG IN" password="Password" emailornumber="Mobile number or email"></my-sessionform>
		 <my-submitandterms btn_text="Continue" message="By using our services you agree to" btn_type="submit"></my-submitandterms>
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
