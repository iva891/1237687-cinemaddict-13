export const TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

export const FEELINGS = [
  `angry`,
  `puke`,
  `sleeping`,
  `smile`
];

export const MAX_COMMENTS = 5;


export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayElement = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
};

export const getSeveralRandomArrayElement = (array, minElem = 0, maxElem = array.length - 1) => {
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

export const generateRandomText = (text, minsentences, maxsentences) => {
  const textArray = text.match(/[^\.!\?]+[\.!\?]+[`']?/g);

  let result = getSeveralRandomArrayElement(textArray, minsentences, maxsentences);
  return result.join(` `);
};

