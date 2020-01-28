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

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var userDialog = document.querySelector('.setup'); // ищем и удаляем скрывающий класс
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list'); // список похожих персонажей в разметке

var similarWizardTemplate = document.querySelector('#similar-wizard-template') // шаблон отображения одного волшебника
    .content
    .querySelector('.setup-similar-item');

var createWizards = function (names, surenames, coatColors, eyesColors) { // функция для создания волшебников
  var wizards = []; // создаем массив волшебников
  for (var i = 0; i < 4; i++) { // рандомим волшебника и пушим в основной массив волшебников
    var wizard = {};
    var getRandom = function (array) { // функция для рандомного выбора параметров
      return Math.floor(Math.random() * array.length);
    };

    wizard.name = names[getRandom(names)] + ' ' + surenames[getRandom(surenames)];
    wizard.coatColor = coatColors[getRandom(coatColors)];
    wizard.eyesColor = eyesColors[getRandom(eyesColors)];
    wizards.push(wizard);
  }
  return wizards;
};

var wizards = createWizards(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR); // вызываем функцию и создаем массив с обьектами волшебников

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

userDialog.querySelector('.setup-similar').classList.remove('hidden');
