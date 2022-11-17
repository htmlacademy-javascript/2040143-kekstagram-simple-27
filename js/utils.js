const ERROR_MESSAGE_TIME = 13000;

export const isEscapeKey = (evt) => evt.key === 'Escape';
export const isEnterKey = (evt) => evt.key === 'Enter';

//функция, проверяющая длину строки

export function checkLineLength(line, maxLength) {
  return line.length <= maxLength;
}

const uploadErrorMessage = document.querySelector('#error').content.querySelector('.error');


export const blockError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.value = uploadErrorMessage;
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '20%';
  alertContainer.style.top = '40%';
  alertContainer.style.right = '20%';
  alertContainer.style.padding = '40px 150px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'tomato';
  alertContainer.style.color = 'black';
  alertContainer.style.minHeight = '60px';
  alertContainer.style.lineHeight = '28px';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ERROR_MESSAGE_TIME);
};
