// BACKGROUND TEXTS
const texts = ["i ain't lied to nobody but me",
  "where were you when i needed you",
  "what if the night keeps falling",
  "all these hundreds and these thousands, i'ma spend it all",
  "hard to believe in god when there ain't no mirrors around",
  "so tired of being so tired",
  "cocaine for breakfast",
  "medusa never turned me to a statue",
  "i saw the sparks",
  "my regrets look just like texts i shouldn't send",
  "wash it out of all of me to feel the fire",
  "a lot of things i regret, but i just say i forget",];

// VARIABLES
var score = 0;
var click = 1;
var assistant = 0;

var clickPrice = 10;
var assistantPrice = 1000;

// COOKIES
// function cookiesWrite() {
//   document.cookie = "score = " + score + "; secure";
//   document.cookie = "click = " + click + "; secure";
//   document.cookie = "assistant = " + assistant + "; secure";
//   document.cookie = "clickPrice = " + clickPrice + "; secure";
//   document.cookie = "assistantPrice = " + assistantPrice + "; secure";
//   console.log(document.cookie);
// }

// function cookiesSet() {
//   let cookieRow = document.cookie.split(";");
//   for (let i = 0; i < cookieRow.length; i++) {
//     console.log(cookieRow[i].replace(" ", ""));
//     let cookieSplit = (cookieRow[i].replace(" ", "")).split("=");
//     if (cookieSplit[0] == "score") {
//       score = cookieSplit[1];
//     } else if (cookieSplit[0] == "click") {
//       click = cookieSplit[1];
//     } else if (cookieSplit[0] == "assistant") {
//       assistant = cookieSplit[1];
//     } else if (cookieSplit[0] == "clickPrice") {
//       clickPrice = cookieSplit[1];
//     } else if (cookieSplit[0] == "assistantPrice") {
//       assistantPrice = cookieSplit[1];
//     }
//   }
// }

// BUTTONS
document.getElementById("chliq").addEventListener("click", chliq);
document.getElementById("click-upgrade").addEventListener("click", clickUpgrade);
document.getElementById("assistant-upgrade").addEventListener("click", assistantUpgrade);

// UPDATE INFORMATION
function updater() {
  document.title = "chliq | " + score;
  document.getElementById("score").getElementsByTagName("span")[0].innerHTML = score;
  document.getElementById("click-upgrade").getElementsByClassName("counter")[0].innerHTML = click;
  document.getElementById("click-upgrade").getElementsByClassName("price")[0].innerHTML = clickPrice;
  document.getElementById("assistant-upgrade").getElementsByClassName("counter")[0].innerHTML = assistant;
  document.getElementById("assistant-upgrade").getElementsByClassName("price")[0].innerHTML = assistantPrice;
  milestone();
}

function randomText() {
  let random;
  do {
    random = texts[Math.floor((Math.random() * texts.length))];
  } while (random == document.getElementById("background-text").innerHTML);
  document.getElementById("background-text").innerHTML = random;
}

// MILESTONES
function milestone() {
  if (score >= 1) {
    document.getElementById("score").style.display = "block";
  }
  if (score >= 10) {
    document.getElementById("shop").style.display = "block";
  }
}

// MAIN CLICK
function chliq() {
  score += click;
  randomText();
  updater();
}

// BUYING UPGRADES
function clickUpgrade() {
  if (score >= clickPrice) {
    click++;
    score -= clickPrice;
    clickPrice = Math.round(clickPrice * (1 + (click / 10)));
  }
  updater();
}

function assistantUpgrade() {
  if (score >= assistantPrice) {
    assistant++;
    score -= assistantPrice;
    assistantPrice = Math.round(assistantPrice * (1 + (assistant / 10)));
  }
  updater();
}

// REPEATING STUFF
var repeatAssistant;

window.onload = repeat();
function repeat() {
  repeatAssistant = setInterval(function () {
    score += assistant;
    updater();
  }, 1000);
}