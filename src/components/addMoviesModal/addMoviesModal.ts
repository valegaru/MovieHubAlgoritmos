//esto es un modal que va a aparecer cuando se le de click a un boton flotante
//aqui tiene que ir un formulario de la informacion necesaria para crear una pelicula, osea un forumalrio que tenga toda la ifno que vez cuando le das click a una pelicula.
//la asignacion de categoria se hara a traves de checkboxes
import ButtonCustom, { AttributeButton } from '../ButtonCustom/ButtonCustom';

import css from './addMoviesModal.css';

import { DataShapeMovie } from '../../types/movies';
import Firebase from '../../services/firebase';

const formData: Omit<DataShapeMovie, 'id'> = {
	title: '',
	image: '',
	categories: [], //puede tener los stirng que quiera dentro de categories, es decir asignarle las categorias que uno quiera
	director: '',
	release_date: '',
	cast: '',
	crew: '',
	image_sec: '',
	description: '',
};

class AddMoviesModal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeTitle(e: any) {
		formData.title = e?.target?.value;
	}

	changeImage(e: any) {
		formData.image = e?.target?.value;
	}

	changeCategories(e: any) {
		formData.categories = e?.target?.value;
	}

	changeDirector(e: any) {
		formData.director = e?.target?.value;
	}

	changeRelease(e: any) {
		formData.release_date = e?.target?.value;
	}

	changeCast(e: any) {
		formData.cast = e?.target?.value;
	}
	changeCrew(e: any) {
		formData.crew = e?.target?.value;
	}
	changeImageSec(e: any) {
		formData.image_sec = e?.target?.value;
	}

	changeDescription(e: any) {
		formData.description = e?.target?.value;
	}

	async render() {
		if (this.shadowRoot) {
			// Se comprueba si el shadowRoot está disponible

			// Se establece la estructura HTML del modal
			this.shadowRoot.innerHTML = /*html*/ `
				<section class= "container">

					<button id = "ButtonModal">+</button>
		</section>
				<section class="modalContainer" style="display: none;">
    <div class="modal-overlay">
				<section class="modal-content">
					<form class="my-form">
					<section id="header">
						<span class = "close"><img src="https://img.icons8.com/ios-filled/50/FB953C/delete-sign--v1.png" alt="delete-sign--v1"/></span>
							<h2>Add a movie</h2>
							</section>
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
										<input type="checkbox" id="romance" value="romance" />
										<label for="romance">Romance</label>
										</section>
										<section class="label-chechbox">
										<input type="checkbox" id="action" value="action" />
										<label for="action">Action</label>
										</section>
										<section class="label-chechbox">
										<input type="checkbox" id="comedy" value="comedy" />
										<label for="comedy">Comedy</label>
										</section>
										<section class="label-chechbox">
										<input type="checkbox" id="Thriller" value="thriller" />
										<label for="thriller">Thriller</label>
										</section>
										<section class="label-chechbox">
										<input type="checkbox" id="sci-fi" value="sci-fi" />
										<label for="sci-fi">Sci-Fi</label>
										</section>
										<section class="label-chechbox">
										<input type="checkbox" id="drama" value="drama" />
										<label for="drama">Drama</label>
										</section>
										<section class="label-chechbox">
										<input type="checkbox" id="animated" value="animated" />
										<label for="animated">Animated</label>
										</section>
										<section class="label-chechbox">
										<input type="checkbox" id="classic" value="classic" />
										<label for="classic">Classics</label>
										</section>
										<section class="label-chechbox">
										<input type="checkbox" id="documental" value="documental" />
										<label for="documental">Documental</label>
										</section>
										<section class="label-chechbox">
										<input type="checkbox" id="psychological" value="psychological" />
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
			// Se añade el CSS al shadowRoot
			const cssAddMovie = this.ownerDocument.createElement('style');
			cssAddMovie.innerHTML = css;
			this.shadowRoot?.appendChild(cssAddMovie);
			//se pone el ! para decirle que si existe y no salga como null
			// Se obtienen referencias a los elementos del DOM
			const modal = this.shadowRoot.querySelector('.modalContainer')! as HTMLDivElement;

			const span = this.shadowRoot.querySelector('.close')!;
			// Se añaden event listeners para mostrar y ocultar el modal
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

			//TITLE
			const inputTitle = this.shadowRoot.querySelector('#fname')!;
			inputTitle.addEventListener('change', this.changeTitle);

			//director
			const inputDirector = this.shadowRoot.querySelector('#directorMovie')!;
			inputDirector.addEventListener('change', this.changeDirector);

			//release date
			const inputDate = this.shadowRoot.querySelector('#datemovie')!;
			inputDate.addEventListener('change', this.changeRelease);

			//Description
			const inputDescription = this.shadowRoot.querySelector('#descriptionMovie')!;
			inputDescription.addEventListener('change', this.changeDescription);

			//Cast
			const inputCast = this.shadowRoot.querySelector('#castMovie')!;
			inputCast.addEventListener('change', this.changeCast);

			//Cast
			const inputCrew = this.shadowRoot.querySelector('#crewMovie')!;
			inputCrew.addEventListener('change', this.changeCrew);

			//Poster or image
			const inputposter = this.shadowRoot.querySelector('#movieposter')!;
			inputposter.addEventListener('change', this.changeImage);

			//secondary Image
			const inputImageSec = this.shadowRoot.querySelector('#movieimage')!;
			inputImageSec.addEventListener('change', this.changeImageSec);

			const checkboxes = this.shadowRoot.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');

			// Iterar sobre cada checkbox y agregar un event listener
			checkboxes.forEach((checkbox) => {
				checkbox.addEventListener('change', (event) => {
					// Si el checkbox está marcado, agregar su valor al arreglo categories
					if (checkbox.checked) {
						formData.categories.push(checkbox.value);
					} else {
						// Si el checkbox está desmarcado, eliminar su valor del arreglo categories
						const index = formData.categories.indexOf(checkbox.value);
						if (index !== -1) {
							formData.categories.splice(index, 1);
						}
					}
					console.log('Arreglo de categorías actualizado:', formData.categories);
				});
			});

			// Se añade un event listener al formulario para prevenir el envío y ocultar el modal
			const form = this.shadowRoot.querySelector('.my-form')!;
			form.addEventListener('submit', (event) => {
				event.preventDefault();
				modal.style.display = 'none';
				Firebase.addMovie(formData);
			});
		}
	}
}
customElements.define('modal-movie', AddMoviesModal);
export default AddMoviesModal;
