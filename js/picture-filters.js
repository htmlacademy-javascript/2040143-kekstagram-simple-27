const picturePreview = document.querySelector('.img-upload__preview');
const uploadForm = document.querySelector('.img-upload__form');

const FILTERS = [
  {
    name: 'none',
    style: 'none',
  },
  {
    name: 'chrome',
    style: 'grayscale',
  },
  {
    name: 'sepia',
    style: 'sepia',
  },
  {
    name: 'marvin',
    style: 'invert',
  },
  {
    name: 'phobos',
    style: 'blur',
  },
  {
    name: 'heat',
    style: 'brightness',
  },
];

const FILTER_DEFAULT = FILTERS[0];
let currentFilter = FILTER_DEFAULT;

export const removeFilter = function() {
  picturePreview.classList.remove(`effects__preview--${currentFilter.name}`);
};

export const initPictureFilters = function() {

  const onUploadFormChange = (evt) => {
    if(evt.target.classList.contains('effects__radio')) {
      removeFilter();
      currentFilter = FILTERS.find((effect) => effect.name === evt.target.value);
      picturePreview.classList.add(`effects__preview--${currentFilter.name}`);
    }
  };

  uploadForm.addEventListener('change', onUploadFormChange);
};


