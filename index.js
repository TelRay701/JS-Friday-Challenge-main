let score = 0;

let cookieCost = 20;

let cursors = 0;

let grandmas = 0;

let grandmaCost = 100;

let person = prompt(
  "Welcome to Cookie Clicker! What's going to be your username?"
);

if (person != null) {
  document.getElementById(
    "person"
  ).innerHTML = `Hey ${person}! Click as much as you want and have fun!`;
}

function buyCookies() {
  if (score >= cookieCost) {
    score = score - cookieCost;
    cursors = cursors + 1;

    document.getElementById("score").innerHTML = score;
  }
}

function buyGma() {
  if (score >= grandmaCost) {
    score = score - grandmaCost;
    grandmas = grandmas + 1;

    document.getElementById("score").innerHTML = score;
  }
}

function add(amount) {
  score = score + amount;
  document.getElementById("score").innerHTML = parseInt(score);
}

setInterval(function () {
  score = score + cursors;
  document.getElementById("score").innerHTML = parseInt(score);
}, 500); // 1000ms = 1 second

setInterval(function () {
  score = score + grandmas * 5;
  document.getElementById("score").innerHTML = parseInt(score);
}, 450); // 1000ms = 1 second
