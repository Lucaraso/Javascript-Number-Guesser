let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:

// Might need to return target if there are errors
const generateTarget = () => {
  target = Math.floor(Math.random() * 10);
  return target;
};

const compareGuesses = (userGuess, computerGuess, target) => {
  const compDiff = Math.abs(computerGuess - target);
  const userDiff = Math.abs(userGuess - target);
  if (compDiff < userDiff) {
    return false;
  } else if (compDiff > userDiff) {
    return true;
  } else if (compDiff === userDiff) {
    return true;
  }
};

const updateScore = (winner) => {
  switch (winner) {
    case "human":
      humanScore += 1;
      break;
    case "computer":
      computerScore += 1;
      break;
    default:
      break;
  }
};

const advanceRound = () => {
    currentRoundNumber += 1;
}



