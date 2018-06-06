'use strict';

// массивы с вводными данными
var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorsOfCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorsOfEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var totalNewWizards = 4;

// поиск окна настроек пользователя
var userDialogue = document.querySelector('.setup');
userDialogue.classList.remove('hidden');

// поиск блока для вставления персонажей
var similarListElement = document.querySelector('.setup-similar-list');

// поиск шаблона
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// функция для поиска случайного значения в массиве
var getRandomValue = function (arr) {
  var randomValue = arr[Math.floor(Math.random() * arr.length)];
  return randomValue;
};

// функция для создания массива с объектами со случайными значениями
var createWizardsArray = function () {
  var newWizards = [];
  for (var i = 0; i < totalNewWizards; i++) {
    var newWizard = {};
    newWizard.name = getRandomValue(firstNames) + ' ' + getRandomValue(lastNames);
    newWizard.coatColor = getRandomValue(colorsOfCoats);
    newWizard.eyesColor = getRandomValue(colorsOfEyes);
    newWizards.push(newWizard);
  }
  return newWizards;
};

var newWizards = createWizardsArray();

// функция для отрисовки шаблона
var renderNewWizard = function (newWizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = newWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = newWizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = newWizard.eyesColor;

  return wizardElement;
};

// заполнение шаблонов
var fragment = document.createDocumentFragment();
for (var i = 0; i < newWizards.length; i++) {
  fragment.appendChild(renderNewWizard(newWizards[i]));
}
similarListElement.appendChild(fragment);

userDialogue.querySelector('.setup-similar').classList.remove('hidden');
