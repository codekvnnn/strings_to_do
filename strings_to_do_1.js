// 1) Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

function extractDigitsAndConvertToInt(inputString) {
  let digitsOnly = '';
  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString.charAt(i);
    if (!isNaN(Number(currentChar))) {
      digitsOnly += currentChar;
    }
  }
  return Number(digitsOnly);
}

// Example usage:
const input = 'a1b2c3';
const result = extractDigitsAndConvertToInt(input);
console.log(result); // Output: 123

// 2) Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

function generateAcronym(inputString) {
  const words = inputString.split(' ');
  let acronym = '';

  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i].charAt(0).toUpperCase();
    acronym += firstLetter;
  }

  return acronym;
}

// Example usage:
const input = 'world wide web';
const acronym = generateAcronym(input);
console.log(acronym); // Output: 'WWW'

// 3) Create a function that, given a string, returns the number of non-space characters found in the string. 

function countNonSpaceCharacters(inputString) {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== ' ') {
      count++;
    }
  }
  return count;
}

// Example usage:
const input = 'Hello, world!';
const result = countNonSpaceCharacters(input);
console.log(result); // Output: 12 

// 4) Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

function filterStringsByLength(arr, minLength) {
  return arr.filter((str) => str.length >= minLength);
}

// Example usage:
const inputArray = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const minLength = 5;
const resultArray = filterStringsByLength(inputArray, minLength);
console.log(resultArray); // Output: ['apple', 'banana', 'orange']
