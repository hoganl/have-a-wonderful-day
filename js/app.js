'use strict';

var scene1 = {
  name = 'park',
  text = '',
  option1Text = '',
  option2Text = '',
  button1Outcomes = ['good1', 'good2', 'bad1', 'bad2'],
  button2Outcomes = ['good1', 'good2', 'bad1', 'bad2'],
  happinessValue = 0,
}

// returns a random value from an array regardless of length

function random(arrayName) {
  var i = Math.floor(Math.random() * arrayName.length);
  var outcome = arrayName[i];
  return outcome;
}
