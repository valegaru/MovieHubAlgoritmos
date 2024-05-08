//esta es la pantalla de la segunda entrega
import { addObserver, dispatch } from '../store/index';
import { GetMovies, navigate } from '../store/actions';
import { DataShapeMovie } from '../types/movies';
import Firebase from '../services/firebase';
import '../components/exports';
import MoviesCards, { Attribute } from '../components/MovieCard/MovieCard';
import styles from './dashboard.css';
import { ModalCreateNewList } from '../components/exports';
//aca importo Nav
//aca importo banner

export class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		this.render();
		const myBannerButton = this.shadowRoot?.querySelector('my-banner');
		if (myBannerButton) {
			const button = myBannerButton.shadowRoot?.querySelector('#accountButton');
			button?.addEventListener('click', () => {
				dispatch(navigate('SIGNIN'));
			});
		}
	}

	render() {
		if (this.shadowRoot) {
			//el contenido dle banner se esta renderizando por encima de el del modal
			this.shadowRoot.innerHTML = /*html*/ `
			<body>
      <my-banner message="Track films you've watched. Save those you want to see. Tell your friends what's good."
			buttonlabel="GET AN ACCOUNT, IT'S FREE"></my-banner>
			<category-section name="Popular films in the community" category="popular" image="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/s5R6kTMfOxkGit96A8lqcDL4uVk.jpg"></category-section>
				<category-section name="On-cinema right now" category="cinema" image="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/rron9HAuS9s7zBF8iCX1tsafxUo.jpg"></category-section>
				<category-section name="Trending this week" category="trending" image="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/iAyr7VEFGJoHDIHIxjEb3TskQW4.jpg"></category-section>
				<category-section name="Classics" category="classics" image="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"></category-section>
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
