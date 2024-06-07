import './screens/dashboard';
import './screens/categories';
import './screens/film';
import './screens/login';
import './screens/mylists';
import './screens/newlist';
import './screens/profile';
import './screens/signin';
import './screens/favorites';
import './screens/listscontent';
import { appState, dispatch } from './store/index';
import { addObserver } from './store/index';
import { LogIn } from './screens/login';
import { Dashboard } from './screens/dashboard';
import { SignIn } from './screens/signin';
import { Categories } from './screens/categories';
import { FilmPage } from './screens/film';
import { MyLists } from './screens/mylists';
import { NewList } from './screens/newlist';
import { Profile } from './screens/profile';
import './components/exports';
import MoviesCards, { Attribute } from './components/MovieCard/MovieCard';
import { GetLists, getMovieProfileAction } from './store/actions';
import { Favorites } from './screens/favorites';
import { ListContent } from './screens/listscontent';
import { getMovieProfile } from './services/firebase';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async connectedCallback() {
		// Esperar a que appState.user esté disponible
		const waitForUser = () =>
			new Promise((resolve) => {
				const interval = setInterval(() => {
					if (appState.user) {
						clearInterval(interval);
						resolve(appState.user);
					}
				}, 100); // Verificar cada 100ms
			});

		// Esperar hasta que appState.user tenga un valor
		await waitForUser();

		if (appState.user) {
			try {

				const action3 = await GetLists(appState.user);
				dispatch(action3);

				const action4 = await getMovieProfileAction(appState.user);
				dispatch(action4);

			} catch (error) {

			}


			this.render();
		} else {
			
		}
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		switch (appState.screen) {
			case 'LOGIN':
				const login = this.ownerDocument.createElement('app-login') as LogIn;
				this.shadowRoot?.appendChild(login);
				break;

			case 'DASHBOARD':
				const dashboard = this.ownerDocument.createElement('app-dashboard') as Dashboard;
				this.shadowRoot?.appendChild(dashboard);
				break;

			case 'SIGNIN':
				const signin = this.ownerDocument.createElement('app-signin') as SignIn;
				this.shadowRoot?.appendChild(signin);
				break;

			case 'CATEGORIES':
				const categories = this.ownerDocument.createElement('app-categories') as Categories;
				this.shadowRoot?.appendChild(categories);
				break;

			case 'FILMPAGE':
				const filmpage = this.ownerDocument.createElement('app-filmpage') as FilmPage;
				this.shadowRoot?.appendChild(filmpage);
				break;

			case 'MYLISTS':
				const mylists = this.ownerDocument.createElement('app-mylists') as MyLists;
				this.shadowRoot?.appendChild(mylists);
				break;

			case 'NEWLIST':
				const newlist = this.ownerDocument.createElement('app-newlist') as NewList;
				this.shadowRoot?.appendChild(newlist);
				break;

			case 'FAVORITES':
				const favlist = this.ownerDocument.createElement('app-favorites') as Favorites;
				this.shadowRoot?.appendChild(favlist);
				break;

			case 'PROFILE':
				const profile = this.ownerDocument.createElement('app-profile') as Profile;
				this.shadowRoot?.appendChild(profile);
				break;

			case 'LISTCONTENT':
				const listcontent = this.ownerDocument.createElement('app-listcontent') as ListContent;
				this.shadowRoot?.appendChild(listcontent);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);