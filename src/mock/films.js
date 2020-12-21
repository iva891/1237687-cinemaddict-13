import dayjs from "dayjs";
import {TEXT, getRandomInteger, getRandomArrayElement, getSeveralRandomArrayElement, generateRandomText} from "../utils.js";

const MIN_DESCRIPTION_SENTENCES = 1;
const MAX_DESCRIPTION_SENTENCES = 5;
const MIN_GENRES = 1;
const MAX_GENRES = 3;
const MIN_WRITERS = 1;
const MAX_WRITERS = 3;
const MIN_ACTORS = 1;
const MAX_ACTORS = 5;

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

  let result = getSeveralRandomArrayElement(genres, MIN_GENRES, MAX_GENRES);

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

  let result = getSeveralRandomArrayElement(writers, MIN_WRITERS, MAX_WRITERS);
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

  let result = getSeveralRandomArrayElement(actors, MIN_ACTORS, MAX_ACTORS);
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
    description: generateRandomText(TEXT, MIN_DESCRIPTION_SENTENCES, MAX_DESCRIPTION_SENTENCES),
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

