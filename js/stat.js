'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var CLOUD_MARGIN_X = 55;
var CLOUD_MARGIN_Y = 20;

var CONTENT_X = CLOUD_X + CLOUD_MARGIN_X;

var TEXT_LINE_HEIGHT = 20;

var BAR_WIDTH = 40;
var BARS_HEIGHT = 150;
var BAR_GAP = 50;
var BARS_Y = 75;
var NAMES_Y = 250;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'rgba(0, 0, 128, 1)';
  ctx.fillText('Ура вы победили!', CONTENT_X, CLOUD_MARGIN_Y);
  ctx.fillText('Список результатов:', CONTENT_X, CLOUD_MARGIN_Y + TEXT_LINE_HEIGHT);

  var names = ['Вы', 'Коля', 'Вова', 'Лёша'];
  var times = [1200, 1700, 1300, 2400];

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  }

  var maxTime = getMaxElement(times);

  console.log(maxTime);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgba(0, 0, 128, 1)'
    ctx.fillText(names[i], CONTENT_X + (BAR_WIDTH + BAR_GAP) * i, NAMES_Y);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(CONTENT_X + (BAR_WIDTH + BAR_GAP) * i, BARS_Y + (150 - BARS_HEIGHT * times[i] / maxTime), BAR_WIDTH, BARS_HEIGHT * times[i] / maxTime);
  }

}
