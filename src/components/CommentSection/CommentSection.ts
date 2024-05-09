import { DataCommentSection } from '../../services/dataComments';
import css from './CommentSection.css';

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
			<div class = "user-image">
				<img src="${this.image_profile}" alt="Image profile">
			</div>
				<div class = "right-side">
				<div class = "info-user">
					<span><h3>${this.name_profile}</h3> made a review</span>
					<span class="rating">★★★★★</span>
				</div>
				<div class = "info-comment">
					<p>${this.comment}</p>
				</div>
				</div>
			</section>
      `;
		}
		const cssCommentSection = this.ownerDocument.createElement('style');
		cssCommentSection.innerHTML = css;
		this.shadowRoot?.appendChild(cssCommentSection);
	}
}

customElements.define('my-comment-section', CommentSection);
