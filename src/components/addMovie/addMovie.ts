//esto es un modal que va a aparecer cuando se le de click a un boton flotante que va a estar puesto desde el abuelo
//al hacer el boton on click y los estilos igual, con el query selector. con esto vamos a hacer aparecer a este componente.
//aqui tiene que ir un formulario de la informacion necesaria para crear una pelicula, osea un forumalrio que tenga toda la ifno que vez cuando le das click a una pelicula.
//la asignacion de categoria se hara a traves de checkboxes
import css from './addMovie.css';
class AddMoviesModal extends HTMLElement {
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
				<section class= "container">

					<button id = "ButtonModal">+</button>
		</section>
				<section class="modalContainer" style="display: none;">
    <div class="modal-overlay">
				<section class="modal-content">
					<form class="my-form">
						<span class = "close">X</span>
							<h2>Add a movie</h2>
								<label for="fname">Name movie</label><br>
								<input type="text" id="fname" name="fname"><br><br>
								<label for="director">Director</label><br>
								<input type="text" id="directorMovie" name="director"><br><br>
								<label for="description">Description</label><br>
								<input type="text" id="descriptionMovie" name="description"><br><br>
								<label for="cast">Cast</label><br>
								<input type="text" id="castMovie" name="cast"><br><br>
								<label for="crew">Crew</label><br>
								<input type="text" id="crewMovie" name="crew"><br><br>
								<section>
										<label for="crew">Genres</label><br>
										<input type="checkbox" id="romance" value="first-checkbox" />
										<label for="romance">Romance</label>
										<input type="checkbox" id="action" value="second-checkbox" />
										<label for="action">Action</label>
										<input type="checkbox" id="comedy" value="thirth-checkbox" />
										<label for="comedy">Comedy</label>
										<input type="checkbox" id="Thriller" value="fourth-checkbox" />
										<label for="thriller">Thriller</label>
										<input type="checkbox" id="sci-fi" value="fifth-checkbox" />
										<label for="sci-fi">Sci-Fi</label>
										<input type="checkbox" id="drama" value="sixth-checkbox" />
										<label for="drama">Drama</label
										<input type="checkbox" id="animated" value="seventh-checkbox" />
										<label for="animated">Animated</label>
										<input type="checkbox" id="classic" value="eighth-checkbox" />
										<label for="classic">Classics</label>
										<input type="checkbox" id="documental" value="ninth-checkbox" />
										<label for="documental">Documental</label>
										<input type="checkbox" id="psychological" value="second-checkbox" />
										<label for="psychological">Psychological</label>
								</section>
								<button type="submit">Submit</button>
						</form>
						</div>

		</section>
		</section>
      `;
			const cssBanner = this.ownerDocument.createElement('style');
			cssBanner.innerHTML = css;
			this.shadowRoot?.appendChild(cssBanner);
			//se pone el ! para decirle que si existe y no salga como null xd
			const modal = this.shadowRoot.querySelector('.modalContainer')! as HTMLDivElement;

			const span = this.shadowRoot.querySelector('.close')!;
			span.addEventListener('click', () => {
				modal.style.display = 'none';
			});

			window.addEventListener('click', (event) => {
				if (event.target == modal) {
					modal.style.display = 'none';
				}
			});
			// const body = this.shadowRoot.querySelector('.body')! as HTMLDivElement;
			const button = this.shadowRoot.querySelector('#ButtonModal')!;
			button.addEventListener('click', (event) => {
				modal.style.display = 'block';
				// body.style.overflow = 'hidden';
			});
			const form = this.shadowRoot.querySelector('.my-form')!;
			form.addEventListener('submit', (event) => {
				event.preventDefault();
				modal.style.display = 'none';
			});
		}
	}
}
customElements.define('modal-movie', AddMoviesModal);
export default AddMoviesModal;
