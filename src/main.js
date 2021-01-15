import {getRandomInteger} from "./utils/common.js";
import {renderElement, RenderPosition} from "./utils/render.js";
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
const ESCAPE_KEY = `Escape`;

const films = new Array(FILMS_QUANTITY).fill().map(generateFilm);

const bodyElement = document.querySelector(`body`);
const siteHeaderElement = bodyElement.querySelector(`.header`);
const siteMainElement = bodyElement.querySelector(`.main`);

renderElement(siteHeaderElement, new ProfileView(), RenderPosition.BEFOREEND);

// Вставка меню и сортировки
renderElement(siteMainElement, new SortView(), RenderPosition.AFTERBEGIN);
renderElement(siteMainElement, new MenuView(films), RenderPosition.AFTERBEGIN);

// Вставка главного списка и карточек в него
renderElement(siteMainElement, new FilmsContainerView(), RenderPosition.BEFOREEND);

const filmMainElement = siteMainElement.querySelector(`.films`);
renderElement(filmMainElement, new FilmListView(), RenderPosition.BEFOREEND);

const filmMainContainerElement = filmMainElement.querySelector(`.films-list__container`);

const filmMainWrapperElement = filmMainElement.querySelector(`.films-list`);

const showMoreBtn = new ButtonView();
renderElement(filmMainWrapperElement, showMoreBtn, RenderPosition.BEFOREEND);

// Рендеринг карточек фильмов
let countCards = FILMS_CARD_COUNT; // Счетчик фильмов

const onEscPress = (evt) => { // Закрытие попапа по клавише ESC
  if (evt.key === ESCAPE_KEY) {
    evt.preventDefault();
    closePopup();
    document.removeEventListener(`keydown`, onEscPress);
  }
};

const openPopup = (i) => { // Функция открытия попапа
  bodyElement.classList.add(`hide-overflow`);

  const popupFilm = new PopupView(films[i]);
  bodyElement.appendChild(popupFilm.getElement());

  popupFilm.setClickHandler(closePopup);
  document.addEventListener(`keydown`, onEscPress);
};

let filmCards = [];
const renderCards = () => { // Функция рендеринга карт фильмов
  if (countCards >= FILMS_QUANTITY) {
    for (let i = countCards - FILMS_CARD_COUNT; i < FILMS_QUANTITY; i++) {
      filmCards.push(new CardView(films[i]));
      renderElement(filmMainContainerElement, filmCards[i], RenderPosition.BEFOREEND);
      filmCards[i].setClickHandler(() => {
        openPopup(i);
      });
    }
    showMoreBtn.getElement().remove();
  } else {
    for (let i = countCards - FILMS_CARD_COUNT; i < countCards; i++) {
      filmCards.push(new CardView(films[i]));
      renderElement(filmMainContainerElement, filmCards[i], RenderPosition.BEFOREEND);
      filmCards[i].setClickHandler(() => {
        openPopup(i);
      });
    }
  }
  countCards += FILMS_CARD_COUNT;
};

renderCards();

showMoreBtn.setClickHandler(() => {
  renderCards();
});

// Вставка списков Extra и карточек фильмов в них

const something = new FilmExtraView().getElement();

renderElement(filmMainElement, something.firstChild, RenderPosition.BEFOREEND);
renderElement(filmMainElement, something.lastChild, RenderPosition.BEFOREEND);

const filmExtraElements = filmMainElement.querySelectorAll(`.films-list--extra`);

filmExtraElements.forEach(
    (currentValue) => {
      let filmExtraContainerElements = currentValue.querySelector(`.films-list__container`);
      let filmCardsExtra = [];
      for (let i = 0; i < FILMS_CARD_EXTRA_COUNT; i++) {
        let index = getRandomInteger(0, FILMS_QUANTITY - 1);
        filmCardsExtra.push(new CardView(films[index]));
        renderElement(filmExtraContainerElements, filmCardsExtra[i], RenderPosition.BEFOREEND);
        filmCardsExtra[i].setClickHandler(() => {
          openPopup(i);
        });
      }
    });

// Счетчик фильмов
const filmCountElement = bodyElement.querySelector(`.footer`);
renderElement(filmCountElement, new CountView(generateCountFilms()), RenderPosition.BEFOREEND);

const closePopup = () => {
  bodyElement.classList.remove(`hide-overflow`);
  bodyElement.removeChild(bodyElement.querySelector(`.film-details`));
};
