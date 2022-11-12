import {isEscapeKey, isEnterKey} from './utils.js';
import {resizePicture} from './resize-picture.js';
import {removeFilter} from './picture-filters.js';

const uploadPicture = document.querySelector('#upload-file');
const pictureComment = document.querySelector('.text__description');
const redactorPicture = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imageFormCloseButton = document.querySelector('.img-upload__cancel');

export const initOpenCloseForm = function () {
  const onPictureFormEscDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closePictureForm();
    }
  };

  uploadPicture.addEventListener('change', openPictureForm);

  imageFormCloseButton.addEventListener('click', closePictureForm);

  imageFormCloseButton.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      closePictureForm();
    }
  });

  function openPictureForm () {
    redactorPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    resizePicture();
    document.addEventListener('keydown', onPictureFormEscDown);
  }

  function closePictureForm () {
    redactorPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadPicture.value = '';
    pictureComment.value = '';
    removeFilter();
    document.removeEventListener('keydown', onPictureFormEscDown);
  }
};
