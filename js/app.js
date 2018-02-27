'use strict';

// returns a random value from an array regardless of length

function random(arrayName) {
  var i = Math.floor(Math.random() * arrayName.length);
  var outcome = arrayName[i];
  return outcome;
}
