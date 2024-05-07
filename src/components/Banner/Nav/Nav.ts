import css from './Nav.css';
// Importación del ícono de búsqueda
import SearchIcon from '../../../assets/search.svg';
import { DataShapeNavMenu } from '../../../services/navMenu';
import { navMenu } from '../../../services/navMenu';
import { addObserver, dispatch } from '../../../store';
import { navigate } from '../../../store/actions';
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
			listsLink.addEventListener('click', () => {
				dispatch(navigate('MYLISTS'));
			});
		}

		//HACER CLICK EN Create account Desde la barra nav
		const signLink = this.shadowRoot?.querySelector('#signin');
		if (signLink) {
			signLink.addEventListener('click', () => {
				dispatch(navigate('SIGNIN'));
			});
		}

//HACER CLICK EN LOGIN Desde la barra nav
		const loginLink = this.shadowRoot?.querySelector('#login');
		if (loginLink) {
			loginLink.addEventListener('click', () => {
				dispatch(navigate('LOGIN'));
			});
		}
	}

	render() {
		if (this.shadowRoot) {
			const nav = document.createElement('nav');

			const searchBar = document.createElement('section');
			searchBar.className = 'search-bar';

			const icon = document.createElement('section');
			icon.className = 'icon';
			const img = document.createElement('img');
			img.src = SearchIcon;
			img.alt = 'search logo';
			icon.appendChild(img);

			const input = document.createElement('input');
			input.className = 'barra';
			input.type = 'text';
			//input.placeholder = 'Enter movie name';

			searchBar.appendChild(icon);
			searchBar.appendChild(input);

			const pages = document.createElement('section');
			pages.className = 'pages';

			const home = document.createElement('a');
			home.href = '#';
			home.textContent = 'home';
			pages.appendChild(home);

			const filmsLink = document.createElement('a');
			filmsLink.href = '#';
			filmsLink.textContent = 'films';
			pages.appendChild(filmsLink);

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
				});
			});

			const navigateList = document.createElement('a');
			navigateList.className = 'navigate-list';
			navigateList.href = '#';
			navigateList.textContent = 'lists';

			const login = document.createElement('a');
			login.id = 'login';
			login.href = '#';
			login.textContent = 'log in';

			const signin = document.createElement('a');
			signin.id = 'signin';
			signin.href = '#';
			signin.textContent = 'create account';

			pages.appendChild(section);
			pages.appendChild(navigateList);
			pages.appendChild(login);
			pages.appendChild(signin);

			nav.appendChild(searchBar);
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
