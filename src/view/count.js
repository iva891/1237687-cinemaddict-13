import AbstractView from "./abstract.js";

const createCountTemplate = (quantity) => {
  return `<section class="footer__statistics">
            <p>${quantity} movies inside</p>
            </section>`;
};

export default class Count extends AbstractView {
  constructor(quantity) {
    super();
    this._quantity = quantity;
  }

  getTemplate() {
    return createCountTemplate(this._quantity);
  }
}
