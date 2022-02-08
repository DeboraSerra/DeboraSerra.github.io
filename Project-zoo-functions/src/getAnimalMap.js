// const data = require("../data/zoo_data");

// const { species } = data;

// function sortedAnimalsBySex(sex) {
//   const newObj = {};
//   species.map((specie) => {
//     !newObj[specie.location]
//       ? (newObj[specie.location] = [
//           {
//             [specie.name]: specie.residents
//               .filter((item) => item.sex === sex)
//               .map((animal) => animal.name)
//               .sort(),
//           },
//         ])
//       : newObj[specie.location].push({
//           [specie.name]: specie.residents
//             .filter((item) => item.sex === sex)
//             .map((animal) => animal.name)
//             .sort(),
//         });
//     return true;
//   });
//   return newObj;
// }

// function mapOfAll() {
//   const newObj = {};
//   species.map((specie) => {
//     !newObj[specie.location]
//       ? (newObj[specie.location] = [specie.name])
//       : newObj[specie.location].push(specie.name);
//     return true;
//   });
//   return newObj;
// }

// function animalsWithNames() {
//   const newObj = {};
//   species.map((specie) => {
//     !newObj[specie.location]
//       ? (newObj[specie.location] = [
//           {
//             [specie.name]: specie.residents.map((item) => item.name),
//           },
//         ])
//       : newObj[specie.location].push({
//           [specie.name]: specie.residents.map((item) => item.name),
//         });
//     return true;
//   });
//   return newObj;
// }

// function sortedAnimalsWithName(options) {
//   if (options.sex) return sortedAnimalsBySex(options.sex);
//   const newObj = {};
//   species.map((specie) => {
//     !newObj[specie.location]
//       ? (newObj[specie.location] = [
//           {
//             [specie.name]: specie.residents.map((item) => item.name).sort(),
//           },
//         ])
//       : newObj[specie.location].push({
//           [specie.name]: specie.residents.map((item) => item.name).sort(),
//         });
//     return true;
//   });
//   return newObj;
// }

// function animalsBySex(options) {
//   if (options.sorted) return sortedAnimalsBySex(options.sex);
//   const newObj = {};
//   species.map((specie) => {
//     !newObj[specie.location]
//       ? (newObj[specie.location] = [
//           {
//             [specie.name]: specie.residents
//               .filter((item) => item.sex === options.sex)
//               .map((animal) => animal.name),
//           },
//         ])
//       : newObj[specie.location].push({
//           [specie.name]: specie.residents
//             .filter((item) => item.sex === options.sex)
//             .map((animal) => animal.name),
//         });
//     return true;
//   });
//   return newObj;
// }

const data = require('../data/zoo_data');

const { species } = data;

const createObject = (callback) => {
  const newObj = {};
  species.map((specie) => {
    if (!newObj[specie.location]) {
      newObj[specie.location] = callback(specie.location);
      return newObj;
    }
    return true;
  });
  return newObj;
};

const animalsByLocation = (location) =>
  species.filter((item) => item.location === location);

const whichAnimalsByLocation = (location) =>
  animalsByLocation(location).map((animal) => animal.name);

const animalsByLocationName = (location) =>
  animalsByLocation(location).map((animal) => ({
    [animal.name]: animal.residents.map((item) => item.name),
  }));

const animalsByLocationNameSort = (location) =>
  animalsByLocation(location).map((animal) => ({
    [animal.name]: animal.residents.map((item) => item.name).sort(),
  }));

const animalsBySex2 = (location, sex) =>
  animalsByLocation(location).map((item) => ({
    [item.name]: item.residents
      .filter((animal) => animal.sex === sex)
      .map((item2) => item2.name),
  }));

const animalsBySexSort = (location, sex) =>
  animalsBySex2(location, sex).map((item) => ({
    [Object.keys(item)[0]]: item[Object.keys(item)].sort(),
  }));

const createOtherObject = (sex, sort) => {
  if (sort) {
    const newObj = {};
    species.map((specie) => {
      newObj[specie.location] = animalsByLocationNameSort(specie.location);
      return newObj;
    });
    return newObj;
  }
  if (sex) {
    const newObj = {};
    species.map((specie) => {
      newObj[specie.location] = animalsBySex2(specie.location, sex);
      return newObj;
    });
    return newObj;
  }
};

const otherObject = (sex, sort) => {
  if (sort && sex) {
    const newObj = {};
    species.map((specie) => {
      newObj[specie.location] = animalsBySexSort(specie.location, sex);
      return newObj;
    });
    return newObj;
  }
  return createOtherObject(sex, sort);
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return createObject(whichAnimalsByLocation);
  }
  const { sex, sorted } = options;
  if (sorted || sex) return otherObject(sex, sorted);
  return createObject(animalsByLocationName);
}

module.exports = getAnimalMap;
