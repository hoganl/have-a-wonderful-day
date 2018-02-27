'use strict';

var nameForm = document.getElementById('nameForm');
var nameInput = document.getElementById('nameInput');
var intro = document.getElementById('intro');
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

// returns a random value from an array regardless of length

function random(arrayName) {
  var i = Math.floor(Math.random() * arrayName.length);
  var outcome = arrayName[i];
  return outcome;
}
