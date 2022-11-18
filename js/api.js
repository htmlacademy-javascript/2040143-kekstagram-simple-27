import {showUploadErrorMessage, showErrorDownloadMessage} from './messages.js';
const BASE_URL = 'https://27.javascript.pages.academy/kekstagram-simple/';

export function getData(onSuccess) {
  fetch(`${BASE_URL}data`)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showErrorDownloadMessage('Тут должны быть красивые фотографии, но они почему-то не загрузились. Что? Кто криворукий?! Да вы бы сами хоть раз пробовали написать этот fetch!!!');
    });
}

export function sendData (body, onSuccess, onFail) {
  fetch(`${BASE_URL}`,
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
