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
                <div class="search-bar">
                    <input class="barra" type="text" >
                    <div class="icon">
                        <img src="${SearchIcon}" alt="search logo" draggable="false" />
                    </div>
                </div>
                <nav>
                    <a href="#">sign in/ log in</a>
                    <a href="#">create account</a>
                    <a href="#">films</a>
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
