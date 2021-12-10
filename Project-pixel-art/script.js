const colors = document.querySelectorAll('.color');
const resetButton = document.querySelector('#clear-board');
const firstColor = document.querySelectorAll('.color')[0];
const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];
const board = document.querySelector('#pixel-board');
const input = document.querySelector('input');
const buttonInput = document.querySelector('#generate-board');

const number1 = (Math.random() * 255) + 1;
const number2 = (Math.random() * 255) + 1;
const number3 = (Math.random() * 255) + 1;
const number4 = Math.random() * 255 + 1;
const number5 = Math.random() * 255 + 1;
const number6 = Math.random() * 255 + 1;
const number7 = Math.random() * 255 + 1;
const number8 = Math.random() * 255 + 1;
const number9 = Math.random() * 255 + 1;

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = `rgb(${number1}, ${number2}, ${number3})`;
thirdColor.style.backgroundColor = `rgb(${number4}, ${number5}, ${number6})`;
fourthColor.style.backgroundColor = `rgb(${number7}, ${number8}, ${number9})`;

function colorPixel(e) {
  const myColor = document.querySelector('.selected').style.backgroundColor;
  if (e.target.style.backgroundColor !== myColor) {
    e.target.style.backgroundColor = myColor;
  } else if (e.target.style.backgroundColor === myColor) {
    e.target.style.backgroundColor = 'white';
  }
}

function initialize() {
  for (let i = 0; i < 5; i += 1) {
    for (let x = 0; x < 5; x += 1) {
      const myPixel = document.createElement('div');
      myPixel.className = 'pixel';
      myPixel.style.backgroundColor = 'white';
      myPixel.style.width = '40px';
      myPixel.style.height = '40px';
      board.appendChild(myPixel);
      myPixel.addEventListener('click', colorPixel);
    }
    const newLine = document.createElement('br');
    board.appendChild(newLine);
  }
}

window.onload = initialize();

function lessThanFive() {
  for (let i = 0; i < 5; i += 1) {
    for (let x = 0; x < 5; x += 1) {
      const myPixel = document.createElement('div');
      myPixel.className = 'pixel';
      myPixel.style.backgroundColor = 'white';
      board.appendChild(myPixel);
      myPixel.addEventListener('click', colorPixel);
    }
    const newLine = document.createElement('br');
    board.appendChild(newLine);
  }
}

function moreThanFifty() {
  for (let i = 0; i < 50; i += 1) {
    for (let x = 0; x < 50; x += 1) {
      const myPixel = document.createElement('div');
      myPixel.className = 'pixel';
      myPixel.style.backgroundColor = 'white';
      board.appendChild(myPixel);
      myPixel.addEventListener('click', colorPixel);
    }
    const newLine = document.createElement('br');
    board.appendChild(newLine);
  }
}

function createLine() {
  for (let x = 0; x < input.value; x += 1) {
    const myPixel = document.createElement('div');
    myPixel.className = 'pixel';
    myPixel.style.backgroundColor = 'white';
    board.appendChild(myPixel);
    myPixel.addEventListener('click', colorPixel);
  }
  const newLine = document.createElement('br');
  board.appendChild(newLine);
}

function createBoard() {
  if (input.value < 5) {
    lessThanFive();
  } else if (input.value > 50) {
    moreThanFifty();
  } else {
    for (let i = 0; i < input.value; i += 1) {
      createLine();
    }
  }
}

function deleteBoard() {
  if (!input.value) {
    alert('Board inválido!');
  } else {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      board.removeChild(pixels[i]);
    }
    const line = document.querySelectorAll('br');
    for (let i = 0; i < line.length; i += 1) {
      board.removeChild(line[i]);
    }
  }
  createBoard();
}

buttonInput.addEventListener('click', deleteBoard);

function selectColor(e) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
  e.target.className = 'color selected';
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

resetButton.addEventListener('click', clearBoard);
