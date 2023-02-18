// DECLARE VARIABLES
let score = parseInt(prompt('Enter score between 1 and 100'));

document.write('<h1>The "Grade Assigner" Appliation</h1>');
switch (true) {
  case score >= 90 && score <= 100:
    document.write('You received and A');
    break;
  case score >= 80 && score < 90:
    document.write('You received and B');
    break;
  case score >= 70 && score < 80:
    document.write('You received and C');
    break;
  case score >= 60 && score < 70:
    document.write('You received and D');
    break;
  case score < 60:
    document.write('You received and F');
    break;
  default:
    document.write('This is score is invalid');
}
// TESTING PURPOSE
console.log(score);
