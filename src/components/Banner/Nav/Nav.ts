import css from './Nav.css';
// Importación del ícono de búsqueda
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
						<nav>
                <section class="search-bar">
                    <section class="icon">
                        <img src="${SearchIcon}" alt="search logo" draggable="false" />
                    </section>
										<input class="barra" type="text" placeholder="Enter movie name" >
                </section>
										<section class="pages">
										<a href="#">films</a> <!-- aparece siempre de numero 1 -->
										<ul class = "menu-desplegable">
											<li><a href="#">Classics</a></li>
											<li><a href="">Popular</a></li>
											<li><a href="">On cinema</a></li>
											<li><a href="">Trending</a></li>
											<li><a href="">Action</a></li>
											<li><a href="">Sci-fi</a></li>
											<li><a href="">Romance</a></li>
											<li><a href="">Comedy</a></li>
											<li><a href="">Thriller</a></li>
											<li><a href="">Drama</a></li>
											<li><a href="">Animated</a></li>
											<li><a href="">Documental</a></li>
											<li><a href="">Psychological</a></li>
										</ul>
										<a class ="navigate-list" href="#">lists</a>  <!-- aparece cuando se esta logueado de numero 2
										<!--<a href="#">profile</a>  aparece cuando se esta logueado de numero 3 -->
                    <a href="#" id="login">log in</a> <!-- aparece cuando NO se esta logueado de numero 2 -->
                    <a href="#" id="signin">create account</a> <!-- aparece cuando NO se esta logueado de numero 3 -->
										</section>

                </nav>
            `;
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
