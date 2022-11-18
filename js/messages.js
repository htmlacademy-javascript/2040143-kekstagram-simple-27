import {isEscapeKey} from './utils.js';

const uploadErrorMessage = document.querySelector('#error').content.querySelector('.error');
const uploadSuccessMessage = document.querySelector('#success').content.querySelector('.success');
const bodyElement = document.querySelector('body');
const successMessageCloseButton = uploadSuccessMessage.querySelector('.success__button');
const errorMessageCloseButton = uploadErrorMessage.querySelector('.error__button');


const onEscMessageDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeMessage();
  }
};

const onPageMessageClick = () => {
  removeMessage();
};

const onCloseButtonClick = () => {
  removeMessage();
};


export const showUploadSuccessMessage = () => {
  const uploadSuccessMessageElement = uploadSuccessMessage.cloneNode(true);
  bodyElement.append(uploadSuccessMessageElement);
  document.addEventListener('click', onPageMessageClick);
  document.addEventListener('keydown', onEscMessageDown);
  successMessageCloseButton.addEventListener('click', onCloseButtonClick);
};

export const showUploadErrorMessage = () => {
  const uploadErrorMessageElement = uploadErrorMessage.cloneNode(true);
  bodyElement.append(uploadErrorMessageElement);
  document.addEventListener('click', onPageMessageClick);
  document.addEventListener('keydown', onEscMessageDown);
  errorMessageCloseButton.addEventListener('click', onCloseButtonClick);
};

function removeMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('click', onPageMessageClick);
  document.removeEventListener('keydown', onEscMessageDown);
}

export function showErrorDownloadMessage() {
  const ERROR_MESSAGE_TIME = 8000;
  const errorDownloadMessage = document.querySelector('#download-error').content.querySelector('.download-error');
  bodyElement.append(errorDownloadMessage);

  setTimeout(() => {
    errorDownloadMessage.remove();
  }, ERROR_MESSAGE_TIME);
}
