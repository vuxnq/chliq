var score = 0
const texts = ["i ain't lied to nobody but me",
  "where were you when i needed you",
  "what if the night keeps falling",
  "all these hundreds and these thousands, i'ma spend it all",
  "hard to believe in god when there ain't no mirrors around",
  "so tired of being so tired",
  "cocaine for breakfast",
  "medusa never turned me to a statue",
  "i saw the sparks",
  "my regrets look just like texts i shouldn't send",];


document.getElementById("chliq").addEventListener("click", chliq);

function chliq() {
  score++;
  document.title = "chliq | " + score;
  let random = texts[Math.floor((Math.random() * texts.length))];
  document.getElementById("background-text").innerHTML = random;
  updater();
}

function updater() {
  if (score >= 10) {
    document.getElementById("shop").style.display = "block";
  }
}