import dayjs from "dayjs";

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;


const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayElement = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
};

const getSeveralRandomArrayElement = (array, minElem = 0, maxElem = array.length - 1) => {
  const numberSentence = getRandomInteger(minElem, maxElem);
  let randomElements = [];
  for (let i = 0; i < numberSentence; i++) {
    let checkElement = array[getRandomInteger(0, array.length - 1)];
    if (randomElements.includes(checkElement)) {
      i--;
    } else {
      randomElements.push(checkElement);
    }
  }
  return randomElements;
};

const generateTitle = () => {
  const titles = [
    `The Dance of Life`,
    `Sagebrush Trail`,
    `The Man with the Golden Arm`,
    `Santa Claus Conquers the Martians`,
    `Popeye the Sailor Meets Sindbad the Sailor`
  ];

  return getRandomArrayElement(titles);
};

const generatePoster = () => {
  const posters = [
    `./images/posters/made-for-each-other.png`,
    `./images/posters/popeye-meets-sinbad.png`,
    `./images/posters/sagebrush-trail.jpg`,
    `./images/posters/santa-claus-conquers-the-martians.jpg`,
    `./images/posters/the-dance-of-life.jpg`,
    `./images/posters/the-great-flamarion.jpg`,
    `./images/posters/the-man-with-the-golden-arm.jpg`
  ];
  return getRandomArrayElement(posters);
};

const generateDescription = () => {
  const textArray = TEXT.match(/[^\.!\?]+[\.!\?]+[`']?/g);

  let result = getSeveralRandomArrayElement(textArray, 1, 5);
  return result.join(` `);
};

const generateGenres = () => {
  const genres = [
    `Drama`,
    `Film-Noir`,
    `Mystery`,
    `Comedy`,
    `Action`,
    `Western`
  ];

  let result = getSeveralRandomArrayElement(genres, 1, 3);

  return result;
};

const generateDirector = () => {
  const directors = [
    `Michael Bay`,
    `Edward Burns`,
    `Ethan Coen`,
    `Joel Coen`,
    `Anthony Mann`
  ];

  return getRandomArrayElement(directors);
};

const generateWriters = () => {
  const writers = [
    `Woody Allen`,
    `Anne Wigton`,
    `Heinz Herald`,
    `Richard Weil`
  ];

  let result = getSeveralRandomArrayElement(writers, 1, 3);
  return result.join(`, `);
};

const generateActors = () => {
  const actors = [
    `Erich von Stroheim`,
    `Mary Beth Hughes`,
    `Dan Duryea`,
    `Johnny Depp`,
    `Robert De Niro`,
    `Kevin Spacey`,
    `Brad Pitt`,
    `Angelina Jolie`,
    `Leonardo DiCaprio`
  ];

  let result = getSeveralRandomArrayElement(actors, 1, 5);
  return result.join(`, `);
};

const generateCountry = () => {
  const countries = [
    `USA`,
    `France`,
    `Germany`,
    `Russia`,
    `China`
  ];

  return getRandomArrayElement(countries);
};

export const generateFilm = () => {
  let title = generateTitle();
  let productYear = getRandomInteger(1950, 2007);
  return {
    title,
    originalTitle: title,
    poster: generatePoster(),
    description: generateDescription(),
    comments: getRandomInteger(0, 5),
    rating: `${getRandomInteger(1, 9)}.${getRandomInteger(1, 9)}`,
    productYear,
    productFullDate: `${getRandomInteger(1, 28)} ${dayjs().add(getRandomInteger(1, 12), `month`).format(`MMMM`)} ${productYear}`,
    duration: `${getRandomInteger(1, 2)}h ${getRandomInteger(0, 59)}m`,
    genres: generateGenres(),
    director: generateDirector(),
    writers: generateWriters(),
    actors: generateActors(),
    country: generateCountry(),
    ageRating: `${2 * getRandomInteger(0, 9)}+`,
    isWatchlist: getRandomInteger(0, 1),
    isHistory: getRandomInteger(0, 1),
    isFavorite: getRandomInteger(0, 1),
  };
};

