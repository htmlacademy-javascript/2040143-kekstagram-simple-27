import {isEscapeKey, isEnterKey} from './utils.js';
import {resizePicture} from './resize-picture.js';
import {removeFilter} from './picture-filters.js';

const uploadPicture = document.querySelector('#upload-file');
const pictureComment = document.querySelector('.text__description');
const editorPicture = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const imageFormCloseButton = document.querySelector('.img-upload__cancel');
const defaultInput = document.querySelector('#effect-none');

export const closeForm = () => {
  editorPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadPicture.value = '';
  pictureComment.value = '';
  removeFilter();
};

export const initOpenCloseForm = () => {
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
    editorPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    resizePicture();
    document.addEventListener('keydown', onPictureFormEscDown);
    defaultInput.checked = true;
  }

  function closePictureForm () {
    closeForm ();
    document.removeEventListener('keydown', onPictureFormEscDown);
  }
};


