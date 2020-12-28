export const createMenuTemplate = (films) => {
  let countWatchlist = 0;
  let countHistory = 0;
  let countFavorite = 0;

  films.forEach((element) => {
    countWatchlist += element.isWatchlist;
    countHistory += element.isHistory;
    countFavorite += element.isFavorite;
  });

  const filterData = [{
    title: `All movies`,
  },
  {
    title: `Watchlist`,
    value: countWatchlist
  },
  {
    title: `History`,
    value: countHistory
  },
  {
    title: `Favorites`,
    value: countFavorite
  }
  ];

  const generateFilters = (filter) => {
    return `<a href="#${filter.value ? filter.title.toLowerCase() : filter.title.toLowerCase().slice(0, 3)}" class="main-navigation__item${filter.value ? `` : ` main-navigation__item--active`}">${filter.title} ${filter.value ? `<span class="main-navigation__item-count">${filter.value}</span>` : ``}</a>`;
  };

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
      ${filterData.map((item) => generateFilters(item)).join(` `)}
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};
