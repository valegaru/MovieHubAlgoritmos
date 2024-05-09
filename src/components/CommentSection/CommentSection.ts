import { DataCommentSection } from '../../services/dataComments';

export enum AttributeCommentSection {
	'image_profile' = 'image_profile',
	'name_profile' = 'name_profile',
	'comment' = 'comment',
}

export default class CommentSection extends HTMLElement {
	image_profile?: string;
	name_profile?: string;
	comment?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCommentSection, null> = {
			image_profile: null,
			name_profile: null,
			comment: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(
		propName: AttributeCommentSection,
		oldValue: string | undefined,
		newValue: string | undefined
	) {
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
			this.shadowRoot.innerHTML = /*html*/ `
			<section class = "comment-section">
				<div class = "info-user">
					<img src="${this.image_profile}" alt="Image profile">
					<span class="rating">★★★★★</span>
					<h3>${this.name_profile} made a review</h3>
				</div>
				<div class = "info-comment">
					<p>${this.comment}</p>
				</div>
			</section>
      `;
		}
	}
}

customElements.define('my-comment-section', CommentSection);
