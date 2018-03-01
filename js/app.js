'use strict';

var nameForm = document.getElementById('nameForm');
var nameInput = document.getElementById('nameInput');
var intro = document.getElementById('intro');
var apt = document.getElementById('apt');
var startButton = document.getElementById('startButton');
var scenes = document.getElementById('scenes');
var pNarrative = document.getElementById('narrative');
var userName = '';
//final array data will be pushed() into
Scene.scenesArray = [];
var currentScene = 0;
var outcomeArray = [];
var happinessValue = 0;
//used for intermediate random generator
var goodBadArray = ['good', 'bad'];

//scene 1 arrays
var colorArray = ['orange', 'blue', 'pink', 'purple'];
var animalArray = ['dog', 'honey badger', 'elephant', 'bear'];
//scene 2 arrays
var sidewalkArray = ['bicyclist', 'skateboarder', 'scooter', 'runner'];
var vehicleArray = ['moped', 'trolly', 'bus', 'volkswagen beetle'];
//scene 3 arrays
var hotArray = ['black coffee', 'americana', 'vanlla late', 'black tea'];
var coldArray = ['fruit smoothie', 'iced coffee', 'protien shake', 'iced tea'];
//scene 4 arrays
var groceryArray = ['unicorn meat', 'dragon meat', 'bublegum meatballs', 'kangaroo jerky', 'jellyfish noodles', 'spam snacks', 'smoked rattlesnake'];
var birdsArray = ['cockatoos', 'seaguls', 'penguins', 'owls'];

var color = random(colorArray);
var animal = random(animalArray);
var sidewalk = random(sidewalkArray);
var vehicle = random(vehicleArray);
var cold = random(coldArray);
var hot = random(hotArray);
var groceries = random(groceryArray);
var bird = random(birdsArray);

function Scene (name, filepath, narrative, option1Text, option2Text, outcome1Good, outcome1Bad, outcome2Good, outcome2Bad) {
  this.name = name;
  this.filepath = filepath;
  this.narrative = narrative;
  this.option1Text = option1Text;
  this.option2Text = option2Text;
  this.outcome1Good = outcome1Good;
  this.outcome1Bad = outcome1Bad;
  this.outcome2Good = outcome2Good;
  this.outcome2Bad = outcome2Bad;
  Scene.scenesArray.push(this);
}

new Scene(
  'park',
  'img/park.jpg',
  'You are feeling a little hungover from last night\'s adventures, so let\'s go for a jog. You head into the park and you see a ' + color + ' ' + animal + ' . Would you like to pet it, or keep jogging?',
  'Pet the ' + animal,
  'Keep jogging',
  'The ' + animal + ' is friendly!  You have a great time playing with the ' + animal + ' and then continue with your lovely day!',
  'Watch out!  The' + animal + ' bites your hand.  You are gonna need a big bandaid!',
  'The ' + animal + ' looks sad but waves goodbye as you pass.  You literally have a heart of stone.',
  'The ' + animal + ' starts to chase you.  You better speed up slow poke!'
);

new Scene(
  'crosswalk',
  'img/cherry-street.jpg',
  'You finish your jog and decide to head toward a cafe. You are almost there, but you get stuck at a crfosswalk. The traffic doesn\'t seem to be letting up. Do you want to prolong yout suffering and wait, or take a chance and cross anyway?',
  'Wait in agony',
  'Make a run for it',
  'The light turns quickly and you manage to cross the street with out getting smashed by a bus.  Cause for celebration. Woohoo!',
  'You move closer to the street and a ' + sidewalk + ' nearly runs you over. Watch out, ' + sidewalk + ' right dude!  10 feet rule!',
  'A kind Subaru Outback driver stops traffic so you can cross safely. Living that PNW life!',
  'You step into the street and nearly lose your foot to a ' + vehicle + '.  Watch out!'
);

new Scene(
  'cafe',
  'img/cafe.jpg',
  'Wow, you finally make it accross the street and into the cafe. Between the long wait to cross the street and the insane line at the cafe, you have finally narrowed it down to two choices ' + cold + ' or ' + hot + '?',
  cold,
  hot,
  'You enjoy the best ' + cold + ' you’ve ever had.  You are having an excellent time!',
  'You spill your drink on the floor and slip causing pandemonium in the cafe while angering an entire line of coffee deprived customers.',
  'Wow, now that’s damn fine ' + hot + '!',
  'Tick-tock, tick-tock, this is taking all day.  So much for a hot ' + hot + '.  You receive a luke-warm ' + hot + '.  You are not exactly having the best time.'
);

new Scene(
  'market',
  'img/grocery-store.jpg',
  'Now that you have had your post jog workout, you need to head to the market to buy a few groceries for breakfast. You buy some bread, ' + groceries + groceries + groceries + '. You are exhausted from the day you have had so far, but it is also nice out. Do you want to walk home or take the bus?',
  'Walk',
  'Bus',
  'It’s a beautiful day and you enjoy the walk of a lifetime. Lucky you!',
  'Watch out! An errant flock of ' + bird + ' attacks you and steals your loaf of bread.',
  'You download the latest version of the BusMall app. It is a truly life changing experience!',
  'The bus is packed so you have to ride standing up while balancing your groceries on your head!'
);

var optionButtons = document.getElementById('optionButtons');
var option1Button = document.getElementById('option1');
var option2Button = document.getElementById('option2');
var nextSceneButton = document.getElementById('nextScene');

//button event listener


// nameForm.addEventListener('submit', updateUserName);
startButton.addEventListener('click', renderSceneP1);
optionButtons.addEventListener('click', renderSceneP2);
nextSceneButton.addEventListener('click', renderSceneP1);


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

function renderSceneP1() {
  if (currentScene >= Scene.scenesArray.length) {
    window.location = 'summary.html';
  }
  apt.style.display = 'none';
  scenes.style.display = 'block';
  optionButtons.style.display = 'block';
  nextSceneButton.style.display = 'none';
  scenes.style.backgroundImage = "url('" + Scene.scenesArray[currentScene].filepath + "')";
  pNarrative.textContent = Scene.scenesArray[currentScene].narrative;
  option1Button.textContent = Scene.scenesArray[currentScene].option1Text;
  option2Button.textContent = Scene.scenesArray[currentScene].option2Text;
}

function renderSceneP2(e) {
  optionButtons.style.display = 'none';
  nextSceneButton.style.display = 'block';
  var goodBad = random(goodBadArray);
  if ((e.target === option1Button) && (goodBad === 'good')) {
    pNarrative.textContent = Scene.scenesArray[currentScene].outcome1Good;
    happinessValue++;
  } else if ((e.target === option1Button) && (goodBad === 'bad')) {
    pNarrative.textContent = Scene.scenesArray[currentScene].outcome1Bad;
    happinessValue--;
  } else if ((e.target === option2Button) && (goodBad === 'good')) {
    pNarrative.textContent = Scene.scenesArray[currentScene].outcome2Good;
    happinessValue++;
  } else {
    pNarrative.textContent = Scene.scenesArray[currentScene].outcome2Bad;
    happinessValue--;
  }
  console.dir(e.target);
  currentScene++;
}



// returns a random value from an array regardless of length

function random(arrayName) {
  var i = Math.floor(Math.random() * arrayName.length);
  var outcome = arrayName[i];
  return outcome;
}

// function writeEffect(canvasId, text) {

//   var canvas = document.getElementById(canvasId);
//   // get 2D context
//   var ctx = canvas.getContext('2d'),
//     // dash-length for off-range
//     dashLen = 350,
//     // we'll update this, initialize
//     dashOffset = dashLen,
//     // some arbitrary speed
//     speed = 60,
//     // the text we will draw
//     txt = canvas.innerHTML = text,
//     // start position for x and iterator
//     x = 0, i = 0;
//   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//   ctx.font = '50px Comic Sans MS, cursive, TSCu_Comic, sans-serif';
//   // thickness of the line
//   ctx.lineWidth = 5;
//   // to avoid spikes we can join each line with a round joint
//   ctx.lineJoin = 'round';
//   ctx.strokeStyle = ctx.fillStyle = 'black';
//   (function loop() {
//     // clear canvas for each frame
//     ctx.clearRect(x, 0, 60, 150);
//     // calculate and set current line-dash for this char
//     ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);
//     // reduce length of off-dash
//     dashOffset -= speed;
//     // draw char to canvas with current dash-length
//     ctx.strokeText(txt[i], x, 90);
//     // char done? no, the loop
//     if (dashOffset > 0) requestAnimationFrame(loop);
//     else {
//       // ok, outline done, lets fill its interior before next
//       //ctx.fillText(txt[i], x, 90);
//       // reset line-dash length
//       dashOffset = dashLen;
//       // get x position to next char by measuring what we have drawn
//       x += ctx.measureText(txt[i++]).width + ctx.lineWidth;
//       // if we still have chars left, loop animation again for this char
//       if (i < txt.length) requestAnimationFrame(loop);
//     }
//   })(); // just to self-invoke the loop
// }

// writeEffect('canvas1', 'The random animal is friendly!');

// setTimeout (function() {
//   writeEffect('canvas2', 'You have a great time playing with the random');
// }, 3500);

// setTimeout(function() {
//   writeEffect('canvas3', 'animal and then continue with your lovely day!');
// },8200);