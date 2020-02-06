'use strict';

(function () {

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setup = document.querySelector('.setup');
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.wizard.COAT_COLORS[window.util.getRandom(window.wizard.COAT_COLORS)];
    setupPlayer.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.wizard.EYES_COLORS[window.util.getRandom(window.wizard.EYES_COLORS)];
    setupPlayer.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
  });

  setupFireball.addEventListener('click', function () {
    var randomRgbFireballColor = FIREBALL_COLORS[window.util.getRandom(FIREBALL_COLORS)];
    setupFireball.style.background = randomRgbFireballColor;
    setupFireball.querySelector('input').value = randomRgbFireballColor;
  });

})();
