// 1.
function cube(x) {
    return x * x * x;
  }
  
  // 2.
  function fullName(first, last) {
    return first + " " + last;
  }
  
  // 3.
  function power(base, exp) {
    if (exp === 0) {
      return 1;
    }
    return base * power(base, exp - 1);
  }
  
  // 4.
  function sumCubes(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + cube(numbers[i]);
    }
    return total;
  }
  
  module.exports = {
    cube,
    fullName,
    power,
    sumCubes,
  };

  const customFunctions = require('./custom-functions');

console.log(customFunctions.cube(3)); // Test the cube function
console.log(customFunctions.fullName('John', 'Doe')); // Test the fullName function
console.log(customFunctions.power(2, 3)); // Test the power function
console.log(customFunctions.sumCubes([1, 2, 3])); // Test the sumCubes function