'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');

  var onSuccess = function () {
    setup.classList.add('hidden');
  };

  var onSubmitAction = function (evt) {
    window.backend.save(new FormData(form), onSuccess, window.util.onError);
    evt.preventDefault();
  };

  form.addEventListener('submit', onSubmitAction);

})();
