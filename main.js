console.log("from mod");

export function testFunc() {
  return 777;
}

// ================================ capitalize ================================ //

export function capitalize(str) {
  //if nothing input
  if (!str) return "";
  if (typeof str !== "string") return "Error: need input string";
  //else
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// ================================ reverseString ================================ //

export function reverseString(str, index = str ? str.length - 1 : undefined) {
  //if nothing input
  if (!str) return "";
  //if not string input
  if (typeof str !== "string") return "Error: need input string";
  //base
  if (index === 0) return str[0];
  //else
  return str[index] + reverseString(str, index - 1);
}

// ================================ calculator ================================ //

export const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  divide: (x, y) => {
    if (y === 0) return undefined;
    return x / y;
  },
  multiply: (x, y) => x * y,
};

// ================================ caesarCipher ================================ //

const alphaArr = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

export function caesarCipher(str, key = 0) {
  //if key not number
  if (typeof key !== "number") return "Error: key must be number";
  //if nothing input
  if (!str) return "";
  //if not string input
  if (typeof str !== "string") return "Error: need input string";

  const cipherArr = [];
  const strArr = str.split("");

  //cipherize
  strArr.forEach((char) => cipherArr.push(getCipherLetter(char, key)));

  return cipherArr.join("");
}

function findCharIndex(char) {
  for (let i = 0; i <= 25; i++) {
    // if (alphaArr[i] === char) return i;
    if (alphaArr[i] === char) {
      return i;
    }
  }
}

function convertShift(char, key) {
  const letterIndex = findCharIndex(char);
  const shift = letterIndex + key;
  const convertedShift = shift % 26;
  return convertedShift;
}

function getCipherLetter(char, key) {
  //handle non-alpha char
  if (!alphaArr.includes(char.toUpperCase())) return char;

  const newIndex = convertShift(char.toUpperCase(), key);
  const cipherLetter = alphaArr[newIndex];

  if (char.toLowerCase() === char) return cipherLetter.toLowerCase();
  else return cipherLetter;
}

// ================================ analyzeArray ================================ //

export function analyzeArray(arr) {
  //length
  const length = arr.length;

  //average
  let sum = 0;
  arr.forEach((num) => (sum += num));
  const average = sum / length;

  //min
  let min = arr[0];
  arr.forEach((num) => {
    if (num < min) min = num;
  });

  //max
  let max = arr[0];
  arr.forEach((num) => {
    if (num > max) max = num;
  });

  return {
    average,
    min,
    max,
    length,
  };
}
