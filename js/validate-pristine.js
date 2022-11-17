import {sendData} from './api.js';
import {showUploadSuccessMessage} from './messages.js';
import {showUploadErrorMessage} from './messages.js';

const userPictureForm = document.querySelector('.img-upload__form');


const pristine = new Pristine(userPictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text'
});

export const initValidatePristine = function (onSuccess) {
  userPictureForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      sendData(
        () => (onSuccess(),
        showUploadSuccessMessage()),
        () => showUploadErrorMessage(),
        new FormData(evt.target),
      );
    }
  });
};
