'use strict';

var nameForm = document.getElementById('nameForm');
var nameInput = document.getElementById('nameInput');
var intro = document.getElementById('intro');
var apt = document.getElementById('apt');
var startButton = document.getElementById('startButton');
var userName = '';

var colorArray = ['orange', 'blue', 'pink', 'purple'];
var animalArray = ['dog', 'honey badger', 'elephant', 'trash panda'];
var groceryArray = ['unicorn meat', 'dragon meat', 'bublegum meatballs', 'kangaroo jerky', 'jellyfish noodles', 'spam snacks', 'smoked rattlesnake'];
var hotArray = ['black coffee', 'americana', 'vanlla late', 'black tea'];
var coldArray = ['fruit smoothie', 'iced coffee', 'protien shake', 'iced tea'];
var vehicleArray = ['moped', 'trolly', 'bus', 'volkswagen beetle'];
var sidewalkArray = ['bicyclist', 'skateboarder', 'scooter', 'runner'];
var birdsArray = ['cockatoos', 'seaguls', 'penguins', 'owls'];

nameForm.addEventListener('submit', updateUserName);
startButton.addEventListener('click', renderSceneOne);

function updateUserName(e) {
  e.preventDefault();
  userName = nameInput.value;
  localStorage.setItem('userName', JSON.stringify(userName));
  e.target.reset();
  nameForm.style.display = 'none';
}

if (localStorage.getItem('userName')) {
  userName = JSON.parse(localStorage.getItem('userName'));
}

function renderSceneOne() {
  apt.style.display = 'none';
}

// returns a random value from an array regardless of length

function random(arrayName) {
  var i = Math.floor(Math.random() * arrayName.length);
  var outcome = arrayName[i];
  return outcome;
}

function writeEffect(canvasId, text) {

  var canvas = document.getElementById(canvasId);
  // get 2D context
  var ctx = canvas.getContext('2d'),
    // dash-length for off-range
    dashLen = 350,
    // we'll update this, initialize
    dashOffset = dashLen,
    // some arbitrary speed
    speed = 60,
    // the text we will draw
    txt = canvas.innerHTML = text,
    // start position for x and iterator
    x = 0, i = 0;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.font = '50px Comic Sans MS, cursive, TSCu_Comic, sans-serif';
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
    ctx.strokeText(txt[i], x, 90);
    // char done? no, the loop
    if (dashOffset > 0) requestAnimationFrame(loop);
    else {
      // ok, outline done, lets fill its interior before next
      //ctx.fillText(txt[i], x, 90);
      // reset line-dash length
      dashOffset = dashLen;
      // get x position to next char by measuring what we have drawn
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth;
      // if we still have chars left, loop animation again for this char
      if (i < txt.length) requestAnimationFrame(loop);
    }
  })(); // just to self-invoke the loop
}

writeEffect('canvas1', 'The random animal is friendly!');

setTimeout (function() {
  writeEffect('canvas2', 'You have a great time playing with the random');
}, 3500);

setTimeout(function() {
  writeEffect('canvas3', 'animal and then continue with your lovely day!');
},8200);