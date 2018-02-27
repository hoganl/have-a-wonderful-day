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
var waitOutcomeGood = ['The light turns quickly and you manage to cross the street with out getting smashed by a bus.  Cause for celebration.  Woohoo!','A police officer comes out of nowhere and stops traffic so you can cross without incident.  Lucky break!'];
var waitOutcomeBad = ['',''];
var jwalkOutcomeGood = ['',''];
var jwalkOutcomeBad = ['',''];
//scene 3 arrays
var hotArray = ['black coffee', 'americana', 'vanlla late', 'black tea'];
var coldArray = ['fruit smoothie', 'iced coffee', 'protien shake', 'iced tea'];
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
