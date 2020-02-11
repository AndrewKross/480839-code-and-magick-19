'use strict';

(function () {

  var setup = document.querySelector('.setup');

  var onSuccess = function () {
    setup.classList.add('hidden');
  };

  var onSubmitAction = function (evt) {
    window.backend.save(new FormData(form), onSuccess, window.wizard.onError);
    evt.preventDefault();
  };

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', onSubmitAction);

})();
