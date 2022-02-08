const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
    child = entrants
      .filter((item) => item.age < 18).length;
    adult = entrants
      .filter((item) => item.age >= 18 && item.age < 50).length;
    senior = entrants
      .filter((item) => item.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  return Object.values(prices).reduce((acc, item, i) => {
    if (i === 0) return acc + item * adult;
    if (i === 1) return acc + item * senior;
    if (i === 2) return acc + item * child;
  }, 0)
}

const people = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
