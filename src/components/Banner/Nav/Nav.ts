import styles from './Nav.css';

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
			this.shadowRoot.innerHTML = `
      <header>
        <div class="barra-busqueda">
          <input class="barra" type="text" >
          <div><img src="/src/assets/busqueda.png" alt=""></div>
        </div>
        <nav class="enlaces">
          <a href="#">SIGN IN/ LOG IN</a>
          <a href="#">CREATE ACCOUNT</a>
          <a href="#">FILMS</a>
        </nav>
		  </header>
      `;
			const cssNavbar = this.ownerDocument.createElement('style');
			cssNavbar.innerHTML = styles;
			this.shadowRoot?.appendChild(cssNavbar);
		}
	}
}
customElements.define('navbar"', Navbar);
export default Navbar;
