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
      <h2>POPULAR REVIEWS</h2>
      <img src="${this.image_profile}" alt="Image profile">
      <h3>${this.name_profile} made a review</h3>
      <!-- estrellas -->
      <p>${this.comment}</p>
      `;
		}
	}
}

customElements.define('my-comment-section', CommentSection);
