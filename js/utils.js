
export const isEscapeKey = (evt) => evt.key === 'Escape';
export const isEnterKey = (evt) => evt.key === 'Enter';

//функция, проверяющая длину строки

export function checkLineLength(line, maxLength) {
  return line.length <= maxLength;
}

