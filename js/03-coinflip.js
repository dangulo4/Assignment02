// DECLARE VARIABLES
let coinFlip = Math.round(Math.random());
let choice = prompt("Enter 'h' for heads or 't' for tails").toLowerCase();

// CHECK COIN FLIP AND SET TO HEADS OR TAILS
if (coinFlip < 0.5) {
  coinFlip = 'heads';
} else if (coinFlip >= 0.5) {
  coinFlip = 'tails';
}

// CHECK RESULT FOR HEADS
if (choice === 'h') {
  if (coinFlip === 'heads') {
    alert(`The flip was heads and you chose heads... you win!`);
  } else if (coinFlip === 'tails') {
    alert(`The flip was tails and you chose heads... you lose!`);
  }
} else if (choice === 't') {
  if (coinFlip === 'heads') {
    alert(`The flip was heads and you chose tails... you lose!`);
  } else if (coinFlip === 'tails') {
    alert(`The flip was tails and you chose tails... you win!`);
  }
} else {
  alert('Invalid Choice, Play Again');
}

// TESTING PURPOSE ONLY
console.log(`Coinflip was: ${coinFlip}`);
