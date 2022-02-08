const countAnimals = require('./src/countAnimals');
const animalsSec = document.querySelector('.animals-sec');

animalsSec.innerHTML = countAnimals();

