'use strict';

// random fuction that returns a random value from an array regardless of length

function random(arrayName) {
  var i = Math.floor(Math.random() * arrayName.length);
  //console.log(i);
  var outcome = arrayName[i];
  return outcome;
}
