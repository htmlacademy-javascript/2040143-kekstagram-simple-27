import {createPictures} from './create-pictures.js';

const thumbnailsTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsList = document.querySelector('.pictures');

const userPictures = createPictures();

const userPicturesFragment = document.createDocumentFragment();

export const addUserPictures = function () {

  userPictures.forEach ((picture) => {
    const thumbnailElement = thumbnailsTemplate.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').src = picture.url;
    thumbnailElement.querySelector('.picture__likes').textContent = picture.likes;
    thumbnailElement.querySelector('.picture__comments').textContent = picture.comments;
    userPicturesFragment.appendChild(thumbnailElement);
  });
  thumbnailsList.appendChild(userPicturesFragment);
};
