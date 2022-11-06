const userPictureForm = document.querySelector('.img-upload__form');

export const initValidatePristine = function () {

  const pristine = new Pristine(userPictureForm, {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'img-upload__error-text'
  });

  userPictureForm.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    if(!isValid) {
      evt.preventDefault(evt);
    }
  });
};
