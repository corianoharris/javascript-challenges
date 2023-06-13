/**
 * Find Longest Word Challenge
 */

const sentence =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let replacedWithSpaces = sentence.replace(/[^A-Za-z0-9]+/g, " ");
let wordsArray = sentence.trim().split(" ");

function getThelongestWord() {
  //sorting the length of words in the array from highest to lowest
  const orderedArray = wordsArray.sort((a, b) => b.length - a.length);

  //pick out the longest which would be the first item in the array with index 0
  const longestWord = orderedArray[0];
  console.log(longestWord);
  return longestWord;
}

const getLongestWordAnswer = () => {
  const result = document.querySelector("#longest-word-challenge-answer");
  const answer = getThelongestWord();
  result.textContent = `Answer: ${answer}`;
};

// ===================================

/**
 * Cornhole Challenge
 * valid points: 0, 1, 3
 * example score: [0, 3, 3, 1]
 */

const cornholeBagsTossScore = [3, 3, 3, 3];

const checkCornholeScore = () => {
  let validTossPoint;
  //sorting the length of words in the array from highest to lowest
  for (let i = 0; i < cornholeBagsTossScore.length; i++) {
    console.log(cornholeBagsTossScore[i]);
    if (cornholeBagsTossScore[i] - 3) {
      validTossPoint = true;
    } else if (cornholeBagsTossScore[i] - 1) {
      validTossPoint = true;
    } else if (cornholeBagsTossScore[i] - 0) {
      validTossPoint = true;
    } else validTossPoint = false;
  }
  return validTossPoint;
};

const isCornholeScoreValid = () => {
  const result = document.querySelector("#cornhole-challenge-answer");
  const answer = checkCornholeScore();
  result.textContent = `Answer: ${answer}`;
};

// ===================================
