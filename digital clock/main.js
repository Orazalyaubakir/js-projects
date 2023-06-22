const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minutes');
const secondEl = document.querySelector('#seconds');
const ampmEl = document.querySelector('#ampm');

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = 'AM';

  if (h > 12) {
    h = h - 12;
    ampm = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hourEl.innerHTML = h;
  minuteEl.innerHTML = m;
  secondEl.innerHTML = s;
  ampmEl.innerHTML = ampm;

  setTimeout(updateClock, 1000);
}

updateClock();