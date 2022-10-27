export const createThumbnails = function (pictures) {
  const thumbnailsTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const thumbnailsList = document.querySelector('.pictures');
  const userPicturesFragment = document.createDocumentFragment();

  pictures.forEach ((picture) => {
    const thumbnailElement = thumbnailsTemplate.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').src = picture.url;
    thumbnailElement.querySelector('.picture__likes').textContent = picture.likes;
    thumbnailElement.querySelector('.picture__comments').textContent = picture.comments;
    userPicturesFragment.appendChild(thumbnailElement);
  });
  thumbnailsList.appendChild(userPicturesFragment);
};
