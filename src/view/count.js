import {createElement} from "../utils.js";
const createCountTemplate = (quantity) => {
  return `<section class="footer__statistics">
            <p>${quantity} movies inside</p>
            </section>`;
};

export default class Count {
  constructor(quantity) {
    this._quantity = quantity;
    this._element = null;
  }

  getTemplate() {
    return createCountTemplate(this._quantity);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
