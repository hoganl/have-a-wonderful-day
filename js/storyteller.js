'use strict';

var canvasText = document.getElementById('canvas-text');

function lineSplit(outcome, lineLength) {
  var chunksArray = [];
  var newChunk = outcome + ' ';
  while (newChunk) {
    var outSlice = newChunk.slice(0, lineLength);
    var checkLast = outSlice.lastIndexOf(' ');
    var firstChunk = outSlice.slice(0, checkLast);
    newChunk = newChunk.slice(checkLast + 1);
    chunksArray.push(firstChunk);
  }
  return chunksArray;
}

function createCanvas(lines) {
  var canvasNames = [];
  canvasText.innerHTML = '';
  for (var i = 0; i < lines.length; i++) {
    var canvasEl = document.createElement('canvas');
    canvasEl.id = 'scenario-line-' + i;
    canvasEl.width = 1200;
    canvasEl.height = 60;
    canvasText.appendChild(canvasEl);
    var idOfCanvas = 'scenario-line-' + i;
    canvasNames.push(idOfCanvas);
  }
  return canvasNames;
}

function writeEffect(canvasId, text, delay) {

  var canvas = document.getElementById(canvasId);
  // get 2D context
  var ctx = canvas.getContext('2d'),
    // dash-length for off-range
    dashLen = 550,
    // we'll update this, initialize
    dashOffset = dashLen,
    // some arbitrary speed
    speed = delay,
    // the text we will draw
    txt = canvas.innerHTML = text,
    // start position for x and iterator
    x = 20, i = 0;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = '40px Indie Flower, cursive';
  // thickness of the line
  ctx.lineWidth = 5;
  // to avoid spikes we can join each line with a round joint
  ctx.lineJoin = 'round';
  ctx.strokeStyle = ctx.fillStyle = 'black';
  (function loop() {
  // clear canvas for each frame
    ctx.clearRect(x, 0, 60, 150);
    // calculate and set current line-dash for this char
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);
    // reduce length of off-dash
    dashOffset -= speed;
    // draw char to canvas with current dash-length
    ctx.strokeText(txt[i], x, 40);
    // char done? no, the loop
    if (dashOffset > 0) requestAnimationFrame(loop);
    else {
    // ok, outline done, lets fill its interior before next
    //ctx.fillText(txt[i], x, 90);
    // reset line-dash length
      dashOffset = dashLen;
      // get x position to next char by measuring what we have drawn
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth - 3;
      // if we still have chars left, loop animation again for this char
      if (i < txt.length) requestAnimationFrame(loop);
    }
  })(); // just to self-invoke the loop
}

function doTheThing (textInput, delay){
  var narrative = textInput;

  var lines = lineSplit(narrative, 55);

  var calling = createCanvas(lines);


  var i = 0;
  writeEffect(calling[i], lines[i], delay);
  i++;
  var thing = setInterval(function () {
    writeEffect(calling[i], lines[i], delay);
    i++;
    if (i >= lines.length) {
      clearInterval(thing);
    }
  }, 1700); //this effect the interval timing of the canvas animation lines
}
