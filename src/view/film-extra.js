import {createElement} from "../utils.js";
const createFilmExtraTemplate = () => {

  const FILM_EXTRA_TITLE = [
    `Top rated`,
    `Most commented`
  ];

  const generateExtraList = (title) => {
    return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">${title}</h2>
    <div class="films-list__container">
    </div>
    </section>`;
  };

  return `<div>${FILM_EXTRA_TITLE.map((item) => generateExtraList(item)).join(` `)}</div>`;
};

export default class FilmExtra {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmExtraTemplate();
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
