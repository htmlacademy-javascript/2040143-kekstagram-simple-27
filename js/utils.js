export const isEscapeKey = (evt) => evt.key === 'Escape';
export const isEnterKey = (evt) => evt.key === 'Enter';

//функция, проверяющая длину строки

export function checkLineLength(line, maxLength) {
  return line.length <= maxLength;
}

//Функция, возвращающая случайное целое число из переданного диапазона включительно, аргументы - целые числа, они больше или равны 0.
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

export function getRandomNumber(firstNumber, secondNumber) {
  if (firstNumber >= 0 && firstNumber <= secondNumber && Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
    firstNumber = Math.ceil(firstNumber);
    secondNumber = Math.floor(secondNumber);
    return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  }

  return NaN;
}
