import AbstractView from "./abstract.js";

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

export default class FilmExtra extends AbstractView {
  getTemplate() {
    return createFilmExtraTemplate();
  }
}
