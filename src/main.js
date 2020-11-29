import {createProfileTemplate} from "./view/profile.js";
import {createMenuTemplate} from "./view/menu.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsContainerTemplate} from "./view/films-container.js";
import {createFilmListTemplate} from "./view/film-list.js";
import {createFilmExtraTemplate} from "./view/film-extra.js";
import {createCardTemplate} from "./view/card.js";
import {createButtonTemplate} from "./view/button.js";
import {createCountTemplate} from "./view/count.js";

const FILMS_CARD_COUNT = 5;
const FILMS_CARD_EXTRA_COUNT = 2;
const FILMS_EXTRA_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderSeveral = (count, container, template, place) => {
  for (let i = 0; i < count; i++) {
    render(container, template, place);
  }
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createProfileTemplate(), `beforeend`);

// Вставка меню и сортировки
render(siteMainElement, createSortTemplate(), `afterbegin`);
render(siteMainElement, createMenuTemplate(), `afterbegin`);

// Вставка главного списка и карточек в него
render(siteMainElement, createFilmsContainerTemplate(), `beforeend`);
const filmMainElement = siteMainElement.querySelector(`.films`);

render(filmMainElement, createFilmListTemplate(), `beforeend`);
const filmMainContainerElement = filmMainElement.querySelector(`.films-list__container`);

renderSeveral(FILMS_CARD_COUNT, filmMainContainerElement, createCardTemplate(), `beforeend`);

const filmMainWrapperElement = filmMainElement.querySelector(`.films-list`);
render(filmMainWrapperElement, createButtonTemplate(), `beforeend`);

// Вставка списков Extra и карточек фильмов в них

renderSeveral(FILMS_EXTRA_COUNT, filmMainElement, createFilmExtraTemplate(), `beforeend`);

const filmExtraElements = filmMainElement.querySelectorAll(`.films-list--extra`);

filmExtraElements.forEach(
    (currentValue) => {
      let filmExtraContainerElements = currentValue.querySelector(`.films-list__container`);
      renderSeveral(FILMS_CARD_EXTRA_COUNT, filmExtraContainerElements, createCardTemplate(), `beforeend`);
    });

// Счетчик фильмов
const filmCountElement = document.querySelector(`.footer`);
render(filmCountElement, createCountTemplate(), `beforeend`);
