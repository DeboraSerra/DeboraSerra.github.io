const colorToGuess = document.querySelector('#rgb-color');
const circles = document.querySelectorAll('.ball');
const answerParagraph = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
const scoreDiv = document.querySelector('#score');

function newColor() {
  let color = '';
  const number1 = Math.floor((Math.random() * 255) + 1);
  const number2 = Math.floor((Math.random() * 255) + 1);
  const number3 = Math.floor((Math.random() * 255) + 1);
  color = `(${number1}, ${number2}, ${number3})`;
  return color;
}

function guessColor() {
  colorToGuess.innerHTML = newColor();
}

guessColor();

function answer(e) {
  const myColor = colorToGuess.innerText;
  if (e.target.style.backgroundColor === `rgb${myColor}`) {
    answerParagraph.innerText = 'Acertou!';
    const score = parseInt(scoreDiv.innerHTML, 10);
    localStorage.setItem('score', score);
    let myScore = parseInt(localStorage.getItem('score'), 10);
    myScore += 3;
    localStorage.setItem('score', myScore);
    scoreDiv.innerText = myScore;
  } else {
    answerParagraph.innerText = 'Errou! Tente novamente!';
  }
}

function circlesColors() {
  const randomIndex = Math.floor(Math.random() * 6);
  const myColor = colorToGuess.innerText;
  for (let i = 0; i < circles.length; i += 1) {
    if (i !== randomIndex) {
      circles[i].style.backgroundColor = `rgb${newColor()}`;
    }
    circles[i].addEventListener('click', answer);
  }
  circles[randomIndex].style.backgroundColor = `rgb${myColor}`;
}

circlesColors();

function setScore() {
  if (localStorage.getItem('score')) {
    const myScore = localStorage.getItem('score');
    scoreDiv.innerText = myScore;
  } else {
    scoreDiv.innerText = 0;
  }
}

function resetGame() {
  answerParagraph.innerText = 'Escolha uma cor';
  guessColor();
  circlesColors();
  setScore();
}

resetButton.addEventListener('click', resetGame);
