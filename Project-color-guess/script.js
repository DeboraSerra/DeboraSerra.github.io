const colorToGuess = document.querySelector('#rgb-color');
const circles = document.querySelectorAll('.ball');
const answerParagraph = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
const scoreDiv = document.querySelector('#score');

const newColor = () => {
  let color = '';
  const number1 = Math.floor((Math.random() * 255) + 1);
  const number2 = Math.floor((Math.random() * 255) + 1);
  const number3 = Math.floor((Math.random() * 255) + 1);
  color = `(${number1}, ${number2}, ${number3})`;
  return color;
}

const guessColor = () => {
  colorToGuess.innerHTML = newColor();
}

guessColor();

const answer = (e) => {
  const myColor = colorToGuess.innerText;
  if (e.target.style.backgroundColor === `rgb${myColor}`) {
    answerParagraph.innerText = 'You are right!';
    const score = parseInt(scoreDiv.innerHTML, 10);
    localStorage.setItem('score', score);
    let myScore = parseInt(localStorage.getItem('score'), 10);
    myScore += 3;
    localStorage.setItem('score', myScore);
    scoreDiv.innerText = myScore;
  } else {
    answerParagraph.innerText = 'Wrong! Try again!';
  }
}

const circlesColors = () => {
  const randomIndex = Math.floor(Math.random() * 6);
  const myColor = colorToGuess.innerText;
  circles.forEach((item, i) => {
    if (i !== randomIndex) {
      item.style.backgroundColor = `rgb${newColor()}`;
    }
    item.addEventListener('click', answer);
  })
  circles[randomIndex].style.backgroundColor = `rgb${myColor}`;
}

circlesColors();

const setScore = () => {
  if (localStorage.getItem('score')) {
    const myScore = localStorage.getItem('score');
    scoreDiv.innerText = myScore;
  } else {
    scoreDiv.innerText = 0;
  }
}

resetButton.addEventListener("click", () => {
  answerParagraph.innerText = "Choose a color";
  guessColor();
  circlesColors();
  setScore();
});
