import dayjs from "dayjs";
import {TEXT, FEELINGS, getRandomInteger, getRandomArrayElement, generateRandomText} from "../utils.js";

const CommentSentences = {
  MIN: 1,
  MAX: 3
};

const generateCommentFeeling = () => {
  return getRandomArrayElement(FEELINGS);
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
    text: generateRandomText(TEXT, CommentSentences.MIN, CommentSentences.MAX),
    feeling: generateCommentFeeling(),
    date: dayjs().subtract(getRandomInteger(0, 22700), `minute`).format(`DD/MM/YYYY HH:mm`),
    author: generateCommentAuthor()
  };
};
