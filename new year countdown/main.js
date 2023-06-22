const day = document.querySelector('.days');
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

const newYearTime = new Date('1 Jan 2024 00:00:00').getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = newYearTime - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const d = `${Math.floor(distance / days)} days`;
  const h = `${Math.floor((distance % days) / hours)} hours`;
  const m = `${Math.floor((distance % hours) / minutes)} minutes`;
  const s = `${Math.floor((distance % minutes) / seconds)} seconds`;
  day.innerHTML = d;
  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
  setTimeout(updateCountdown, 1000);
}
