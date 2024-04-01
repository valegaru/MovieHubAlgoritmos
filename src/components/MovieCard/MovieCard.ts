import styles from './MovieCard.css';

export enum Attribute {
	'image' = 'image',
}

class MovieCard extends HTMLElement {
	image?: string;
	isLiked: boolean;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.isLiked = true; // Inicialmente se muestra el botón de "No me gusta"
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | number, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = /*En <a href="https://myflixerz.to/" class="details"> luego se ponen los hypervinculos dinamicos*/ `
			<div class="container">
			<section class="content">
				<a href="https://myflixerz.to/" class="link">
					<button type="button" class="details"></button>
				</a>
				<p>View details</p>
				<img class="dislike"  src="https://img.icons8.com/ios/50/FFFFFF/like--v1.png" alt="like--v1"/>
				<img class="like"  src="https://img.icons8.com/ios-filled/50/FFFFFF/like--v1.png" alt="like--v1"/>
				<p>Like</p>
			</section>
		</div>
		<img class="poster" src="${this.image}" >
			`;
			const likeButton = this.shadowRoot.querySelector('.like') as HTMLImageElement;
			const dislikeButton = this.shadowRoot.querySelector('.dislike') as HTMLImageElement;

			likeButton.addEventListener('click', () => {
				this.isLiked = true;
				likeButton.style.display = 'none';
				dislikeButton.style.display = 'inline';
			});

			dislikeButton.addEventListener('click', () => {
				this.isLiked = false;
				dislikeButton.style.display = 'none';
				likeButton.style.display = 'inline';
			});

			// Mostrar el botón correcto según el estado actual
			likeButton.style.display = this.isLiked ? 'none' : 'inline';
			dislikeButton.style.display = this.isLiked ? 'inline' : 'none';
		}

		const cssMovieCard = this.ownerDocument.createElement('style');
		cssMovieCard.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMovieCard);
	}
}

export default MovieCard;
customElements.define('movie-card', MovieCard);
