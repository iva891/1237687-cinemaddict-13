import {getRandomInteger} from "../utils/common.js";

export const generateCountFilms = () => {
  return getRandomInteger(0, 1000000).toLocaleString();
};
