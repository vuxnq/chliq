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
  "wash it out of all of me to feel the fire",];

var score = 0;
var click = 1;
var assistant = 0;

var clickPrice = 10;
var assistantPrice = 1000;

document.getElementById("chliq").addEventListener("click", chliq);
document.getElementById("click-upgrade").addEventListener("click", clickUpgrade);
document.getElementById("assistant-upgrade").addEventListener("click", assistantUpgrade);

function updater() {
  document.title = "chliq | " + score;
  document.getElementById("click-upgrade").getElementsByClassName("counter")[0].innerHTML = click;
  document.getElementById("click-upgrade").getElementsByClassName("price")[0].innerHTML = clickPrice;
  document.getElementById("assistant-upgrade").getElementsByClassName("counter")[0].innerHTML = assistant;
  document.getElementById("assistant-upgrade").getElementsByClassName("price")[0].innerHTML = assistantPrice;
  milestone();
}

function milestone() {
  if (score >= 10) {
    document.getElementById("shop").style.display = "block";
  }
}

function chliq() {
  score += click;
  let random = texts[Math.floor((Math.random() * texts.length))];
  document.getElementById("background-text").innerHTML = random;
  updater();
}

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