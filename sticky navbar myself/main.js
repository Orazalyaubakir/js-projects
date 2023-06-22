const nav = document.querySelector('.nav');

const bottom = document.querySelector('.page');

console.log(nav.offsetHeight);

console.log(bottom.offsetTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 645) {
    nav.classList.add('nav-js');
  } else {
    nav.classList.remove('nav-js');
  }
});
