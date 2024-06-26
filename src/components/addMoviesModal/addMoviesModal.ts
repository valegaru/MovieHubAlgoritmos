
import css from './addMoviesModal.css';

import { DataShapeMovie } from '../../types/movies';
import Firebase from '../../services/firebase';
import { appState } from '../../store';

const formData: Omit<DataShapeMovie, 'id'> = {
	title: '',
	image: '',
	categories: [],
	director: '',
	release_date: '',
	cast: '',
	crew: '',
	image_sec: '',
	description: '',
	catch_phrase: '',
	idUser: '',
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

	changeCatchPhrase(e: any) {
		formData.catch_phrase = e?.target?.value;
	}

	async render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
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
								<label for="catch">Catch-Phrase</label><br>
								<input type="text" id="catchMovie" name="catch" placeholder="An X-traordinary Origin Story"><br><br>
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
										<input type="checkbox" id="classic" value="classics" />
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
			const cssAddMovie = this.ownerDocument.createElement('style');
			cssAddMovie.innerHTML = css;
			this.shadowRoot?.appendChild(cssAddMovie);

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
			const button = this.shadowRoot.querySelector('#ButtonModal')!;
			button.addEventListener('click', (event) => {
				modal.style.display = 'block';
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

			//Crew
			const inputCrew = this.shadowRoot.querySelector('#crewMovie')!;
			inputCrew.addEventListener('change', this.changeCrew);

			//Poster or image
			const inputposter = this.shadowRoot.querySelector('#movieposter')!;
			inputposter.addEventListener('change', this.changeImage);

			//secondary Image
			const inputImageSec = this.shadowRoot.querySelector('#movieimage')!;
			inputImageSec.addEventListener('change', this.changeImageSec);

			//catch phrase
			const inputCatch = this.shadowRoot.querySelector('#catchMovie')!;
			inputCatch.addEventListener('change', this.changeCatchPhrase);

			//checkboxes for Categories
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
				});
			});

			const form = this.shadowRoot.querySelector('.my-form')!;
			form.addEventListener('submit', async (event) => {
				event.preventDefault();
				modal.style.display = 'none';
				formData.idUser = appState.user;
				await Firebase.addMovie(formData);

				// Limpiar los campos del formulario después de enviar
				(this.shadowRoot?.getElementById('fname') as HTMLInputElement).value = '';
				(this.shadowRoot?.getElementById('directorMovie') as HTMLInputElement).value = '';
				(this.shadowRoot?.getElementById('datemovie') as HTMLInputElement).value = '';
				(this.shadowRoot?.getElementById('catchMovie') as HTMLInputElement).value = '';
				(this.shadowRoot?.getElementById('descriptionMovie') as HTMLInputElement).value = '';
				(this.shadowRoot?.getElementById('castMovie') as HTMLInputElement).value = '';
				(this.shadowRoot?.getElementById('crewMovie') as HTMLInputElement).value = '';
				(this.shadowRoot?.getElementById('movieposter') as HTMLInputElement).value = '';
				(this.shadowRoot?.getElementById('movieimage') as HTMLInputElement).value = '';
				(this.shadowRoot?.getElementById('catchMovie') as HTMLInputElement).value = '';

				// Desmarcar todos los checkboxes
				const checkboxes = this.shadowRoot?.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
				checkboxes?.forEach((checkbox) => {
					checkbox.checked = false;
				});

				// Reiniciar el arreglo categories
				formData.categories = [];
			});
		}
	}
}
customElements.define('modal-movie', AddMoviesModal);
export default AddMoviesModal;
