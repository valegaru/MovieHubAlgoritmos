import css from './Nav.css';
import SearchIcon from '../../../assets/search.svg';

class Navbar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = /*html*/ `
            <header>
						<nav>
                <section class="search-bar">
                    <input class="barra" type="text" >
                    <div class="icon">
                        <img src="${SearchIcon}" alt="search logo" draggable="false" />
                    </div>
                </section>
<section class="pages">
										<a href="#">films</a> <!-- aparece siempre de numero 1 -->
										<a href="#">lists</a> <!-- aparece cuando se esta logueado de numero 2 -->
										<a href="#">profile</a> <!-- aparece cuando se esta logueado de numero 3 -->
                    <a href="#">log in</a> <!-- aparece cuando NO se esta logueado de numero 2 -->
                    <a href="#">create account</a> <!-- aparece cuando NO se esta logueado de numero 3 -->
										</section>

                </nav>
		    </header>
            `;

			const styles = document.createElement('style');
			styles.innerHTML = css;

			this.shadowRoot.appendChild(styles);
		}
	}
}

customElements.define('custom-navbar', Navbar);
export default Navbar;
