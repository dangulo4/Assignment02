//Lager Or Smaller
//Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

// DECLARE TWO VARIABLES
let num1 = parseInt(prompt('Enter the first number: '));
let num2 = parseInt(prompt('Enter the first number: '));

// DISPLAY HEADER
document.write(`<h1>Larger Or Smaller</h1>`);
console.log('Larger Or Smaller');

// CHECK IF NUMBER ARE EQUAL
if (num1 == num2) {
  alert('Numbers cannot be equal, Please try again!');
  document.write(`<h3>Numbers are the same and cannot be evaluated!</h3>`);
  console.log('Numbers are the same and cannot be evaluated');
} else if (num1 > num2) {
  document.write(`<h2>Number 1 has a larger value of: ${num1}</h2>`);
  console.log(`Number 1 has a larger value of: ${num1}`);
} else {
  document.write(`<h2>Number 2 has a larger value of: ${num2}</h2>`);
  console.log(`Number 1 has a larger value of: ${num2}`);
}
