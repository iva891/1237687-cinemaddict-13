import {createProfileTemplate} from "./view/profile.js";
import {createMenuTemplate} from "./view/menu.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmsContainerTemplate} from "./view/films-container.js";
import {createFilmListTemplate} from "./view/film-list.js";
import {createFilmExtraTemplate} from "./view/film-extra.js";
import {createCardTemplate} from "./view/card.js";
import {createButtonTemplate} from "./view/button.js";
import {createCountTemplate} from "./view/count.js";
import {generateFilm} from "./mock/films.js";
import {createPopupTemplate} from "./view/popup.js";
import {generateCountFilms} from "./mock/count-films.js";


const FILMS_CARD_COUNT = 5;
const FILMS_QUANTITY = 18;
const FILMS_CARD_EXTRA_COUNT = 2;
const FILMS_EXTRA_COUNT = 2;
const ESCAPE_KEY = `Escape`;

const films = new Array(FILMS_QUANTITY).fill().map(generateFilm);

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
render(siteMainElement, createMenuTemplate(films), `afterbegin`);

// Вставка главного списка и карточек в него
render(siteMainElement, createFilmsContainerTemplate(), `beforeend`);

const filmMainElement = siteMainElement.querySelector(`.films`);
render(filmMainElement, createFilmListTemplate(), `beforeend`);

const filmMainContainerElement = filmMainElement.querySelector(`.films-list__container`);

const filmMainWrapperElement = filmMainElement.querySelector(`.films-list`);
render(filmMainWrapperElement, createButtonTemplate(), `beforeend`);

// Рендеринг карточек фильмов
const showMoreBtn = filmMainWrapperElement.querySelector(`.films-list__show-more`); // Кнопка показать еще
let countCards = FILMS_CARD_COUNT; // Счетчик фильмов

const renderCards = () => { // Функция рендеринга карт фильмов
  if (countCards >= FILMS_QUANTITY) {
    for (let i = countCards - FILMS_CARD_COUNT; i < FILMS_QUANTITY; i++) {
      render(filmMainContainerElement, createCardTemplate(films[i]), `beforeend`);
    }
    showMoreBtn.remove();
  } else {
    for (let i = countCards - FILMS_CARD_COUNT; i < countCards; i++) {
      render(filmMainContainerElement, createCardTemplate(films[i]), `beforeend`);
    }
  }
  countCards += FILMS_CARD_COUNT;
};

renderCards();

showMoreBtn.addEventListener(`click`, function () {
  renderCards();
});

// Вставка списков Extra и карточек фильмов в них

renderSeveral(FILMS_EXTRA_COUNT, filmMainElement, createFilmExtraTemplate(), `beforeend`);

const filmExtraElements = filmMainElement.querySelectorAll(`.films-list--extra`);

filmExtraElements.forEach(
    (currentValue) => {
      let filmExtraContainerElements = currentValue.querySelector(`.films-list__container`);
      for (let i = 0; i < FILMS_CARD_EXTRA_COUNT; i++) {
        render(filmExtraContainerElements, createCardTemplate(films[i]), `beforeend`);
      }
    });

// Счетчик фильмов
const filmCountElement = document.querySelector(`.footer`);
render(filmCountElement, createCountTemplate(generateCountFilms()), `beforeend`);

// Popup
const bodyElement = document.querySelector(`body`);
const popupContainer = bodyElement.querySelector(`footer`);
const openPopupBlocks = filmMainContainerElement.querySelectorAll(`.film-card`);

const closePopup = () => {
  bodyElement.classList.remove(`hide-overflow`);
  bodyElement.querySelector(`.film-details`).remove();
};

openPopupBlocks[0].addEventListener(`click`, function () {
  bodyElement.classList.add(`hide-overflow`);
  render(popupContainer, createPopupTemplate(films[0]), `afterend`);
  let closePopupBtn = bodyElement.querySelector(`.film-details__close-btn`);
  closePopupBtn.addEventListener(`click`, function () {
    closePopup();
  });
  document.addEventListener(`keydown`, function (evt) {
    if (evt.key === ESCAPE_KEY) {
      evt.preventDefault();
      closePopup();
    }
  }, {
    once: true
  });
});

