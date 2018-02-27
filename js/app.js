'use strict';


var happinessValue = 0;
//used for intermediate random generator
var goodBadArray = ['Good', 'Bad'];
//scene 1 arrays
var colorArray = ['orange', 'blue', 'pink', 'purple'];
var animalArray = ['dog', 'honey badger', 'elephant', 'trash panda'];
var petOutcomeGood = ['The ' + this.animal + ' is friendly!  You have a great time playing with the + (random animal) + and then continue with your lovely day!', 'The ' + this.animal + ' really enjoys the attention and decides to follow you home!  Good luck with that!'];
var petOutcomeBad = ['Watch out!  The' + this.animal + ' bites your hand.  You are gonna need a big bandaid!', 'Great, now you are going to smell like ' + this.animal + ' all day!'];
var jogOutcomeGood = ['The ' + this.animal + ' looks sad but waves goodbye as you pass.  You literally have a heart of stone.', 'The ' + this.animal + 'scratches its back on a tree and only wishes it could be as cool as you.'];
var jogOutcomeBad =  ['The ' + this.animal + ' starts to chase you.  You better speed up slow poke!', 'The ' + this.animal + ' bites your foot as you run past.  That\'s gonna leave a mark!'];
//scene 2 arrays
var vehicleArray = ['moped', 'trolly', 'bus', 'volkswagen beetle'];
var sidewalkArray = ['bicyclist', 'skateboarder', 'scooter', 'runner'];
var crossOutcomeGood = ['The light turns quickly and you manage to cross the street with out getting smashed by a bus.  Cause for celebration. Woohoo!','A police officer comes out of nowhere and stops traffic so you can cross without incident.  Lucky break!'];
var crossOutcomeBad = ['Where did all these cars come from?  It literally takes 10 years to cross the street.  There goes your morning!','You step into the street and a bicyclist nearly runs you over. Watch out, bicycle rights dude!  10 feet rule!'];
var jwalkOutcomeGood = ['You step into the street and the traffic parts.  You cross without incident.  Lucky break!','A kind Subaru Outback driver stops traffic so you can cross safely. Living that PNW life!'];
var jwalkOutcomeBad = ['You step into the street and nearly lose your foot to a metro bus.  Watch out!','As you begin crossing someone tosses their half eaten breakfast sandwich at you as they speed by. Jaywalking, not only dangerous but potentially messy!'];
//scene 3 arrays
var hotArray = ['black coffee', 'americana', 'vanlla late', 'black tea'];
var coldArray = ['fruit smoothie', 'iced coffee', 'protien shake', 'iced tea'];
var coldOutcomeGood = ['You enjoy the best cold beverage you’ve ever had.  You are having an excellent time!','Your frosty beverage is outstanding.  What a wonderful morning!'];
var coldOutcomeBad = ['You are so thirsty after your jog that you drink too quickly and get brain freeze!  Ouch!','You spill your drink on the floor and slip causing pandemonium in the cafe while angering an entire line of coffee deprived customers.'];
var hotOutcomeGood = ['Wow, now that’s damn fine coffee!','Now that’s delicious coffee.  Black as a moonless night!'];
var hotOutcomeBad = ['You spill your piping hot drink on your foot. Oof, that’s gonna hurt!','Tick-tock, tick-tock, this is taking all day.  So much for a hot beverage.  You receive a luke-warm coffee.  You are not exactly having the best time.'];
//scene 4 arrays
var groceryArray = ['unicorn meat', 'dragon meat', 'bublegum meatballs', 'kangaroo jerky', 'jellyfish noodles', 'spam snacks', 'smoked rattlesnake'];
var birdsArray = ['cockatoos', 'seaguls', 'penguins', 'owls'];
var walkOutcomeGood = ['You enjoy the best walk of your life. It’s a beautiful day!','It’s a beautiful day and you enjoy the walk of a lifetime. Lucky you!'];
var walkOutcomeBad = ['Watch out! An errant flock of ' + this.bird + ' attacks you and steals your loaf of bread.','Look out!  A flock of ' + this.bird + 's circles overhead. They want to steal your bread. You better get home quickly!'];
var busOutcomeGood = ['You meet the most amazing people on your bus ride home. What a wonderful day you are having. Just peachy!','You download the latest version of the BusMall app. It is a truly life changing experience!'];
var busOutcomeBad = ['You got on the wrong bus and take a three hour bus ride. Not having the best time are we?','The bus is packed so you have to ride standing up while balancing your groceries on your head!'];

//final array data will be pushed() into
var outcomeArray = [];

var scene1 = {
  name: 'park',
  //subject to change
  filepath: 'park.jpg',
  color: random(colorArray),
  animal: random(animalArray),
  //this is the story text
  text: 'You are in a park and you see a ' + this.color + ' ' + this.animal + '... etc',
  option1Text: 'Pet the ' + this.animal + '.',
  option2Text: 'Keep jogging.',
  //might need to move this to event handler to change happinessValue
  outcome1Text: random('petOutcome' + random(goodBadArray)),
  outcome2Text: random('jogOutcome' + random(goodBadArray)),
};
//button event listener
var option1Button = document.getElementById('option1');

// event handler & local storage for user name

var nameForm = document.getElementById('nameForm');
var nameInput = document.getElementById('nameInput');
var intro = document.getElementById('intro');
var apt = document.getElementById('apt');
var startButton = document.getElementById('startButton');
var userName = '';

nameForm.addEventListener('submit', updateUserName);


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