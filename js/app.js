'use strict';

var happinessValue = 0;
//used for intermediate random generator
var goodBadArray = ['Good', 'Bad'];
//scene 1 arrays
var colorArray = ['orange', 'blue', 'pink', 'purple'];
var animalArray = ['dog', 'honey badger', 'elephant', 'trash panda'];
var petOutcomeGood = ['The ' + animal + ' is friendly!  You have a great time playing with the + (random animal) + and then continue with your lovely day!', 'The ' + animal + ' really enjoys the attention and decides to follow you home!  Good luck with that!'];
var petOutcomeBad = ['Watch out!  The' + animal + ' bites your hand.  You are gonna need a big bandaid!', 'Great, now you are going to smell like ' + animal + ' all day!'];
var jogOutcomeGood = ['The ' + animal + ' looks sad but waves goodbye as you pass.  You literally have a heart of stone.', 'The ' + animal + 'scratches its back on a tree and only wishes it could be as cool as you.'];
var jogOutcomeBad =  ['The ' + animal + ' starts to chase you.  You better speed up slow poke!', 'The ' + animal + ' bites your foot as you run past.  That\'s gonna leave a mark!'];
//scene 2 arrays
var vehicleArray = ['moped', 'trolly', 'bus', 'volkswagen beetle'];
var sidewalkArray = ['bicyclist', 'skateboarder', 'scooter', 'runner'];
var waitkOutcomeGood = ['',''];
var waitOutcomeBad = ['',''];
var jwalkOutcomeGood = ['The light turns quickly and you manage to cross the street with out getting smashed by a bus.  Cause for celebration.  Woohoo!','A police officer comes out of nowhere and stops traffic so you can cross without incident.  Lucky break!'];
var jwalkOutcomeBad = ['Where did all these cars come from?  It literally takes 10 years to cross the street.  There goes your morning!','You step into the street and a bicyclist nearly runs you over.  Watch out, bicycle rights dude!  10 feet rule!'];
//scene 3 arrays
var hotArray = ['black coffee', 'americana', 'vanlla late', 'black tea'];
var coldArray = ['fruit smoothie', 'iced coffee', 'protien shake', 'iced tea'];
var coldOutcomeGood = ['You enjoy the best cold beverage you’ve ever had.  You are having an excellent time!','Your frosty beverage is outstanding.  What a wonderful morning!'];
var coldOutcomeBad = ['You are so thirsty after your jog that you drink too quickly and get brain freeze!  Ouch!','You spill your drink on the floor and slip causing pandemonium in the cafe while angering an entire line of coffee deprived customers.'];
var hotOutcomeGood = ['Wow, now that\’s damn fine coffee!','Now that\’s delicious coffee.  Black as a moonless night!'];
var hotOutcomeBad = ['You spill your piping hot drink on your foot. Oof, that\’s gonna hurt!','Tick-tock, tick-tock, this is taking all day.  So much for a hot beverage.  You receive a luke-warm coffee.  You are not exactly having the best time.'];
//scene 4 arrays
var groceryArray = ['unicorn meat', 'dragon meat', 'bublegum meatballs', 'kangaroo jerky', 'jellyfish noodles', 'spam snacks', 'smoked rattlesnake'];
var birdsArray = ['cockatoos', 'seaguls', 'penguins', 'owls'];

var outcomeArray = [];

var scene1 = {
  name: 'park',
  //subject to change
  filepath: 'park.jpg',
  //this is the story text
  var color = random(colorArray),
  var animal = random(animalArray),
  text: 'You are in a park and you see a ' + color + ' ' + animal + '... etc',
  option1Text: 'Pet the ' + animal + '.',
  option2Text: 'Keep jogging.',
  //might need to move this to event handler to change happinessValue
  outcome1Text = random('petOutcome' + random(goodBadArray)),
  outcome2Text = random('jogOutcome' + random(goodBadArray)),
}
//button event listener
var option1Button = document.getElementById('option1');



// event handler & local storage for user name

var nameForm = document.getElementById('nameForm');
var nameInput = document.getElementById('nameInput');
var userName = '';

nameForm.addEventListener('submit', updateUserName);

function updateUserName(e) {
  e.preventDefault();
  userName = nameInput.value;
  localStorage.setItem('userName', JSON.stringify(userName));
  e.target.reset();
}

if (localStorage.getItem('userName')) {
  userName = JSON.parse(localStorage.getItem('userName'));
}

// returns a random value from an array regardless of length

function random(arrayName) {
  var i = Math.floor(Math.random() * arrayName.length);
  var outcome = arrayName[i];
  return outcome;
}
