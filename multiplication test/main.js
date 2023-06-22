// const score = document.querySelector('.score');
// const question = document.querySelector('.question');
// const answer = document.querySelector('.answer');
// const submitBtn = document.querySelector('.btn');

// let scoreNum = 0;

// const randomNumberOne = Math.floor(Math.random() * 10);
// const randomNumberTwo = Math.floor(Math.random() * 10);

// submitBtn.addEventListener('click', () => {
//   // check answer
//   const userAnswer = answer.value;
//   if (userAnswer === `${randomNumberOne * randomNumberTwo}`) {
//     score.innerHTML = `Your score is ${++scoreNum}`;
//     answer.value = '';
//     questionMake();
//   } else {
//     score.innerHTML = `Your score is ${--scoreNum}`;
//     answer.value = '';
//     questionMake();
//   }
// });

// function questionMake() {
//   question.innerHTML = `What is ${randomNumberOne} multiply by ${randomNumberTwo}?`;
// }
// questionMake();

const score = document.querySelector('.score');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const submitBtn = document.querySelector('.btn');

let scoreNum = 0;
let randomNumberOne, randomNumberTwo;

submitBtn.addEventListener('click', () => {
  // проверяем ответ
  const userAnswer = answer.value;
  if (userAnswer === `${randomNumberOne * randomNumberTwo}`) {
    score.innerHTML = `Your score is ${++scoreNum}`;
  } else {
    score.innerHTML = `Your score is ${--scoreNum}`;
  }

  answer.value = '';
  questionMake();
});

function questionMake() {
  randomNumberOne = Math.floor(Math.random() * 10);
  randomNumberTwo = Math.floor(Math.random() * 10);
  question.innerHTML = `What is ${randomNumberOne} multiplied by ${randomNumberTwo}?`;
}

// Исходный вопрос
questionMake();
