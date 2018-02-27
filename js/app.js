'use strict';

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
