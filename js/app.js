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
var animalArray = ['dog', 'honey badger', 'trash panda', 'bear'];
//scene 2 arrays
var sidewalkArray = ['bicyclist', 'skateboarder', 'scooter', 'runner'];
var vehicleArray = ['moped', 'trolly', 'bus', 'volkswagen beetle'];
//scene 3 arrays
var hotArray = ['black coffee', 'americana', 'vanilla latte', 'black tea'];
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
  'After a wild Friday night you decide to go for a morning jog in the park. While out jogging you hear a rustling in the bushes and encounter a ' + color + ' ' + animal + ' ! Are you brave enough to pet it, or do you run away in the opposite direction?',
  'Pet the ' + animal,
  'Run away',
  'You decided to be brave and pet the ' + animal + ' and it was super friendly! You finished your run after making your new friend.',
  'You decided to be brave and pet the ' + animal + ' but unfortunately it was rabid and bit your hand before you had the chance to run away.',
  'You ran away and the feral-looking ' + animal + ' luckily didn\'t pursue you.',
  'You ran away and tripped over a root hitting the pavement face first and chipped your front tooth.'
);

new Scene(
  'crosswalk',
  'img/cherry-street.jpg',
  'audio/ambience-city-street-traffic.wav',
  'After finishing your jog you head over to your favorite  café. You are almost there, but you get stuck at a crosswalk as the light turns red. The traffic doesn\'t seem to be letting up. Do you wait patiently like a good Seattlite or risk it all and dart across recklessly.',
  'Wait patiently',
  'Run and risk it all',
  'You decided to wait patiently and luckily the light turned green immediately and crossed without incident.',
  'You decided to wait patiently and a ' + sidewalk + ' nearly ran you over. They yelled profanity at you as they breezed on by.',
  'You made a run for it and a kind Subaru Outback driver stopped traffic just so you could cross safely.',
  'You made a run for it and as you stepped into the street a ' + vehicle + ' runs over your foot.'
);

new Scene(
  'cafe',
  'img/cafe.jpg',
  'audio/ambience-small-cafe.wav',
  'You crossed the busy street and made it to your favorite café to grab a drink, however, you find yourself at the end of an incredibly long line. After mulling things over, you have narrowed your choices down to just two, ' + cold + ' or ' + hot + '?',
  cold,
  hot,
  'You picked the ' + cold + ' and you happened to be the 100th customer of the day and got your drink order for free.',
  'You picked the ' + cold + ' and it gave you the worst brain freeze of your life.',
  'You picked the ' + hot + ' and found the phone number of the cute barista scrawled on the side of it.',
  'You picked the ' + hot + ' and as you sat down, spilled it on your lap giving yourself a 3rd degree thigh burn.'
);

new Scene(
  'market',
  'img/grocery-store.jpg',
  'audio/ambience-supermarket.wav',
  'Now that you have had your post-jog drink, you head down to the market to pick up some bread and ' + groceries + '. You are already exhausted from the day that you\'ve had so far, but at least it\'s nice out. Do you walk home or take the bus?',
  'Walk',
  'Bus',
  'You chose to walk home and discovered a $20 bill on the ground. Cha-ching!',
  'You chose to walk home and your loaf of bread attracted an angry flock of ' + bird + '. They swooped down and stole all of your bread that you were going to make french toast with.',
  'You took the bus home and somebody was nice enough to give up their spot for you and your groceries.',
  'You took the bus home and your grocery bag ripped spilling out everywhere on the bus, everbody looked annoyed with you as you gathered everything up.'
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
  intro.textContent = 'Good morning ' + userName + '! It is your day off and you have some errands to run. Let\'s get your day started!';
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
  paintCanvas(Scene.scenesArray[currentScene].narrative, 300);
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
  paintCanvas(storyTeller, 300);
  currentScene++;
}

// returns a random value from an array regardless of length
function random(arrayName) {
  var i = Math.floor(Math.random() * arrayName.length);
  var outcome = arrayName[i];
  return outcome;
}
