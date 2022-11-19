const MIN_SIZE = 25;
const MAX_SIZE = 100;
const STEP = 25;
const DEFAULT_SIZE = 100;
const inputSize = document.querySelector('.scale__control--value');
const buttonIncrease = document.querySelector('.scale__control--bigger');
const buttonDecrease = document.querySelector('.scale__control--smaller');
const picture = document.querySelector('.img-upload__preview');

export const resizePicture = (value = DEFAULT_SIZE) => {
  picture.style.transform = `scale(${value / 100})`;
  inputSize.value = `${value}%`;
};

export const initResizePicture = () => {
  const onButtonDecreaseClick = () => {
    const currentSize = parseInt(inputSize.value, 10);
    let newSize = currentSize - STEP;
    if (newSize < MIN_SIZE) {
      newSize = MIN_SIZE;
    }
    resizePicture(newSize);
  };

  const onButtonIncreaseClick = () => {
    const currentSize = parseInt(inputSize.value, 10);
    let newSize = currentSize + STEP;
    if (newSize > MAX_SIZE) {
      newSize = MAX_SIZE;
    }
    resizePicture(newSize);
  };

  buttonDecrease.addEventListener ('click', onButtonDecreaseClick);
  buttonIncrease.addEventListener ('click', onButtonIncreaseClick);
};

