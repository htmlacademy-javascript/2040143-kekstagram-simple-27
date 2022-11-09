export const initPictureFilters = function() {

  const picturePreview = document.querySelector('.img-upload__preview');
  const uploadForm = document.querySelector('.img-upload__form');

  const FILTERS = [
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
      name: 'fobos',
      style: blur,
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
    {
      name: 'original',
      style: 'none',
      min: 1,
      max: 100,
    }
  ];

  const FILTER_DEFAULT = FILTERS[FILTERS.length - 1];
  let currentFilter = FILTER_DEFAULT;

  const onUploadFormChange = (evt) => {
    if(!evt.target.classList.contains('.effects__radio')) {
      return;
    }
    currentFilter = FILTERS.find((effect) => effect.name === evt.target.value);
  };

  picturePreview.style.filter = `${currentFilter.style}`;

  uploadForm.addEventListener('change', onUploadFormChange);
};
