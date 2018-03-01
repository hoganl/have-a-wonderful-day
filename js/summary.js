'use strict';

var summaryText = document.getElementById('summary');

var summary = 'Phew, it is only 10am, and you have had a heck of a day. Let\'s look back at your morning so far. You started your day going for a jog through the park. ' + outcome[0] + ' Such an adventure already. Next, you decided to head to the cafe, but you ran into some crazy traffic trying to cross a busy intersection. You mulled over whether you wanted to wait for the light to change or it you should just make a run for it. ' + outcome[1] + ' Wow, glad you made it through that alive. You finally made it into the cafe where you had a tough decision on what to drink. ' + outcome[2] + '. You made it through that ordeal and needed to grab a few groceries before heading home. With your groceries in hand, you had one last decision to make, walk or take the bus' + outcome[3] + ' Wow, what a day. Now you only have one last choice to make....start your day over and try your luck, or join your friends for lunch?';

function renderSummary () {
  summaryText.textContent = summary;
}

renderSummary();