var currentNumberIndex = 0;
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var audioElement = null;
var start = document.querySelector('.start')



function startGame() {
  document.getElementById("game").classList.add('d-block')
  document.getElementById("game").classList.remove('d-none')
  document.getElementById("end-game").classList.add('d-none')
  document.getElementById("end-game").classList.remove('d-block')

  start.classList.add('d-none')
  generateNumber();
}

function generateNumber() {
  var numberBox = document.getElementById("number-box");
  numberBox.classList.add('d-none')
  var numberImage = document.getElementById("number-image");
  numberImage.style.backgroundImage = "url('./assets/numbers/" + numbers[currentNumberIndex] + ".jpg')";
  numberImage.classList.add('d-block')

  // Inicializar o elemento de áudio
  var audioFile = "./assets/audio/" + numbers[currentNumberIndex] + ".mp3";
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
  document.getElementById("game").classList.add('d-none')
  document.getElementById("game").classList.remove('d-block')

  document.getElementById("end-game").classList.remove('d-none')
  document.getElementById("end-game").classList.add('d-block')
  start.classList.remove('d-none')
}

function restartGame() {
  currentNumberIndex = 0;
  document.getElementById("game").classList.remove('d-none')
  document.getElementById("game").classList.add('d-block')
  document.getElementById("end-game").classList.add('d-none')
  document.getElementById("end-game").classList.remove('d-block')
  generateNumber();
}

document.querySelector('#start').addEventListener('click', startGame)
document.querySelector('.previous').addEventListener('click', previousNumber)
document.querySelector('.next').addEventListener('click', nextNumber)
document.querySelector('.play').addEventListener('click', playAudio)
document.querySelector('.stop').addEventListener('click', endGame)
document.querySelector('.restart').addEventListener('click', startGame)
