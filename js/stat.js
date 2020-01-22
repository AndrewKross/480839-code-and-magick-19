'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_GAP_WIDTH = 50;
var BAR_WIDTH = 40;
var GIST_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); // рендер тени
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); // рендер облака

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'middle';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + GAP / 2 + FONT_GAP * 2);

  var maxTime = getMaxElement(times); // ищем максимальный элемент массива

  for (var i = 0; (i < players.length) && (i < times.length); i++) { // рисуем столбцы
    ctx.textAlign = 'left';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP_WIDTH + ((BAR_GAP_WIDTH + BAR_WIDTH) * i), CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + BAR_GAP_WIDTH + ((BAR_GAP_WIDTH + BAR_WIDTH) * i),
        ((CLOUD_Y + CLOUD_HEIGHT - GIST_HEIGHT - GAP * 2 - FONT_GAP) + GIST_HEIGHT - (GIST_HEIGHT * times[i]) / maxTime),
        BAR_WIDTH,
        (GIST_HEIGHT * times[i]) / maxTime);
    ctx.fillText(times[i], CLOUD_X + BAR_GAP_WIDTH + ((BAR_GAP_WIDTH + BAR_WIDTH) * i), (CLOUD_Y + CLOUD_HEIGHT - GIST_HEIGHT - GAP * 2 - FONT_GAP) + GIST_HEIGHT - (GIST_HEIGHT * times[i]) / maxTime - FONT_GAP);
  }
};
