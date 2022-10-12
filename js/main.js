const PICTURES_NUMBER = 25;
const LikesNumber = {
  MIN: 15,
  MAX: 200,
};

const CommentsNumber = {
  MIN: 0,
  MAX: 200,
};

//Функция, возвращающая случайное целое число из переданного диапазона включительно, аргументы - целые числа, они больше или равны 0.
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

function checkLineLength(line, maxLength) {
  return line.length <= maxLength;
}

checkLineLength();

function getRandomNumber(firstNumber, secondNumber) {
  if (firstNumber >= 0 && firstNumber <= secondNumber && Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
    firstNumber = Math.ceil(firstNumber);
    secondNumber = Math.floor(secondNumber);
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  }

  return NaN;
}

getRandomNumber();

const descriptPicture = (index) => ({
  id: index,
  url: `photos/${ index }.jpg`,
  description: 'Эта фотография сделана одним из наших авторов',
  likes: getRandomNumber(LikesNumber.MIN, LikesNumber.MAX),
  comments: getRandomNumber(CommentsNumber.MIN, CommentsNumber.MAX),
});

descriptPicture();

const userPictures = Array.from({length: PICTURES_NUMBER}, (_, pictureIndex) => descriptPicture (pictureIndex + 1));

userPictures();
