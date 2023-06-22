const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole');
    square.style.backgroundColor = '#fff';
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.style.backgroundColor = randomColor();

  // randomSquare.classList.add('mole');

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}
moveMole();

function countdown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countdownId); // Corrected variable name
    clearInterval(timerId);
    alert('GAME OVER! Your final score is ' + result);
  }
}

let countdownId = setInterval(countdown, 1000);

function randomColor() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
}
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
