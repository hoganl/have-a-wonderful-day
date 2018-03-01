'use strict';

if (localStorage && localStorage.getItem('userName')) {
  var userName = localStorage.getItem('userName');
}

if (localStorage && localStorage.getItem('happinessValue')) {
  var happinessValue = JSON.parse(localStorage.getItem('happinessValue'));
}

if (localStorage && localStorage.getItem('color')) {
  var color = localStorage.getItem('color');
}

if (localStorage && localStorage.getItem('animal')) {
  var animal = localStorage.getItem('animal');
}

if (localStorage && localStorage.getItem('sidewalk')) {
  var sidewalk = localStorage.getItem('sidewalk');
}

if (localStorage && localStorage.getItem('vehicle')) {
  var vehicle = localStorage.getItem('vehicle');
}

if (localStorage && localStorage.getItem('cold')) {
  var cold = localStorage.getItem('cold');
}

if (localStorage && localStorage.getItem('hot')) {
  var hot = localStorage.getItem('hot');
}

if (localStorage && localStorage.getItem('groceries')) {
  var groceries = localStorage.getItem('groceries');
}

if (localStorage && localStorage.getItem('bird')) {
  var bird = localStorage.getItem('bird');
}

if (localStorage && localStorage.getItem('outcomeArray')) {
  var outcomeArray = JSON.parse(localStorage.getItem('outcomeArray'));
}

var greeting = '';
function getGreeting() {
  if (happinessValue >= 2) {
    greeting = 'great';
  } else if (happinessValue <= -2) {
    greeting = 'terrible';
  } else {
    greeting = 'meh kind of';
  }
}

getGreeting();

var summaryText = document.getElementById('summary');

var summary = 'Phew, ' + userName + ' it is only 10am, and it appears you have had a ' + greeting + ' day. Let\'s look back at your morning so far. You started your day going for a jog through the park. ' + outcomeArray[0] + ' Such an adventure already. Next, you decided to head to the cafe, but you ran into some crazy traffic trying to cross a busy intersection. You mulled over whether you wanted to wait for the light to change or it you should just make a run for it. ' + outcomeArray[1] + ' Wow, glad you made it through that alive. You finally made it into the cafe where you had a tough decision on what to drink. ' + outcomeArray[2] + '. You made it through that ordeal and needed to grab a few groceries before heading home. With your groceries in hand, you had one last decision to make, walk or take the bus' + outcomeArray[3] + ' Wow, what a day. Now you only have one last choice to make....start your day over and try your luck, or join your friends for lunch?';

function renderSummary () {
  summaryText.textContent = summary;
}

renderSummary();