import {getRandomNumber} from './utils.js';

const PICTURES_NUMBER = 25;
const LikesNumber = {
  MIN: 15,
  MAX: 200,
};

const CommentsNumber = {
  MIN: 0,
  MAX: 200,
};

const createPicture = (index) => ({
  id: index,
  url: `photos/${ index }.jpg`,
  description: 'Эта фотография сделана одним из наших авторов',
  likes: getRandomNumber(LikesNumber.MIN, LikesNumber.MAX),
  comments: getRandomNumber(CommentsNumber.MIN, CommentsNumber.MAX),
});

export function createPictures() {
  const userPictures = Array.from({length: PICTURES_NUMBER}, (_, pictureIndex) => createPicture(pictureIndex + 1));
  return userPictures;
}
