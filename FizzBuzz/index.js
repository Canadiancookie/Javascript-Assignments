const testNumber = 3;
const testNumber2 = 5;
const testNumber3 = 6;
const testNumber4 = 10;
const testNumber5 = 15;
const testNumber6 = 'one';
const testNumber7 = 7;

console.log('3 is ' + fizzBuzz(testNumber));
console.log('5 is ' + fizzBuzz(testNumber2));
console.log('6 is ' + fizzBuzz(testNumber3));
console.log('10 is ' + fizzBuzz(testNumber4));
console.log('15 is ' + fizzBuzz(testNumber5));
console.log('one is ' + fizzBuzz(testNumber6));
console.log(fizzBuzz(testNumber7));

function fizzBuzz (input) {
  if ((input % 3 === 0 ) && (input % 5 === 0)) return 'FizzBuzz';
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return 'Buzz';
  if (typeof input !=='number') return 'NaN';
  return input + " is not Fizz or Buzz";
}
