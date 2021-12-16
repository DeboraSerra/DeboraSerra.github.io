// Desafio 1
function compareTrue(boolean1, boolean2) {
  let result = false;
  if (boolean1 && boolean2) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let newArray = string.split(' ');
  return newArray;
}

// Desafio 4
function concatName(array) {
  let newString = '';
  newString = array[array.length - 1] + ', ' + array[0];
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = 0;
  score += (wins * 3) + ties;
  return score;
}

// Desafio 6
function highestCount(array) {
  let numbersCount = {};
  let biggestNumber = array[0];
  for (let index of array) {
    if (!numbersCount[index]) {
      numbersCount[index] = 1;
    } else {
      numbersCount[index] += 1;
    }
    if (index > biggestNumber) {
      biggestNumber = index;
    }
  }
  return numbersCount[biggestNumber];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = 0;
  if (cat1 > mouse) {
    distanceCat1 = cat1 - mouse;
  } else {
    distanceCat1 = mouse - cat1;
  }
  let distanceCat2 = 0;
  if (cat2 > mouse) {
    distanceCat2 = cat2 - mouse;
  } else {
    distanceCat2 = mouse - cat2;
  }
  if (distanceCat1 < distanceCat2) {
    return "cat1"
  } else if (distanceCat1 > distanceCat2) {
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  const newArray = [];
  for (let index of numbers) {
    if (index % 3 === 0 && index % 5 !== 0) {
      newArray.push('fizz');
    } else if (index % 3 !== 0 && index % 5 === 0) {
      newArray.push('buzz');
    } else if (index % 3 === 0 && index % 5 === 0) {
      newArray.push('fizzBuzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1){
    if (string[i] === 'a') {
      newString += 1;
    } else if (string[i] === 'e') {
      newString += 2;
    } else if (string[i] === 'i') {
      newString += 3;
    } else if (string[i] === 'o') {
      newString += 4;
    } else if (string[i] === 'u') {
      newString += 5;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
function decode(newString) {
  let string = '';
  for (let i = 0; i < newString.length; i += 1) {
    if (newString[i] == 1) {
      string += 'a';
    } else if (newString[i] == 2) {
      string += 'e';
    } else if (newString[i] == 3) {
      string += 'i';
    } else if (newString[i] == 4) {
      string += 'o';
    } else if (newString[i] == 5) {
      string += 'u';
    } else {
      string += newString[i];
    }
  }
  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
