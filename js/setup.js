'use strict';

// массивы с вводными данными
var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorsOfCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorsOfEyes = ['black', 'red', 'blue', 'yellow', 'green'];

// поиск окно настроек пользователя
var userDialogue = document.querySelector('.setup');
userDialogue.classList.remove('hidden');

// поиск блока для похожих персонажей
document.querySelector('.setup-similar').classList.remove('hidden');

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
var newWizards = [];
var createWizardsArray = function () {
  for (var i = 0; i < 4; i++) {
    var newWizard = {};
    newWizard.name = getRandomValue(firstNames) + ' ' + getRandomValue(lastNames);
    newWizard.coatColor = getRandomValue(colorsOfCoats);
    newWizard.eyesColor = getRandomValue(colorsOfEyes);
    newWizards.push(newWizard);
  }
  return newWizards;
};

createWizardsArray(firstNames, lastNames, colorsOfCoats, colorsOfEyes);

/* тест:
console.log(newWizards);
console.log(newWizards[0]);
console.log(newWizards[1]);
console.log(newWizards[2]);
console.log(newWizards[3]);
*/

// отрисовка шаблона
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = newWizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = newWizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = newWizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
