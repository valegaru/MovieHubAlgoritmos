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
import { GetFavorites, GetLists, GetMovies, getMovieProfileAction } from './store/actions';
import { Favorites } from './screens/favorites';
import { ListContent } from './screens/listscontent';
import { getMovieProfile } from './services/firebase';
//aca importo Nav
//aca importo banner

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async connectedCallback() {
		const action = await GetMovies();
		dispatch(action);

		const action2 = await GetFavorites(appState.user); //en () le paso el id del user logueado osea algo como appState.currentuserid
		dispatch(action2);
		console.log('favorites', appState.favlist);
		this.render();

		const action3 = await GetLists(appState.user); //en () le paso el id del user logueado osea algo como appState.currentuserid
		dispatch(action3);
		console.log('listas', appState.usermovielists);
		this.render();

		const action4 = await getMovieProfileAction(appState.user); //en () le paso el id del user logueado osea algo como appState.currentuserid
		dispatch(action4);
		console.log('movies profile', appState.movieprofile);
		this.render();
		console.log('id usuario', appState.user);
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

//<my-actionandicon label="hola" description_icon="hola2" icon_url="https://img.icons8.com/ios-filled/50/FB953C/delete-sign--v1.png" link="https://img.icons8.com/ios-filled/50/FB953C/delete-sign--v1.png"></my-actionandicon>
//<my-filters label="FILTERS"></my-filters>
//<my-figuremovie poster=""></my-figuremovie>
//<my-descriptionmovie description=""></my-descriptionmovie>
//<my-extrainfo section_title="hola" content="adios"></my-extrainfo>
//<my-sessionform utitle="hello" email="adios" password="hola"></my-sessionform>
//<my-submitandterms btn_text="adios" message='hello'></my-submitandterms>
