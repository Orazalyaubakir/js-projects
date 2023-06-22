const monthEl = document.querySelector('.month');
const dayEl = document.querySelector('.day-name');
const dateEl = document.querySelector('.date');
const yearEl = document.querySelector('.year');

const date = new Date();
const dateNumber = date.getDate();
const year = date.getFullYear();

monthEl.innerText = date.toLocaleString('en', {
  month: 'long',
});

dayEl.innerText = date.toLocaleString('en', {
  weekday: 'long',
});

dateEl.innerHTML = dateNumber;
yearEl.innerHTML = year;
