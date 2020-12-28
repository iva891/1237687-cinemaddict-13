import {getRandomInteger} from "../utils.js";

export const generateCountFilms = () => {
  return getRandomInteger(0, 1000000).toLocaleString();
};
