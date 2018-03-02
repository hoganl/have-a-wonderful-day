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
if (localStorage && localStorage.getItem('cold')) {
  var cold = localStorage.getItem('cold');
}
if (localStorage && localStorage.getItem('hot')) {
  var hot = localStorage.getItem('hot');
}
if (localStorage && localStorage.getItem('groceries')) {
  var groceries = localStorage.getItem('groceries');
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

var summaryText1 = document.getElementById('summary1');
var summaryText2 = document.getElementById('summary2');
var summaryText3 = document.getElementById('summary3');
var summaryText4 = document.getElementById('summary4');
var summaryText5 = document.getElementById('summary5');
var summaryText6 = document.getElementById('summary6');

var summary1 = 'Phew, ' + userName + ', it is only 11am, and it appears you have had a ' + greeting + ' day. Let\'s look back at your morning so far.';

var summary2 = 'You started your day going for a jog through the park and ran into a ' + color + ' ' + animal + '. ' + outcomeArray[0];

var summary3 = 'Next, you decided to head to the cafe, but you ran into some crazy traffic trying to cross a busy intersection. You mulled over whether you wanted to wait for the light to change or if you should just make a run for it. ' + outcomeArray[1];

var summary4 = 'You finally made it into the cafe where you had a tough decision on what to drink. Good thing there was a long line to give you time to decide. By the time you got to the front, you managed to narrow it down to two choices, ' + cold + ' or ' + hot + '.' + outcomeArray[2];

var summary5 = 'You made it through that ordeal and needed to grab a few groceries before heading home. You picked up some bread and ' + groceries + '. With your groceries in hand, you had one last decision to make, walk or take the bus. ' + outcomeArray[3];

var summary6 = 'Wow, what a day. Now you only have one last choice to make....start your day over and try your luck again, or join your friends for lunch?';

function renderSummary () {
  summaryText1.textContent = summary1;
  summaryText2.textContent = summary2;
  summaryText3.textContent = summary3;
  summaryText4.textContent = summary4;
  summaryText5.textContent = summary5;
  summaryText6.textContent = summary6;
}

renderSummary();