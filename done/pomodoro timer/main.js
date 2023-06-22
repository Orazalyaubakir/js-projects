const timer = document.querySelector('.timer');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let seconds = 0;
let minutes = 25;
let intervalId;

function startTimer() {
  if (seconds === 0) {
    seconds = 59;
    minutes--;
  }

  timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;

  intervalId = setInterval(() => {
    seconds--;

    if (seconds === 0 && minutes === 0) {
      clearInterval(intervalId);
    }

    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  seconds = 0;
  minutes = 25;
  timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
}

// Button click events
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initial display
timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds
  .toString()
  .padStart(2, '0')}`;
