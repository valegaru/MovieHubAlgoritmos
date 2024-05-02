//es la parte del form en el login y en el signin
import styles from './SessionForm.css';

export enum AttributeSessionForm {
	'utitle' = 'utitle',
	'your_name' = 'your_name',
	'mobile_number' = 'mobile_number',
	'email' = 'email',
	'emailornumber' = 'emailornumber',
	'password' = 'password',
	're_password' = 're_password',
}

export default class SessionForm extends HTMLElement {
	utitle?: string;
	your_name?: string; //si no recibe nada, el label y el input, no se muestran
	mobile_number?: string; //si no recibe nada, el label y el input, no se muestran
	email?: string; //si no recibe nada, el label y el input, no se muestran
	emailornumber?: string; //si no recibe nada, el label y el input, no se muestran
	password?: string; //si no recibe nada, el label y el input, no se muestran
	re_password?: string; //si no recibe nada, el label y el input, no se muestran

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeSessionForm, null> = {
			utitle: null,
			your_name: null,
			mobile_number: null,
			email: null,
			emailornumber: null,
			password: null,
			re_password: null,
		};
		return Object.keys(attrs);
	}

	// Método llamado cuando se cambia un atributo observado
	attributeChangedCallback(propName: AttributeSessionForm, oldValue: string | undefined, newValue: string | undefined) {
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
			let formContent = `
              <section id="header">
                  <span class="close"><img src="https://img.icons8.com/ios-filled/50/FB953C/delete-sign--v1.png" alt="delete-sign--v1"/></span>
                  <h1>${this.utitle}</h1>
              </section>
          `;

			// Comprobar cada propiedad antes de incluir el label y el input correspondiente
			if (this.your_name) {
				formContent += `
                  <label for="name">${this.your_name}</label><br>
                  <input type="text" class="space" name="name" placeholder="First and last name"><br><br>
              `;
			}

			if (this.mobile_number) {
				formContent += `
                  <label for="mobile">${this.mobile_number}</label><br>
                  <input type="text" class="space" name="mobile" placeholder="Don't forget your country code"><br><br>
              `;
			}

			if (this.email) {
				formContent += `
                  <label for="email">${this.email}</label><br>
                  <input type="text" class="space" name="email" placeholder="johndoe@movie.com"><br><br>
              `;
			}

			if (this.emailornumber) {
				formContent += `
                  <label for="emailornumber">${this.emailornumber}</label><br>
                  <input type="text" class="space" name="emailornumber"><br><br>
              `;
			}

			if (this.password) {
				formContent += `
                  <label for="password">${this.password}</label><br>
                  <input type="text" class="space" name="password" placeholder="At least 8 characters"><br><br>
              `;
			}

			if (this.re_password) {
				formContent += `
                  <label for="re_password">${this.re_password}</label><br>
                  <input type="text" class="space" name="re_password" placeholder="Confirm your password"><br><br>
              `;
			}

			formContent += '</section>';

			this.shadowRoot.innerHTML = formContent;
		}
		// Se crea un elemento <style> para aplicar los estilos CSS
		const cssExtraInfo = this.ownerDocument.createElement('style');
		cssExtraInfo.innerHTML = styles;
		this.shadowRoot?.appendChild(cssExtraInfo);
	}
}

customElements.define('my-sessionform', SessionForm);
