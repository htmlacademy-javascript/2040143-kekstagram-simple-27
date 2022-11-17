import {createThumbnails} from './create-thumbnails.js';
import {initOpenCloseForm} from './open-close-form.js';
import {initValidatePristine} from './validate-pristine.js';
import {initResizePicture} from './resize-picture.js';
import {initPictureFilters} from './picture-filters.js';
import { getData } from './api.js';

import {closeForm} from './open-close-form.js';

initOpenCloseForm();
initResizePicture();
initPictureFilters();
initValidatePristine(closeForm);

getData((pictures) => {
  createThumbnails(pictures);
});

