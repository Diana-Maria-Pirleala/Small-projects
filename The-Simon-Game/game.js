var gamePattern = [];
var buttonColors = ["orange", "red", "green", "yellow"];

var userClickedPattern = [];

var level = 0;
var start = false;

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  animatePress(userChosenColour);
  makeSound(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  userClickedPattern = [];
  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);

  animatePress(randomChoosenColor);
  makeSound(randomChoosenColor);
}

function makeSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 200);
}

$(document).keypress(function (event) {
  if (event.code === "Space" && !start) {
    $("#level-title").text("Level " + level);
    nextSequence();
    start = true;
  }
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    //console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    //console.log("wrong");

    makeSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Space to Restart");

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  start = false;
  userClickedPattern = [];
}
