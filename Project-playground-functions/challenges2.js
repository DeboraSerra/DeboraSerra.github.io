// Desafio 10
function techList(array, name) {
  const orderedArray = array.sort()
  let newArray = [];
  let obj = {};
  for (let i = 0; i < orderedArray.length; i += 1){
    obj['tech'] = orderedArray[i];
    obj['name'] = name;
    newArray.push(obj);
    obj = {};
  }
  if (newArray.length === 0) {
    return 'Vazio!'
  } else {
    return newArray;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }

  let obj = {};
  for (let i = 0; i < array.length; i += 1) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]] += 1;
    }
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let key in obj) {
    if (obj[key] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let phoneNumber = 
    '(' +
    array[0] +
    array[1] +
    ') ' +
    array[2] +
    array[3] +
    array[4] +
    array[5] +
    array[6] +
    '-' +
    array[7] +
    array[8] +
    array[9] +
    array[10];
  
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (((lineA + lineB > lineC) && (Math.abs(lineA - lineB) < lineC)) ||
    ((lineA + lineC > lineB) && (Math.abs(lineA - lineC) < lineB)) ||
    ((lineC + lineB > lineA) && (Math.abs(lineC - lineB) < lineA))) {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate(string) {
  let array = string.split(' ');
  let waterCups = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (parseInt(array[i]) == array[i]) {
      waterCups += parseInt(array[i]);
    }
  }
  if (waterCups > 1) {
    return `${waterCups} copos de água`;
  } else {
    return `${waterCups} copo de água`;
  }
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
