//la lista de filtros de la pagina new list. FILTERS CON LOS CHECBOXES POR CATEGORIA DEBAJO
import styles from './FilterList.css';

export enum AttributeFilterList {
	'label' = 'label',
}

export default class FilterList extends HTMLElement {
	label?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeFilterList, null> = {
			label: null,
		};
		return Object.keys(attrs);
	}

	// Método llamado cuando se cambia un atributo observado
	attributeChangedCallback(propName: AttributeFilterList, oldValue: string | undefined, newValue: string | undefined) {
		// Actualización del valor del atributo en la instancia
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		// Se vuelve a renderizar el componente
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		// Verificar si existe el shadowRoot
		if (this.shadowRoot) {
			// Se establece la estructura HTML del componente
			this.shadowRoot.innerHTML = `
      <section>
      <label for="crew">${this.label}</label><br>
      <section id="checkboxes">
      <section class="label-chechbox">
      <input type="checkbox" id="romance" value="first-checkbox" />
      <label for="romance">Romance</label>
      </section>
      <section class="label-chechbox">
      <input type="checkbox" id="action" value="second-checkbox" />
      <label for="action">Action</label>
      </section>
      <section class="label-chechbox">
      <input type="checkbox" id="comedy" value="thirth-checkbox" />
      <label for="comedy">Comedy</label>
      </section>
      <section class="label-chechbox">
      <input type="checkbox" id="Thriller" value="fourth-checkbox" />
      <label for="thriller">Thriller</label>
      </section>
      <section class="label-chechbox">
      <input type="checkbox" id="sci-fi" value="fifth-checkbox" />
      <label for="sci-fi">Sci-Fi</label>
      </section>
      <section class="label-chechbox">
      <input type="checkbox" id="drama" value="sixth-checkbox" />
      <label for="drama">Drama</label>
      </section>
      <section class="label-chechbox">
      <input type="checkbox" id="animated" value="seventh-checkbox" />
      <label for="animated">Animated</label>
      </section>
      <section class="label-chechbox">
      <input type="checkbox" id="classic" value="eighth-checkbox" />
      <label for="classic">Classics</label>
      </section>
      <section class="label-chechbox">
      <input type="checkbox" id="documental" value="ninth-checkbox" />
      <label for="documental">Documental</label>
      </section>
      <section class="label-chechbox">
      <input type="checkbox" id="psychological" value="second-checkbox" />
      <label for="psychological">Psychological</label>
      </section>
      `;
		}
		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssFilterList = this.ownerDocument.createElement('style');
		cssFilterList.innerHTML = styles;
		this.shadowRoot?.appendChild(cssFilterList);
	}
}
customElements.define('my-filters', FilterList);
