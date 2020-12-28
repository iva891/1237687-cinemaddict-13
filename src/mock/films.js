import dayjs from "dayjs";
import {TEXT, MAX_COMMENTS, getRandomInteger, getRandomArrayElement, getSeveralRandomArrayElement, generateRandomText} from "../utils.js";

const Sentences = {
  MIN: 1,
  MAX: 5
};
const Genres = {
  MIN: 1,
  MAX: 3
};
const Writers = {
  MIN: 1,
  MAX: 3
};
const Actors = {
  MIN: 1,
  MAX: 5
};

const generateIdComments = () => {
  let ids = [];

  for (let i = 0; i < MAX_COMMENTS; i++) {
    ids[i] = i;
  }

  let result = getSeveralRandomArrayElement(ids, 0, ids.length - 1);

  return result;
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

const generateGenres = () => {
  const genres = [
    `Drama`,
    `Film-Noir`,
    `Mystery`,
    `Comedy`,
    `Action`,
    `Western`
  ];

  let result = getSeveralRandomArrayElement(genres, Genres.MIN, Genres.MAX);

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

  let result = getSeveralRandomArrayElement(writers, Writers.MIN, Writers.MAX);
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

  let result = getSeveralRandomArrayElement(actors, Actors.MIN, Actors.MAX);
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
    idComments: generateIdComments(),
    title,
    originalTitle: title,
    poster: generatePoster(),
    description: generateRandomText(TEXT, Sentences.MIN, Sentences.MAX),
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

