import {createThumbnails} from './create-thumbnails.js';
import {createPictures} from './create-pictures.js';
import {initOpenCloseForm} from './open-close-form.js';
import {initValidatePristine} from './validate-pristine.js';
import {initResizePicture} from './resize-picture.js';
import {initPictureFilters} from './picture-filters.js';

const pictures = createPictures();

createThumbnails(pictures);
initValidatePristine();
initOpenCloseForm();
initResizePicture();
initPictureFilters();
