'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];

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
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var similarListElement = setup.querySelector('.setup-similar-list'); // список похожих персонажей в разметке
var similarWizardTemplate = document.querySelector('#similar-wizard-template') // шаблон отображения одного волшебника
    .content
    .querySelector('.setup-similar-item');
var setupPlayer = document.querySelector('.setup-player');
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var setupFireball = setup.querySelector('.setup-fireball-wrap');

var getRandom = function (array) { // функция для рандомного выбора параметров
  return Math.floor(Math.random() * array.length);
};

var createWizards = function (names, surenames, coatColors, eyesColors) { // функция для создания волшебников
  var wizards = []; // создаем массив волшебников
  for (var i = 0; i < 4; i++) { // рандомим волшебника и пушим в основной массив волшебников
    var wizard = {};

    wizard.name = names[getRandom(names)] + ' ' + surenames[getRandom(surenames)];
    wizard.coatColor = coatColors[getRandom(coatColors)];
    wizard.eyesColor = eyesColors[getRandom(eyesColors)];
    wizards.push(wizard);
  }
  return wizards;
};

var wizards = createWizards(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS); // вызываем функцию и создаем массив с обьектами волшебников

var renderWizard = function (wizard) { // функция для отрисовки волшебника
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) { // отрисовываем волшебников
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if ((evt.key === ESC_KEY) && (!evt.target.matches('.setup-user-name'))) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[getRandom(COAT_COLORS)];
  setupPlayer.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLORS[getRandom(EYES_COLORS)];
  setupPlayer.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
});

setupFireball.addEventListener('click', function () {
  var randomRgbFireballColor = FIREBALL_COLORS[getRandom(FIREBALL_COLORS)];
  setupFireball.style.background = randomRgbFireballColor;
  setupFireball.querySelector('input').value = randomRgbFireballColor;
});


