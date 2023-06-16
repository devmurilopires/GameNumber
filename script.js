// script.js

var currentNumberIndex = 0;
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var audioElement = null;

function startGame() {
  document.getElementById("game").style.display = "block";
  generateNumber();
}

function generateNumber() {
  var numberBox = document.getElementById("number-box");
  numberBox.style.display = "none";
  var numberImage = document.getElementById("number-image");
  numberImage.style.backgroundImage = "url('numbers/" + numbers[currentNumberIndex] + ".jpg')";
  numberImage.style.display = "block";

  // Inicializar o elemento de áudio
  var audioFile = "audio/" + numbers[currentNumberIndex] + ".mp3";
  audioElement = new Audio(audioFile);
}

function playAudio() {
  audioElement.play();
}

function previousNumber() {
  if (currentNumberIndex > 0) {
    currentNumberIndex--;
    generateNumber();
  }
}

function nextNumber() {
  if (currentNumberIndex < numbers.length - 1) {
    currentNumberIndex++;
    generateNumber();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("game").style.display = "none";
  document.getElementById("end-game").style.display = "block";
}

function restartGame() {
  currentNumberIndex = 0;
  document.getElementById("game").style.display = "block";
  document.getElementById("end-game").style.display = "none";
  generateNumber();
}
