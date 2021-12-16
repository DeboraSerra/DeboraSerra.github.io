const letter = document.querySelector('#carta-gerada');
const generateLetterButton = document.querySelector('#criar-carta');
const input = document.querySelector('#carta-texto');
const counter = document.querySelector('#carta-contador');

function generateLetter() {
  const myText = input.value;
  const textArray = myText.split(' ');
  const arrayItems = textArray.length;
  counter.innerText = arrayItems;
  for (let i = 0; i < textArray.length; i += 1) {
    const wordSpan = document.createElement('span');
    const text = textArray[i];
    wordSpan.innerText = text;
    letter.appendChild(wordSpan);
  }
}

function clearParagraph() {
  if (!input.value || input.value === ' ') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    letter.innerText = '';
    const myLetter = document.querySelectorAll('#carta-gerada span');
    for (let i = 0; i < myLetter.length; i += 1) {
      letter.removeChild(myLetter[i]);
    }
    generateLetter();
  }
}

generateLetterButton.addEventListener('click', clearParagraph);

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

function pickStyle() {
  const styleLength = style.length;
  const myStyleInex = Math.floor(Math.random() * styleLength);
  const myStyle = style[myStyleInex];
  return myStyle;
}

function pickSize() {
  const sizeLength = size.length;
  const mySizeInex = Math.floor(Math.random() * sizeLength);
  const mySize = size[mySizeInex];
  return mySize;
}

function pickRotation() {
  const rotationLength = 2;
  const myRotationInex = Math.floor(Math.random() * rotationLength);
  const myRotation = rotation[myRotationInex];
  return myRotation;
}

function pickInclination() {
  const inclinationLength = 2;
  const myInclinationInex = Math.floor((Math.random() * inclinationLength));
  const myInclination = inclination[myInclinationInex];
  return myInclination;
}

function changeClasses(e) {
  e.target.className = '';
  e.target.classList.add(pickStyle());
  e.target.classList.add(pickSize());
  e.target.classList.add(pickRotation());
  e.target.classList.add(pickInclination());
}

function pickClasses() {
  const myWords = document.querySelectorAll('span');
  for (let i = 0; i < myWords.length; i += 1) {
    myWords[i].addEventListener('click', changeClasses);
    myWords[i].classList.add(pickStyle());
    myWords[i].classList.add(pickRotation());
    myWords[i].classList.add(pickSize());
    myWords[i].classList.add(pickInclination());
  }
}

generateLetterButton.addEventListener('click', pickClasses);
