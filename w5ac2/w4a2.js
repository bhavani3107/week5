//Exercise 1: Calculating the Sum of Numbers in an Array
let sum = 0;
const numbers = [65, 44, 12, 4];

function addNumberToSum(item) {
  sum += item;
}

numbers.forEach(addNumberToSum);

console.log("Sum of numbers:", sum);

//Exercise 2: Logging Each Element of an Array
const fruits = ["apple", "orange", "cherry"];

function logFruit(fruit) {
  console.log(fruit);
}

fruits.forEach(logFruit);

//Exercise 3: Logging Each Element of an Array with an Anonymous Function
const array1 = ['a', 'b', 'c'];

array1.forEach(function (element) {
  console.log(element);
});

//Exercise 4: Adding 10 to Each Element of an Array
const number = [1, 2, 3, 4, 5];

numbers.forEach(function (num, index, arr) {
  arr[index] = num + 10;
});

console.log(numbers);

//Exercise 5: Reversing Strings in an Array
const strings = ["program", "world", "javascript"];

strings.forEach(function (str, index, arr) {
  arr[index] = str.split('').reverse().join('');
});

console.log(strings);

//Exercise 6: Filtering Out Odd Numbers from an Array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = [];

numbers.forEach(function (num) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});

console.log(evenNumbers);

//Exercise 7: Converting Celsius to Fahrenheit
const celsiusTemperatures = [0, 10, 20, 30, 40];

celsiusTemperatures.forEach(function (celsius, index, arr) {
  arr[index] = (celsius * 9/5) + 32;
});

console.log(celsiusTemperatures);

//Exercise 8: Capitalizing Each Element of an Array
const words = ["apple", "banana", "cherry"];

words.forEach(function (word, index, arr) {
  arr[index] = word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(words);