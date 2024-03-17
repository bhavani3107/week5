//Exercise 1: Filtering Ages to Find Adults
const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

const adults = ages.filter(checkAdult);
console.log("Adults:", adults);

//Exercise 2: Filtering Words with Length Greater Than 6
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const longWords = words.filter(function (word) {
  return word.length > 6;
});

console.log("Long words:", longWords);

//Exercise 3: Filtering Numbers Greater Than or Equal to 10
function isBigEnough(value) {
  return value >= 10;
}

const filteredNumbers = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Filtered numbers:", filteredNumbers);

//Exercise 4: Filtering Even Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);

//Exercise 5: Filtering Palindromes
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

const word = ['level', 'hello', 'radar', 'world', 'racecar'];

const palindromes = word.filter(isPalindrome);
console.log("Palindromes:", palindromes);