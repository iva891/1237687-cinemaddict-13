import dayjs from "dayjs";
import {TEXT, UNIVERSAL_ID, feelings, getRandomInteger, getRandomArrayElement, generateRandomText} from "../utils.js";

const CommentSentences = {
  MIN: 1,
  MAX: 3
};

const generateCommentFeeling = () => {
  return getRandomArrayElement(feelings);
};

const generateCommentAuthor = () => {
  const authors = [
    `Tim Macoveev`,
    `John Doe`,
    `Martin Donovan`,
    `Neil Andrea`,
    `Albert Kramer`
  ];
  return getRandomArrayElement(authors);
};

export const generateComment = () => {
  return {
    idfilm: UNIVERSAL_ID,
    text: generateRandomText(TEXT, CommentSentences.MIN, CommentSentences.MAX),
    feeling: generateCommentFeeling(),
    date: dayjs().subtract(getRandomInteger(0, 22700), `minute`).format(`DD/MM/YYYY HH:mm`),
    author: generateCommentAuthor()
  };
};
