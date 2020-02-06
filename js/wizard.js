'use strict';

(function () {

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


  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list'); // список похожих персонажей в разметке
  var similarWizardTemplate = document.querySelector('#similar-wizard-template') // шаблон отображения одного волшебника
    .content
    .querySelector('.setup-similar-item');


  window.wizard = {
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS
  };

  var createWizards = function (names, surenames, coatColors, eyesColors) { // функция для создания волшебников
    var wizards = []; // создаем массив волшебников
    for (var i = 0; i < 4; i++) { // рандомим волшебника и пушим в основной массив волшебников
      var wizard = {};

      wizard.name = names[window.util.getRandom(names)] + ' ' + surenames[window.util.getRandom(surenames)];
      wizard.coatColor = coatColors[window.util.getRandom(coatColors)];
      wizard.eyesColor = eyesColors[window.util.getRandom(eyesColors)];
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
})();
