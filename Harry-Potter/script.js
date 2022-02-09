const urlCharacters = 'http://hp-api.herokuapp.com/api/characters';
const urlStudents = 'http://hp-api.herokuapp.com/api/characters/students';
const urlStaff = 'http://hp-api.herokuapp.com/api/characters/staff';
const urlHouses = 'http://hp-api.herokuapp.com/api/characters/house/';

const gryf = 'gryffindor';
const sly = 'slytherin';
const huf = 'hufflepuff';
const rav = 'ravenclaw';

const btnAll = document.querySelector('.all');
const btnStudents = document.querySelector('.students');
const btnStaff = document.querySelector('.staff');
const btnGryf = document.querySelector('.gryffindor');
const btnSly = document.querySelector('.slytherin');
const btnHuff = document.querySelector('.hufflepuff');
const btnRav = document.querySelector('.ravenclaw');

const characterContainer = document.querySelector('.content');
const crest = document.querySelector('.crest');
const clearContainer = document.querySelector('.clear-btn-container');

// HELPERS

const createCustomElement = (tagName, elemClass, text) => {
  const newTag = document.createElement(tagName);
  if (elemClass) newTag.className = elemClass;
  if (text) newTag.innerText = text;
  return newTag;
}

const createImageElement = (url, name, alive) => {
  const newImage = document.createElement('img');
  newImage.src = url;
  newImage.alt = name;
  if (!alive) newImage.style.filter = 'grayscale(100%)';
  return newImage;
}

//FETCHERS

const getAllCharacters = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const characters = data.map((character) => {
      const {name, house, wand, patronus, actor, alive, image} = character;
      return { name, house, wand, patronus, actor, alive, image};
    })
    return characters;
  } catch (error) {
    characterContainer.innerHTML = error.message;
  }
}

//HANDLERS

const clearContent = () => {
  characterContainer
    .querySelectorAll('.character')
    .forEach((item) => item.remove());
  clearContainer.querySelector('.clear').remove();
  crest.src = './images/dopely_Hogwarts-houses-949x1024.png';
  crest.alt = 'Hogwarts\' crest';
}

const createCharacterCards = (character) => {
  const {name, house, wand: {wood, core, length}, patronus, actor, alive, image} = character;
  let wandText = ''
  if (wood || core || length) {
    wandText = `Wand: ${wood}, ${core}, ${length}`;
  } else {
    wandText = 'Wand: unknown';
  }
  const tags = [];
  tags.push(createCustomElement('p', 'h2', name));
  if (image) tags.push(createImageElement(image, name, alive));
  tags.push(createCustomElement('p', 'p', house));
  tags.push(createCustomElement ('p', 'p', wandText));
  if (!patronus) {
    tags.push(createCustomElement('p', 'p', `Patronus: unknown`));
  } else {
    tags.push(createCustomElement('p', 'p', `Patronus: ${patronus}`));
  }
  tags.push(createCustomElement('p', 'p', `Played by: ${actor}`));
  return tags;
}

const getCharacters = async (url) => {
  if (document.querySelector('.clear')) clearContent();
  const characters = await getAllCharacters(url);
  const clearButton = createCustomElement('p', 'button clear', 'Clear search');
  clearButton.addEventListener('click', clearContent);
  clearContainer.appendChild(clearButton);
  characters.forEach((character) => {
    const {house} = character
    const tags = createCharacterCards(character);
    const newSect = createCustomElement('section', `character ${house.toLowerCase()}`);
    tags.forEach((tag) => newSect.appendChild(tag));
    characterContainer.appendChild(newSect);
  })
}

const getStudentByHouse = (house) => {
  crest.src = `./images/${house}-crest.png`;
  crest.alt = `${house} crest`
  getCharacters(`${urlHouses}${house}`);
}

//Buttons

btnAll.addEventListener('click', () => getCharacters(urlCharacters));
btnStudents.addEventListener('click', () => getCharacters(urlStudents));
btnStaff.addEventListener('click', () => getCharacters(urlStaff));
btnGryf.addEventListener('click', () => getStudentByHouse(gryf));
btnSly.addEventListener('click', () => getStudentByHouse(sly));
btnHuff.addEventListener('click', () => getStudentByHouse(huf));
btnRav.addEventListener('click', () => getStudentByHouse(rav));

window.onload = async () => {

}