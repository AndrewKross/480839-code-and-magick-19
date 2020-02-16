'use strict';

(function () {

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var setup = document.querySelector('.setup');
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoatElement = setupPlayer.querySelector('.wizard-coat');
  var wizardEyesElement = setupPlayer.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');

  var colorize = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  wizardCoatElement.addEventListener('click', function () {
    var newColor = COAT_COLORS[window.util.getRandom(COAT_COLORS)];
    wizardCoatElement.style.fill = newColor;
    setupPlayer.querySelector('input[name="coat-color"]').value = wizardCoatElement.style.fill;
    colorize.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    var newColor = EYES_COLORS[window.util.getRandom(EYES_COLORS)];
    wizardEyesElement.style.fill = newColor;
    setupPlayer.querySelector('input[name="eyes-color"]').value = wizardEyesElement.style.fill;
    colorize.onEyesChange(newColor);
  });

  setupFireball.addEventListener('click', function () {
    var randomRgbFireballColor = FIREBALL_COLORS[window.util.getRandom(FIREBALL_COLORS)];
    setupFireball.style.background = randomRgbFireballColor;
    setupFireball.querySelector('input').value = randomRgbFireballColor;
  });

  window.colorize = colorize;

})();
