import {showUploadErrorMessage} from './messages.js';
import {blockError} from './utils.js';

export function getData(createThumbnails) {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((pictures) => {
      createThumbnails(pictures);
    })
    .catch(() => {
      blockError('Тут должны быть красивые фотографии, но они почему-то не загрузились. Что? Кто криворукий?! Да вы бы сами хоть раз пробовали написать этот fetch!!!');
    });
}

export function sendData (onSuccess, onFail, body) {
  fetch('https://27.javascript.pages.academ/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      else {
        onFail();
      }
    })
    .catch(() => showUploadErrorMessage()
    );
}
