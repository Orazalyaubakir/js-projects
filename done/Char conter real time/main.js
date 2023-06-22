const input = document.querySelector('.input');
const totalNum = document.querySelector('.total-num');
const remainmingNum = document.querySelector('.remaining-num');

input.addEventListener('keyup', () => {
  updateCounter();
});

function updateCounter() {
  totalNum.innerHTML = input.value.length;
  remainmingNum.innerHTML =
    input.getAttribute('maxlength') - input.value.length;
}
