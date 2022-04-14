const resetButton = document.querySelector('#clear-board');
const board = document.querySelector('#pixel-board');
const input = document.querySelector('#board-size');
const buttonInput = document.querySelector('#generate-board');
const colorPicker = document.querySelector('.color-picker');

function colorPixel(e) {
  const color = colorPicker.value;
  const rgbColor = ['0x' + color[1] + color[2] | 0, '0x' + color[3] + color[4] | 0, '0x' + color[5] + color[6] | 0];
  // https://stackoverflow.com/questions/65154794/how-can-i-get-the-rgb-values-from-color-picker-and-display-them
  const myColor = `rgb(${rgbColor.join(', ')})`;

  if (e.target.style.backgroundColor !== myColor) {
    e.target.style.backgroundColor = myColor;
  } else {
    e.target.style.backgroundColor = 'white';
  }
}

function newLine(x) {
  for (let i = 0; i < x; i += 1) {
    let pixelLine = document.createElement("div");
    pixelLine.className = "pixel-line";
    board.appendChild(pixelLine);
  }
}

function initialize() {
  newLine(5);
  let pixelLine = document.querySelectorAll('.pixel-line');
  for (let x = 0; x < 5; x += 1){
    for (let i = 0; i < 5; i += 1) {
      const myPixel = document.createElement("div");
      myPixel.className = "pixel";
      myPixel.style.backgroundColor = "white";
      pixelLine[i].appendChild(myPixel);
      myPixel.addEventListener("click", colorPixel);
    }
  }
}

window.onload = initialize();

function lessThanFive() {
  newLine(5);
  let pixelLine = document.querySelectorAll(".pixel-line");
  for (let x = 0; x < 5; x += 1) {
    for (let i = 0; i < 5; i += 1) {
      const myPixel = document.createElement("div");
      myPixel.className = "pixel";
      myPixel.style.backgroundColor = "white";
      pixelLine[i].appendChild(myPixel);
      myPixel.addEventListener("click", colorPixel);
    }
  }
}

function moreThanFifty() {
  newLine(50);
  let pixelLine = document.querySelectorAll(".pixel-line");
  for (let x = 0; x < 50; x += 1) {
    for (let i = 0; i < 50; i += 1) {
      const myPixel = document.createElement("div");
      myPixel.className = "pixel";
      myPixel.style.backgroundColor = "white";
      pixelLine[i].appendChild(myPixel);
      myPixel.addEventListener("click", colorPixel);
    }
  }
}

function createLine() {
  let pixelLine = document.querySelectorAll(".pixel-line");
  for (let x = 0; x < input.value; x += 1) {
    const myPixel = document.createElement("div");
    myPixel.className = "pixel";
    myPixel.style.backgroundColor = "white";
    pixelLine[x].appendChild(myPixel);
    myPixel.addEventListener("click", colorPixel);
  }
}

function createBoard() {
  if (input.value < 5) {
    lessThanFive();
  } else if (input.value > 50) {
    moreThanFifty();
  } else {
    const myNumber = input.value;
    newLine(myNumber);
    for (let i = 0; i < input.value; i += 1) {
      createLine();
    }
  }
}

function deleteBoard() {
  if (!input.value) {
    alert('Board inválido!');
    Location.reload();
  } else {
    board.innerHTML = '';
  }
  createBoard();
}

buttonInput.addEventListener('click', deleteBoard);
function enter(e) {
  if (e.key === "Enter") {
    deleteBoard();
  }
}

input.addEventListener("keyup", enter);


function selectColor(e) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
  e.target.className = 'color selected';
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

resetButton.addEventListener('click', clearBoard);
