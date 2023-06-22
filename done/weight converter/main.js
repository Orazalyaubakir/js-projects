const input = document.querySelector('#weight');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

btn.addEventListener('click', () => {
  const weight = input.value;
  const resultInKg = (weight / 2.2).toFixed(2);
  result.innerHTML = `Your weight is ${resultInKg} kg`;

  if (weight < 0) {
    result.innerHTML = 'Please enter a positive number';
  }
});
