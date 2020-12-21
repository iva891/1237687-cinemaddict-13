import dayjs from "dayjs";
import {TEXT, getRandomInteger, getRandomArrayElement, generateRandomText} from "../utils.js";

const MIN_COMMENTS_SENTENCES = 1;
const MAX_COMMENTS_SENTENCES = 3;

const generateCommentEmoji = () => {
  const emojis = [
    `./images/emoji/angry.png`,
    `./images/emoji/puke.png`,
    `./images/emoji/sleeping.png`,
    `./images/emoji/smile.png`
  ];
  return getRandomArrayElement(emojis);
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
    text: generateRandomText(TEXT, MIN_COMMENTS_SENTENCES, MAX_COMMENTS_SENTENCES),
    emoji: generateCommentEmoji(),
    date: dayjs().subtract(getRandomInteger(0, 9), `day`).format(`DD/MM/YYYY`),
    time: `${getRandomInteger(0, 2)}${getRandomInteger(0, 3)}:${getRandomInteger(0, 5)}${getRandomInteger(0, 9)}`,
    author: generateCommentAuthor()
  };
};
