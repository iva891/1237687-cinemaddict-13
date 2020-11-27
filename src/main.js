import {createUserProfileTemplate} from "./view/profile.js";
import {createMainMenuTemplate} from "./view/menu.js";
import {createMainSortTemplate} from "./view/sort.js";
import {createFilmMainContainerTemplate, createFilmListTemplate, createFilmExtraListTemplate} from "./view/films.js";
import {createFilmCardTemplate} from "./view/card.js";
import {createButtonTemplate} from "./view/button.js";
import {createFilmCountTemplate} from "./view/count.js";

const FILMS_CARD_COUNT = 5;
const FILMS_CARD_EXTRA_COUNT = 2;
const FILMS_EXTRA_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createUserProfileTemplate(), `beforeend`);

//Вставка меню и сортировки
render(siteMainElement, createMainSortTemplate(), 'afterbegin');
render(siteMainElement, createMainMenuTemplate(), 'afterbegin');

//Вставка главного списка и карточек в него
render(siteMainElement, createFilmMainContainerTemplate(), `beforeend`);
const filmMainElement = document.querySelector(`.films`);

render(filmMainElement, createFilmListTemplate(), `beforeend`);
const filmMainContainerElement = document.querySelector('.films-list__container');
for (let i = 0; i < FILMS_CARD_COUNT; i++) {
  render(filmMainContainerElement, createFilmCardTemplate(), `beforeend`);
}
const filmMainWrapperElement = filmMainElement.querySelector('.films-list');
render(filmMainWrapperElement, createButtonTemplate(), `beforeend`);

//Вставка списков Extra и карточек фильмов в них
for (let i = 0; i < FILMS_EXTRA_COUNT; i++) {
  render(filmMainElement, createFilmExtraListTemplate(), `beforeend`);
}

const filmExtraElements = document.querySelectorAll('.films-list--extra');

for (let i = 0; i < filmExtraElements.length; i++) {
  let filmExtraContainerElements = filmExtraElements[i].querySelector('.films-list__container');
  for (let j = 0; j < FILMS_CARD_EXTRA_COUNT; j++)
  render(filmExtraContainerElements, createFilmCardTemplate(), `beforeend`);
}

//Счетчик фильмов
const filmCountElement = document.querySelector('.footer__statistics');
render(filmCountElement, createFilmCountTemplate(), `beforeend`);
