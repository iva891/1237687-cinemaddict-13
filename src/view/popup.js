import {feelings, getRandomInteger} from "../utils.js";
import {generateComment} from "../mock/comments.js";

const MAX_COMMENTS = 5;

const createGenresTemplate = (genres) => {
  let genresTitle = (genres.length === 1) ? `Genre` : `Genres`;
  const generateGenres = (genre) => {
    return `<span class="film-details__genre">${genre}</span>`;
  };

  return `<td class="film-details__term">${genresTitle}</td>
  <td class="film-details__cell">
    ${genres.map((genre) => generateGenres(genre)).join(` `)}
  </td>`;
};

let comments = new Array(getRandomInteger(0, MAX_COMMENTS)).fill().map(generateComment);

const generateComments = (comment) => {
  return (comments.length === 0) ?
    `` : `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${comment.feeling}.png" width="55" height="55" alt="emoji-${comment.feeling}">
    </span>
    <div>
      <p class="film-details__comment-text">${comment.text}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${comment.author}</span>
        <span class="film-details__comment-day">${comment.date}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;

};

const generateEmojiControl = (feeling) => {
  return `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${feeling}" value="${feeling}">
  <label class="film-details__emoji-label" for="emoji-${feeling}">
    <img src="./images/emoji/${feeling}.png" width="30" height="30" alt="emoji">
  </label>`;
};

export const createPopupTemplate = (film) => {
  const {
    id,
    title,
    originalTitle,
    poster,
    description,
    rating,
    productFullDate,
    duration,
    genres,
    director,
    writers,
    actors,
    country,
    ageRating,
    isWatchlist,
    isHistory,
    isFavorite,
  } = film;

  comments = comments.filter((item) => item.idfilm === id);

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src=${poster} alt="">

        <p class="film-details__age">${ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${originalTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${productFullDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
                ${createGenresTemplate(genres)}
            </tr>
          </table>

          <p class="film-details__film-description">
            ${description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isWatchlist ? `checked` : ``}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isHistory ? `checked` : ``}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite"${isFavorite ? `checked` : ``}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">
        ${comments.map((item) => generateComments(item)).join(` `)}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
          ${feelings.map((feeling) => generateEmojiControl(feeling)).join(` `)}
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};
