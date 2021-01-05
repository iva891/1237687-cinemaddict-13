const MAX_DESCRIPTION_LENGTH = 140;

export const createCardTemplate = (film) => {
  const {
    title,
    poster,
    description,
    comments,
    rating,
    productYear,
    duration,
    genres,
    isWatchlist,
    isHistory,
    isFavorite
  } = film;

  const getDescription = () => {
    let shotDescription;
    if (description.length > MAX_DESCRIPTION_LENGTH) {
      shotDescription = description.slice(0, MAX_DESCRIPTION_LENGTH - 1) + `...`;
    } else {
      shotDescription = description;
    }
    return shotDescription;
  };

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${productYear}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genres}</span>
  </p>
  <img src=${poster} alt="" class="film-card__poster">
  <p class="film-card__description">${getDescription()}</p>
  <a class="film-card__comments">${comments} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchlist ? `film-card__controls-item--active` : ``}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isHistory ? `film-card__controls-item--active` : ``}" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? `film-card__controls-item--active` : ``}" type="button">Mark as favorite</button>
  </div>
</article>`;
};
