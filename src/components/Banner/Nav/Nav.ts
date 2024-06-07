import css from './Nav.css';
// Importación del ícono de búsqueda
import SearchIcon from '../../../assets/search.svg';
import { DataShapeNavMenu } from '../../../services/navMenu';
import { navMenu } from '../../../services/navMenu';
import { addObserver, dispatch } from '../../../store';
import {
	GetLists,
	SaveImageCategory,
	SaveTitleCategory,
	getMovieProfileAction,
	navigate,
} from '../../../store/actions';
import { appState } from '../../../store';
import { navigateCategory } from '../../../store/actions';

class Navbar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();

		//HACER CLICK EN LISTS Desde la barra nav
		const listsLink = this.shadowRoot?.querySelector('.pages a.navigate-list');
		if (listsLink) {
			listsLink.addEventListener('click', async () => {
				const action3 = await GetLists(appState.user);
				dispatch(action3);
		
				dispatch(navigate('MYLISTS'));
			});
		}

		//HACER CLICK EN Home Desde la barra nav
		const homelink = this.shadowRoot?.querySelector('#home');
		if (homelink) {
			homelink.addEventListener('click', () => {
				dispatch(navigate('DASHBOARD'));
			});
		}
	}

	render() {
		if (this.shadowRoot) {
			const nav = document.createElement('nav');

			const pages = document.createElement('section');
			pages.className = 'pages';

			const home = document.createElement('a');
			home.href = '#';
			home.textContent = 'home';
			home.id = 'home';
			pages.appendChild(home);

			const filmsLink = document.createElement('a');
			filmsLink.href = '#';
			filmsLink.textContent = 'films';
			pages.appendChild(filmsLink);

			const profileLink = document.createElement('a');
			profileLink.href = '#';
			profileLink.textContent = 'profile';
			pages.appendChild(profileLink);

			profileLink.addEventListener('click', async () => {
				const action4 = await getMovieProfileAction(appState.user);
				dispatch(action4);

				dispatch(navigate('PROFILE'));
			});

			const section = document.createElement('div');
			section.className = 'menu-desplegable';

			filmsLink.addEventListener('click', () => {
				if (section) {
					// Verifica si la clase ya está presente
					const isDisplayed = section.classList.contains('menu-desplegableDisplayed');
					if (isDisplayed) {
						// Si la clase está presente, quítala
						section.classList.remove('menu-desplegableDisplayed');
					} else {
						// Si la clase no está presente, agrégala
						section.classList.add('menu-desplegableDisplayed');
					}
				}
			});

			navMenu.forEach((element: DataShapeNavMenu) => {
				const p = document.createElement('p');
				p.textContent = element.name;
				section.appendChild(p);
				p.addEventListener('click', () => {
					dispatch(navigate('CATEGORIES'));
					dispatch(navigateCategory(element.category)); //hacer otra action como navigate que le paso yo un string, el payload de la accion seria this.category
					dispatch(SaveTitleCategory(element.name));
					dispatch(SaveImageCategory(element.image));
				});
			});

			const navigateList = document.createElement('a');
			navigateList.className = 'navigate-list';
			navigateList.href = '#';
			navigateList.textContent = 'lists';

			pages.appendChild(section);
			pages.appendChild(navigateList);

			nav.appendChild(pages);

			this.shadowRoot.innerHTML = '';
			this.shadowRoot.appendChild(nav);

			// Se crea un elemento <style> para aplicar los estilos CSS
			const styles = document.createElement('style');
			styles.innerHTML = css;
			// Se añaden los estilos al shadow DOM del componente
			this.shadowRoot.appendChild(styles);
		}
	}
}
customElements.define('custom-navbar', Navbar);
export default Navbar;
