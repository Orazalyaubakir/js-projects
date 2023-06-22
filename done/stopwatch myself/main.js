const timer = document.querySelector('.timer');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let seconds = 0;
let minutes = 0;
let hours = 0;

let intervalId;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;
// functions

function stopWatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = '0' + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = '0' + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = '0' + hours.toString();
  } else {
    leadingHours = hours;
  }

  timer.innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

function startTimer() {
  intervalId = setInterval(stopWatch, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(intervalId);

  startBtn.disabled = false;
  stopBtn.disabled = true;
}
function resetTimer() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.innerText = '00:00:00';

  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// click event
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
