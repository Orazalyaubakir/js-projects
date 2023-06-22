const height = document.getElementById('height');
const weight = document.getElementById('weight');
const resultInput = document.getElementById('calc-result');
const resultCategory = document.getElementById('result');
const btn = document.getElementById('calculate');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const heightValue = height.value / 100;
  const weightValue = weight.value;
  const result = weightValue / (heightValue * heightValue);
  resultInput.value = result;
  if (result < 18.5) {
    resultCategory.textContent = 'Weight Condition: underweight';
  } else if (result >= 18.5 && result <= 24.9) {
    resultCategory.textContent = 'Weight Condition: normal weight';
  } else if (result >= 25 && result <= 29.9) {
    resultCategory.textContent = 'Weight Condition: overweight';
  } else if (result >= 30) {
    resultCategory.textContent = 'Weight Condition: obese';
  }
});
