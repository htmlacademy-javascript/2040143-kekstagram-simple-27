const picturePreview = document.querySelector('.img-upload__preview');
const uploadForm = document.querySelector('.img-upload__form');

const FILTERS = [
  {
    name: 'none',
    style: 'none',
    min: 1,
    max: 100,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
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
