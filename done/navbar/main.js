const burger = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

burger.addEventListener('click', () => {
  links.classList.toggle('show-links');
});
