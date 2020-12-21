export const createMenuTemplate = (array) => {
  let countWatchlist = 0;
  let countHistory = 0;
  let countFavorite = 0;

  array.forEach((element) => {
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

  const generateFilters = (obj) => {
    if (obj.value) {
      return `<a href="#${obj.title.toLowerCase()}" class="main-navigation__item">${obj.title} <span class="main-navigation__item-count">${obj.value}</span></a>`;
    } else {
      return `<a href="#${obj.title.toLowerCase().slice(0, 3)}" class="main-navigation__item">${obj.title}</a>`;
    }
  };

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
      ${filterData.map((item) => generateFilters(item)).join(` `)}
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};
