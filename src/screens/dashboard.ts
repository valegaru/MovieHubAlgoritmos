//esta es la pantalla de la segunda entrega
import { addObserver, dispatch } from '../store/index';
import { navigate } from '../store/actions';
import { movies } from '../services/dataFetch';
import '../components/exports';
import MoviesCards, { Attribute } from '../components/MovieCard/MovieCard';
import styles from './dashboard.css';
//aca importo Nav
//aca importo banner

export class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const myBannerButton = this.shadowRoot?.querySelector('my-banner');
		if (myBannerButton) {
			const button = myBannerButton.shadowRoot?.querySelector('#accountButton');
			button?.addEventListener('click', () => {
				dispatch(navigate('SIGNIN'));
			});
		}

		//HACER CLICK EN LOGIN Desde la barra nav
		const myBanner = this.shadowRoot?.querySelector('my-banner');
		if (myBanner) {
			const navbar = myBanner.shadowRoot?.querySelector('custom-navbar');
			const loginLink = navbar?.shadowRoot?.querySelector('#login');
			if (loginLink) {
				loginLink.addEventListener('click', () => {
					dispatch(navigate('LOGIN'));
				});
			}
		}

		//HACER CLICK EN Create account Desde la barra nav
		const my = this.shadowRoot?.querySelector('my-banner');
		if (my) {
			const navbar = my.shadowRoot?.querySelector('custom-navbar');
			const loginLink = navbar?.shadowRoot?.querySelector('#signin');
			if (loginLink) {
				loginLink.addEventListener('click', () => {
					dispatch(navigate('SIGNIN'));
				});
			}
		}
	}

	render() {
		if (this.shadowRoot) {
			//el contenido dle banner se esta renderizando por encima de el del modal
			this.shadowRoot.innerHTML = `
			<body>
      <my-banner message="Track films you've watched. Save those you want to see. Tell your friends what's good."
			buttonlabel="GET AN ACCOUNT, IT'S FREE"></my-banner>
			<category-section name="Popular films in the community" category="popular" link="https://myflixerz.to/movie"></category-section>
				<category-section name="On cinema right now" category="cinema"></category-section>
				<category-section name="Trending this week" category="trending"></category-section>
				<category-section name="classics" category="classics"></category-section>
				<modal-movie></modal-movie>
				</body>
			`;
		}
		const cssIndex = this.ownerDocument.createElement('style');
		cssIndex.innerHTML = styles;
		this.shadowRoot?.appendChild(cssIndex);
	}
}

customElements.define('app-dashboard', Dashboard);
