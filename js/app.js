'use strict';

var nameForm = document.getElementById('nameForm');
var nameInput = document.getElementById('nameInput');
var intro = document.getElementById('intro');
var apt = document.getElementById('apt');
var startButton = document.getElementById('startButton');
var scenes = document.getElementById('scenes');
var optionButtons = document.getElementById('optionButtons');
var option1Button = document.getElementById('option1');
var option2Button = document.getElementById('option2');
var nextSceneButton = document.getElementById('nextScene');
var muteButton = document.getElementById('muteButton');
var isMuted = false;

var userName = '';

//final array data will be pushed() into
var outcomeArray = [];
Scene.scenesArray = [];
var currentScene = 0;
var happinessValue = 0;
//used for intermediate random generator
var goodBadArray = ['good', 'bad'];

//scene 1 arrays
var colorArray = ['orange', 'blue', 'pink', 'purple'];
var animalArray = ['dog', 'honey badger', 'elephant', 'bear'];
//scene 2 arrays
var sidewalkArray = ['bicyclist', 'skateboarder', 'scooter', 'runner'];
var vehicleArray = ['moped', 'trolly', 'bus', 'volkswagen beetle'];
//scene 3 arrays
var hotArray = ['black coffee', 'americana', 'vanilla late', 'black tea'];
var coldArray = ['fruit smoothie', 'iced coffee', 'protein shake', 'iced tea'];
//scene 4 arrays
var groceryArray = ['unicorn meat', 'dragon meat', 'bubblegum meatballs', 'kangaroo jerky', 'jellyfish noodles', 'spam snacks', 'smoked rattlesnake'];
var birdsArray = ['cockatoos', 'seagulls', 'penguins', 'owls'];

var color = random(colorArray);
var animal = random(animalArray);
var sidewalk = random(sidewalkArray);
var vehicle = random(vehicleArray);
var cold = random(coldArray);
var hot = random(hotArray);
var groceries = random(groceryArray);
var bird = random(birdsArray);

function Scene (name, filepath, audiofile, narrative, option1Text, option2Text, outcome1Good, outcome1Bad, outcome2Good, outcome2Bad) {
  this.name = name;
  this.filepath = filepath;
  this.audio = new Audio (audiofile);
  this.audio.volume = .3;
  this.narrative = narrative;
  this.option1Text = option1Text;
  this.option2Text = option2Text;
  this.outcome1Good = outcome1Good;
  this.outcome1Bad = outcome1Bad;
  this.outcome2Good = outcome2Good;
  this.outcome2Bad = outcome2Bad;
  Scene.scenesArray.push(this);
}

new Scene(
  'park',
  'img/park.jpg',
  'audio/ambience-park-jogging.mp3',
  'You are feeling a little hungover from last night\'s adventures, so let\'s go for a jog. You head into the park and you see a ' + color + ' ' + animal + ' . Would you like to pet it, or keep jogging?',
  'Pet the ' + animal,
  'Keep jogging',
  'You decided to pet the ' + animal + ' and it was friendly! You had a great time playing with the ' + animal + ' and then finished your run.',
  'You decided to pet the ' + animal + ' and it bit your hand, you then ran away.',
  'You ran away and the feral-looking ' + animal + ' luckily didn\'t pursue you.',
  'You ran away and tripped on a twig hitting the ground face first.'
);

new Scene(
  'crosswalk',
  'img/cherry-street.jpg',
  'audio/ambience-city-street-traffic.wav',
  'You finish your jog and decide to head toward a cafe. You are almost there, but you get stuck at a crosswalk. The traffic doesn\'t seem to be letting up. Do you want to prolong your suffering and wait, or take a chance and cross anyway?',
  'Wait in agony',
  'Make a run for it',
  'You decided to wait and the light turned green immediately, you managed to cross the street with out getting smashed by a bus, you also let out a celebratory Woohoo!',
  'You decided to wait and a ' + sidewalk + ' nearly ran you over. The ' + sidewalk + ' yelled at you.',
  'You made a run for it and a kind Subaru Outback driver stopped traffic so you could cross safely.',
  'You made a run for it and you stepped into the street and nearly lost your foot to a ' + vehicle + '.'
);

new Scene(
  'cafe',
  'img/cafe.jpg',
  'audio/ambience-small-cafe.wav',
  'Wow, you finally make it across the street and into the cafe. Between the long wait to cross the street and the insane line at the cafe, you have finally narrowed it down to two choices, ' + cold + ' or ' + hot + '?',
  cold,
  hot,
  'You picked the ' + cold + ' drink and it was the best you’ve ever had.',
  'You picked the ' + cold + ' drink and you immediately spilled it onto the floor by accident.',
  'You picked the ' + hot + ' drink and was wowed by it, you tipped the barista a $20.',
  'You picked the ' + hot + ' drink and spilled it on your lap which gave you a 3rd degree burn on your thighs.'
);

new Scene(
  'market',
  'img/grocery-store.jpg',
  'audio/ambience-supermarket.wav',
  'Now that you have had your post jog drink, you need to head to the market to buy a few groceries for breakfast. You buy some bread and ' + groceries + '. You are exhausted from the day you have had so far, but it is also nice out. Do you want to walk home or take the bus?',
  'Walk',
  'Bus',
  'You chose to walk and found a $20 bill on the ground.',
  'You chose to walk and an errant flock of ' + bird + ' attacked you and stole your loaf of bread.',
  'You took the bus and somebody gave up their spot for you.',
  'You took the bus and it was beyond packed so you had to ride standing up while you balanced your groceries on your head!'
);

nameForm.addEventListener('submit', updateUserName);
muteButton.addEventListener('click', toggleMute);
startButton.addEventListener('click', renderSceneP1);
optionButtons.addEventListener('click', renderSceneP2);
nextSceneButton.addEventListener('click', renderSceneP1);

function toggleMute(event) {
  if (isMuted === false){
    muteButton.src = 'img/muted.png';
    document.getElementById('alarmClock').volume = '0';
    document.getElementById('aptSound').volume = '0';
    for (var i = 0; i < Scene.scenesArray.length; i++) {
      Scene.scenesArray[i].audio.volume = '0';
    }
    console.log('now muted');
    return isMuted = true;
  } else if (isMuted === true) {
    muteButton.src = 'img/unmuted.png';
    document.getElementById('alarmClock').volume = '0.3';
    document.getElementById('aptSound').volume = '0.3';
    for (var i = 0; i < Scene.scenesArray.length; i++) {
      Scene.scenesArray[i].audio.volume = '0.3';
    }
    console.log('now unmuted');
    return isMuted = false;
  }
}

function updateUserName(e) {
  e.preventDefault();
  localStorage.clear();
  console.log('ls clear');
  userName = nameInput.value;
  if (!userName) {
    return alert('You have to tell us your name friend!');
  }
  localStorage.setItem('userName', userName);
  console.log(userName);
  e.target.reset();
  nameForm.style.display = 'none';
  apt.style.display = 'block';
  if (isMuted === false) {
    document.getElementById('alarmClock').pause();
    document.getElementById('aptSound').play();
  }
}

if (localStorage.getItem('userName')) {
  userName = localStorage.getItem('userName');
}

intro.textContent = 'Good morning ' + userName + '! It is your day off and you have some errands to run. Let\'s get your day started!';

function renderSceneP1() {
  if (currentScene >= Scene.scenesArray.length) {
    window.location = 'summary.html';
    localStorage.setItem('outcomeArray', JSON.stringify(outcomeArray));
    localStorage.setItem('happinessValue', JSON.stringify(happinessValue));
    localStorage.setItem('color', color);
    localStorage.setItem('animal', animal);
    localStorage.setItem('cold', cold);
    localStorage.setItem('hot', hot);
    localStorage.setItem('groceries', groceries);
  }
  apt.style.display = 'none';
  scenes.style.display = 'block';
  optionButtons.style.display = 'block';
  nextSceneButton.style.display = 'none';
  scenes.style.backgroundImage = "linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%), url('" + Scene.scenesArray[currentScene].filepath + "')";
  if (currentScene > 0) {
    Scene.scenesArray[currentScene-1].audio.pause();
  } else {
    document.getElementById('aptSound').pause();
  }
  Scene.scenesArray[currentScene].audio.play();
  doTheThing(Scene.scenesArray[currentScene].narrative, 300);
  option1Button.textContent = Scene.scenesArray[currentScene].option1Text;
  option2Button.textContent = Scene.scenesArray[currentScene].option2Text;
}

function renderSceneP2(e) {
  optionButtons.style.display = 'none';
  nextSceneButton.style.display = 'block';
  var goodBad = random(goodBadArray);
  var storyTeller;
  if ((e.target === option1Button) && (goodBad === 'good')) {
    storyTeller = Scene.scenesArray[currentScene].outcome1Good;
    happinessValue++;
    outcomeArray.push(storyTeller);
    console.log(outcomeArray);
  } else if ((e.target === option1Button) && (goodBad === 'bad')) {
    storyTeller = Scene.scenesArray[currentScene].outcome1Bad;
    happinessValue--;
    outcomeArray.push(storyTeller);
  } else if ((e.target === option2Button) && (goodBad === 'good')) {
    storyTeller = Scene.scenesArray[currentScene].outcome2Good;
    happinessValue++;
    outcomeArray.push(storyTeller);
  } else {
    storyTeller = Scene.scenesArray[currentScene].outcome2Bad;
    happinessValue--;
    outcomeArray.push(storyTeller);
  }
  doTheThing(storyTeller, 300);
  currentScene++;
}

// returns a random value from an array regardless of length
function random(arrayName) {
  var i = Math.floor(Math.random() * arrayName.length);
  var outcome = arrayName[i];
  return outcome;
}
