import {renderElement, RenderPosition} from "./utils.js";
import ProfileView from "./view/profile.js";
import MenuView from "./view/menu.js";
import SortView from "./view/sort.js";
import FilmsContainerView from "./view/films-container.js";
import FilmListView from "./view/film-list.js";
import FilmExtraView from "./view/film-extra.js";
import CardView from "./view/card.js";
import ButtonView from "./view/button.js";
import CountView from "./view/count.js";
import {generateFilm} from "./mock/films.js";
import PopupView from "./view/popup.js";
import {generateCountFilms} from "./mock/count-films.js";


const FILMS_CARD_COUNT = 5;
const FILMS_QUANTITY = 18;
const FILMS_CARD_EXTRA_COUNT = 2;
const FILMS_EXTRA_COUNT = 2;
const ESCAPE_KEY = `Escape`;

const films = new Array(FILMS_QUANTITY).fill().map(generateFilm);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

renderElement(siteHeaderElement, new ProfileView().getElement(), RenderPosition.BEFOREEND);

// Вставка меню и сортировки
renderElement(siteMainElement, new SortView().getElement(), RenderPosition.AFTERBEGIN);
renderElement(siteMainElement, new MenuView(films).getElement(), RenderPosition.AFTERBEGIN);

// Вставка главного списка и карточек в него
renderElement(siteMainElement, new FilmsContainerView().getElement(), RenderPosition.BEFOREEND);

const filmMainElement = siteMainElement.querySelector(`.films`);
renderElement(filmMainElement, new FilmListView().getElement(), RenderPosition.BEFOREEND);

const filmMainContainerElement = filmMainElement.querySelector(`.films-list__container`);

const filmMainWrapperElement = filmMainElement.querySelector(`.films-list`);
renderElement(filmMainWrapperElement, new ButtonView().getElement(), RenderPosition.BEFOREEND);

// Рендеринг карточек фильмов
const showMoreBtn = filmMainWrapperElement.querySelector(`.films-list__show-more`); // Кнопка показать еще
let countCards = FILMS_CARD_COUNT; // Счетчик фильмов

const openPopup = (i) => { // Функция открытия попапа
  bodyElement.classList.add(`hide-overflow`);
  bodyElement.appendChild(new PopupView(films[i]).getElement());
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
};

const showPopup = (i) => {
  filmCards[i].querySelector(`.film-card__title`).addEventListener(`click`, function () {
    openPopup(i);
  });

  filmCards[i].querySelector(`.film-card__poster`).addEventListener(`click`, function () {
    openPopup(i);
  });

  filmCards[i].querySelector(`.film-card__comments`).addEventListener(`click`, function () {
    openPopup(i);
  });
};

let filmCards = [];
const renderCards = () => { // Функция рендеринга карт фильмов
  if (countCards >= FILMS_QUANTITY) {
    for (let i = countCards - FILMS_CARD_COUNT; i < FILMS_QUANTITY; i++) {
      filmCards.push(new CardView(films[i]).getElement());
      renderElement(filmMainContainerElement, filmCards[i], RenderPosition.BEFOREEND);
      showPopup(i);
    }
    showMoreBtn.remove();
  } else {
    for (let i = countCards - FILMS_CARD_COUNT; i < countCards; i++) {
      filmCards.push(new CardView(films[i]).getElement());
      renderElement(filmMainContainerElement, filmCards[i], RenderPosition.BEFOREEND);
      showPopup(i);
    }
  }
  countCards += FILMS_CARD_COUNT;
};

renderCards();

showMoreBtn.addEventListener(`click`, function () {
  renderCards();
});

// Вставка списков Extra и карточек фильмов в них
const renderExtra = () => {
  for (let i = 0; i < FILMS_EXTRA_COUNT; i++) {
    renderElement(filmMainElement, new FilmExtraView().getElement(), RenderPosition.BEFOREEND);
  }
};

renderExtra();

const filmExtraElements = filmMainElement.querySelectorAll(`.films-list--extra`);

filmExtraElements.forEach(
    (currentValue) => {
      let filmExtraContainerElements = currentValue.querySelector(`.films-list__container`);
      for (let i = 0; i < FILMS_CARD_EXTRA_COUNT; i++) {
        renderElement(filmExtraContainerElements, new CardView(films[i]).getElement(), RenderPosition.BEFOREEND);
      }
    });

// Счетчик фильмов
const filmCountElement = document.querySelector(`.footer`);
renderElement(filmCountElement, new CountView(generateCountFilms()).getElement(), RenderPosition.BEFOREEND);

// Popup
const bodyElement = document.querySelector(`body`);

const closePopup = () => {
  bodyElement.classList.remove(`hide-overflow`);
  bodyElement.removeChild(bodyElement.querySelector(`.film-details`));
};

