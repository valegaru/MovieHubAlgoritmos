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
			//cambiar el placeholder de crew
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
								<input type="text" id="fname" name="fname" placeholder="Pearl"><br><br>
								<label for="director">Director</label><br>
								<input type="text" id="directorMovie" name="director" placeholder="Ti West"><br><br>
								<label for="date">Release date</label><br>
								<input type="date" id="datemovie" name="date" ><br><br>
								<label for="description">Description</label><br>
								<input type="text" id="descriptionMovie" name="description" placeholder="Pearl (subtitled An X-traordinary Origin Story) is a 2022 American horror film directed by Ti West, co-written by West and Mia Goth, who reprises her role as the title character, and featuring David Corenswet, Tandi Wright, Matthew Sunderland and Emma Jenkins-Purro in supporting roles. A prequel to X (2022) and the second installment in the X film series, it serves as an origin story for the title villain, whose fervent aspiration to become a movie star led her to committing violent acts on her family's Texas homestead in 1918."><br><br>
								<label for="cast">Cast</label><br>
								<input type="text" id="castMovie" name="cast" placeholder="Mia Goth, David Corenswet, Alistair Sewell, Emma Jenkins, Matthew Sunderland, Tandi Wright"><br><br>
								<label for="crew">Crew</label><br>
								<input type="text" id="crewMovie" name="crew" placeholder="Mia Goth, David Corenswet, Alistair Sewell, Emma Jenkins, Matthew Sunderland, Tandi Wright"><br><br>
								<label for="poster">Enter movie poster url</label><br>
								<input type="text" id="movieposter" name="poster" placeholder="https://pics.filmaffinity.com/Pearl-745024740-large.jpg"><br><br>
								<label for="image">Enter secondary image url</label><br>
								<input type="text" id="movieimage" name="image" placeholder="https://pics.filmaffinity.com/Pearl-745024740-large.jpg"><br><br>
								<section>
										<label for="crew">Genres</label><br>
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
										</section>
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
