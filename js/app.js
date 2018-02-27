'use strict';

var nameForm = document.getElementById('nameForm');
var nameInput = document.getElementById('nameInput');
var userName = '';

nameForm.addEventListener('submit', updateUserName);

function updateUserName(e) {
  e.preventDefault();
  userName = nameInput.value;
  e.target.reset();
}