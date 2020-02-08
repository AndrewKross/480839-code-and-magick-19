'use strict';

(function () {

  var WIZARDS_URL = 'https://js.dump.academy/code-and-magick/data';
  var UPLOAD_URL = 'https://js.dump.academy/code-and-magick';
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;
  window.backend = {};

  window.backend.load = function (onLoad, onError) { // функция получения данных
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    var onLoadComplete = function () {
      var error;
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;

        case 500:
          error = 'Внутренняя ошибка сервера';
          break;
        case 400:
          error = 'Неверный запрос';
          break;
        case 401:
          error = 'Пользователь не авторизован';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;

        default:
          error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
      }
      if (error) {
        onError(error);
      }
    };

    xhr.addEventListener('load', onLoadComplete);

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', WIZARDS_URL);
    xhr.send();
  };

  window.backend.save = function (data, onLoad, onError) { // функция отправки данных
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    var onLoadComplete = function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    };

    xhr.addEventListener('load', onLoadComplete);


    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('POST', UPLOAD_URL);
    xhr.send(data);
  };

})();
