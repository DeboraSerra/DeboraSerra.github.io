const memeContainer = document.querySelector('#meme-image-container');
const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const drakeNo = document.querySelector('#meme-1');
const drakeYes = document.querySelector('#meme-2');
const whatFace = document.querySelector('#meme-3');
const seeNothingMonkey = document.querySelector('#meme-4');

memeContainer.style.border = '1px solid black';

function inputMemeText(e) {
  memeText.innerHTML = textInput.value;
  if (e.key === 'Enter') {
    textInput.value = '';
  }
}

textInput.addEventListener('keyup', inputMemeText);

function insertMemeImage() {
  const file = imageInput.files[0];
  const image = URL.createObjectURL(file);
  memeImage.src = image;
  memeText.style.color = 'white';
}

imageInput.addEventListener('change', insertMemeImage);

function fireBorder() {
  memeContainer.style.border = '3px dashed red';
}

fireButton.addEventListener('click', fireBorder);

function waterBorder() {
  memeContainer.style.border = '5px double blue';
}

waterButton.addEventListener('click', waterBorder);

function earthBorder() {
  memeContainer.style.border = '6px groove green';
}

earthButton.addEventListener('click', earthBorder);

function slectImage(e) {
  const image = e.target.src;
  memeImage.src = image;
}

drakeNo.addEventListener('click', slectImage);
drakeYes.addEventListener('click', slectImage);
whatFace.addEventListener('click', slectImage);
seeNothingMonkey.addEventListener('click', slectImage);
