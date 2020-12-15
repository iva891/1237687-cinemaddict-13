export const createMenuTemplate = (array) => {
  let countWatchlist = 0;
  let countHistory = 0;
  let countFavorite = 0;

  array.forEach((element) => {
    countWatchlist += element.isWatchlist;
    countHistory += element.isHistory;
    countFavorite += element.isFavorite;
  });

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${countWatchlist}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${countHistory}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${countFavorite}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};
