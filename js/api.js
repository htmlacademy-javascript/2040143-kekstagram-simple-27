import {showUploadErrorMessage, showErrorDownloadMessage} from './messages.js';
const BASE_URL = 'https://27.javascript.pages.academy/kekstagram-simple/';

export const getData = (onSuccess) => {
  fetch(`${BASE_URL}data`)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showErrorDownloadMessage();
    });
};

export const sendData = (body, onSuccess, onFail) => {
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
};
