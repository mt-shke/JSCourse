"use strict";

let newPreQuestion, newQuestion, newSolution, inputAnswer, currScore, reset, initial;
let foundThemeInArray = "";

let questionMessage = document.querySelector(".question");
let solutionMessage = document.querySelector(".solutionComment");
let scoreMessage = document.querySelector(".score");
let leaderboard = document.querySelector(".leaderboard");
let startCountdown = document.querySelector(".timeLeft");
startCountdown.classList.remove("hidden");
let gameCountdown = document.querySelector(".timeLeftGame");

const presentation = document.querySelector(".presentation");
const gamerName = document.querySelector(".gamerName");
const btnSubmit = document.querySelector(".submit");
const btnStart = document.querySelector(".start");
const btnPass = document.querySelector(".pass");
const btnEscape = 0;

const inputWindow = document.querySelector(".answer");
const inputPlaceHolder = document.querySelector(".answer").placeHolder;
const form = document.querySelector(".form");
let backColor = document.querySelector("body").style.backgroundColor;

let playing = false;
let wrongAnswer = 0;
currScore = 0;
let highscore = currScore;

///////////////////////////////////////         ARRAYS
const geographyArray = [
  [["In geography"]],
  [
    ["What is the capital of this country:"][
      ("France", "Germany", "Turkey", "Netherlands", "Israel", "The United States of America", "Japan")
    ],
    ["Paris", "Berlin", "Istanbul", "Amsterdam", "Tel Aviv", "Washington", "Tokyo"],
  ],
  [
    ["What is the continent of this country:"],
    ["France", "Japan", "Mexico"],
    ["Europe", "Asia", "North America"],
  ],
  [
    ["What is the common spoken language of this country:"],
    ["France", "Japan", "Canada"],
    ["French", "Japanese", "English"],
  ],
];

// const modelArray = [
//   [[preQuestion], [question], [solution]],
//   [[preQuestion], [question], [solution]],
//   [[preQuestion], [question], [solution]],
//   [[preQuestion], [question], [solution]],
//   [[preQuestion], [question], [solution]],
//   [[preQuestion], [question], [solution]],
// ]

const learnArray = [
  [["In learn how to learn by Barbara Oackley"]],
  [["What is"], ["a chunk", ""], ["a piece of information"]],
  [
    ["What is the neuromodulator which is bound to"],
    ["focused attention and memory", "reward and motivation", "social life and life risk"],
    ["acetylcholine", "dopamine", "serotonin"],
  ],
  [
    ["What behavior can help you"],
    ["chunking", "recall", "understand and masterize hard stuff"],
    ["focused attention understanding practice", "space repetition", "deliberate practice"],
  ],
];

const javascriptArray = [
  [
    ["What does this means:"],
    ["DOM", "API", "AJAX", "JSON"],
    [
      "Document Object Model",
      "Application Programming Interface",
      "Asynchronous JavaScript XML",
      "JavaScript Object Notation",
    ],
  ],
  [
    ["What is the goal of "],
    [
      "split",
      "slice",
      "splice",
      "math.floor",
      "math.random",
      "click",
      "push",
      "pop",
      "shift",
      "unshift",
      "includes",
      "indexOf",
      "map",
      "sort",
      "filter",
      "join",
      "from",
      "reverse",
      "maths.abs",
      "e.preventDefault()",
      "e.stopPropagation()",
      ".appendChild",
      ".createElement",
      ".style.color",
      ".style.fontWeight",
      `addEventListener('change'`,
      `addEventListener('mousemove'`,
      `JSON.stringify()`,
      `JSON.parse()`,
      "e.offsetX",
      "e.clientY",
      "e.movementY",
    ],
    [
      "divides string",
      "returns shallow copy",
      "change content of the array by removing or replacing element",
      "returns enteger less than or equal to the given number",
      "returns random number",
      "add an event by clicking",
      "add element to the end of the array and returns the new length of the array",
      "removes last element of the array and returns that element",
      "removes first element of the array and returns that element",
      "add element to the start of the array and returns the new length of the array",
      "determines if the array includes a value and return boolean",
      "returns the index of the value",
      "create new array with the result of a function",
      "sort the elements of the array and returns the sorted array",
      "creates a new array with all the elements that pass the filter",
      "creates and returns a new string by concatenating all the elements",
      "creates a new, shallow-copied Array instance from an array-like or iterable object",
      "reverses an array",
      "returns absolute value",
      "disable default action",
      "prevents further propagation",
      "adds children to the specified parent",
      "creates HTML element specified by tagName",
      "changes font color",
      "changes font size",
      "sets up function depending on the target value",
      "sets up function depending on the mouse moves",
      "translate javascript to JSON",
      "translate JSON to javascript",
      `returns mouse's x axe movement in the element`,
      `returns mouse's y axe movement in the Global`,
      `returns mouse's y axe latest movement`,
    ],
  ],
  [
    ["What is the goal of "],
    [
      "e.preventDefault()",
      "e.stopPropagation()",
      ".appendChild",
      ".createElement",
      ".style.color",
      ".style.fontWeight",
      `addEventListener('change'`,
      `addEventListener('mousemove'`,
      `JSON.stringify()`,
      `JSON.parse()`,
      "e.offsetX",
      "e.clientY",
      "e.movementY",
      "match",
      "trim",
      "padEnd",
      "padStart",
      "startsWith",
      "endsWith",
      "replace",
      "replaceAll",
      "repeat",
    ],
    [
      "disable default action",
      "prevents further propagation",
      "adds children to the specified parent",
      "creates HTML element specified by tagName",
      "changes font color",
      "changes font size",
      "sets up function depending on the target value",
      "sets up function depending on the mouse moves",
      "translate javascript to JSON",
      "translate JSON to javascript",
      `returns mouse's x axe movement in the element`,
      `returns mouse's y axe movement in the Global`,
      `returns mouse's y axe latest movement`,
      "retrieves result of matching a string against a regular expression",
      "removes white spaces from both ends of a string",
      "fit the end of a string",
      "fit the start of a string",
      "determine if a string end with the specified character",
      "determine if a string begins with the specified character",
      "replace a string matching a pattern by a new string",
      "replace all string matching a pattern by new strings",
      "returns copies of a string",
    ],
  ],
];

const course = presentation.classList.remove("hidden");
presentation.innerHTML = "Welcome<br/>Enter your name and press Start";
gamerName.classList.remove("hidden");

// const newQuestionArray =

////////////////////////////////// FUNCTIONS HIDE TEXT AT START
const inGame = function () {
  presentation.classList.add("hidden");
  gamerName.classList.add("hidden");
  btnPass.classList.remove("hidden");
  btnSubmit.classList.remove("hidden");
  inputWindow.classList.remove("hidden");
  questionMessage.classList.remove("hidden");
  gameCountdown.classList.remove("hidden");
  playing = true;
  if (currScore >= 1) {
    scoreMessage.classList.remove("hidden");
    scoreMessage = `${currScore} !`;
  }
};

const gameOver = function () {
  if (highscore <= currScore) {
    highscore = currScore;
  }
  leaderboard.textContent = `LEADERBOARD
1st : ${gamerName.value}'s record = ${highscore} `;
  btnPass.classList.add("hidden");
  btnSubmit.classList.add("hidden");
  btnStart.classList.remove("hidden");
  inputWindow.classList.add("hidden");
  questionMessage.classList.add("hidden");
  gameCountdown.classList.add("hidden");
  scoreMessage.classList.add("hidden");
  currScore = 0;
  leaderboard.classList.remove("hidden");
  playing = false;
};

//////////////////////////////////// STRING & TO LOWER CASE FUNCTION
const strTLC = function (param) {
  const str = String(param);
  return str.toLocaleLowerCase();
};

///////////////////////////////// RESET FUNCTION : RESET QUESTION & ORIGINAL COLOR
const resetQuest = function () {
  findQuestion(javascriptArray);
  wrongAnswer = 0;
  questionMessage.textContent = newQuestion;
  currScore >= 1
    ? (scoreMessage.classList.remove("hidden"), (scoreMessage.textContent = `${currScore} !`))
    : scoreMessage.classList.add("hidden");
};

///////////////////////////////////  FUNCTION GENERATE RANDOM QUESTION
const findQuestion = function (qArray) {
  playing = true;
  inputWindow.value = "";
  newQuestion = 0;
  solutionMessage.classList.add("hidden");

  const questPosition = qArray[Math.floor(Math.random() * qArray.length)];
  const foundThemeInArray = qArray[Math.floor(Math.random() * qArray.length)];
  console.log(typeof foundThemeInArray, foundThemeInArray, foundThemeInArray.length);

  // foundThemeInArray == qArray[[0]];

  let questionInArray = foundThemeInArray[1][Math.floor(Math.random() * foundThemeInArray[1].length)];
  console.log(typeof questionInArray, questionInArray);

  let questionIndex = foundThemeInArray[1].indexOf(questionInArray); //
  console.log(typeof questionIndex, questionIndex);

  let question = questionInArray;
  let qPosition = foundThemeInArray[1].indexOf(questionInArray);
  return (
    (newPreQuestion = qArray[foundThemeInArray.length[0]]),
    (newQuestion = `${foundThemeInArray[0]} ${questionInArray}?`),
    (newSolution = strTLC(foundThemeInArray[2][qPosition])),
    console.log("nquest & nsolu", question, qPosition, newQuestion, newSolution)
  );
};
//////////////////////////// WINLOOSE FUNCTION - CHECK IF ANSWER IS RIGHT + CONSEQUENCES
const winLoose = function () {
  inputAnswer = String(document.querySelector(".answer").value);
  if (strTLC(inputAnswer) == strTLC(newSolution) && playing) {
    currScore += 1;
    resetQuest();
  } else if (strTLC(inputAnswer) != strTLC(newSolution) && playing) {
    inputWindow.value = "";
    solutionMessage.classList.remove("hidden");
    solutionMessage.textContent = `${inputAnswer} is a wrong answer!`;
    wrongAnswer += 1;
    if (wrongAnswer >= 4) {
      solutionMessage.textContent = `Correct answer is ${newSolution}`;
    }
  } else if (strTLC(inputAnswer) != strTLC(newSolution) && strTLC(newSolution) == undefined && playing) {
    solutionMessage.classList.remove("hidden");
    solutionMessage.textContent = `Wrong answer!`;
    inputWindow.value = "";
    wrongAnswer += 1;
    if (wrongAnswer >= 4) {
      solutionMessage.textContent = `Correct answer is ${newSolution}`;
    }
  }
  console.log(currScore, inputAnswer);
};

///////////////////////////////// ADD ENTER KEY FUNCTION ON INPUT WINDOW
inputWindow.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    winLoose();
  }
});

////////////////////////////////  BUTTON  SUBMIT  /////

btnSubmit.addEventListener("click", function () {
  winLoose();
});

/////////////////////////////////  BUTTON START & PASS & ESCAPE(PASS)

btnStart.addEventListener("click", function () {
  timerStart();
  startCountdown.classList.remove("hidden");
  btnStart.classList.add("hidden");
  leaderboard.classList.add("hidden");
});

btnPass.addEventListener("click", function () {
  resetQuest();
});

addEventListener("keydown", function (e) {
  if (e.key == "Escape" || (e.key == "Control" && playing == true)) {
    resetQuest();
  }
});

////////////////////////////////// COUNTDOWN TIMER

let countdownTimerStart, countdownTimerGame;
const timerStart = function () {
  let x = 0;
  function demo() {
    startCountdown.textContent = x--;
    if (x == -1) {
      startCountdown.innerHTML = "GOOO !";
      timerGame();
    }
    if (x == -2) {
      startCountdown.classList.add("hidden");
      startCountdown.innerHTML = "Ready ?";
      inGame();
      resetQuest();
      clearInterval(countdownTimerStart);
    }
  }
  countdownTimerStart = setInterval(demo, 1000);
};

const timerGame = function () {
  let x = 145;
  function demo() {
    gameCountdown.textContent = x--;
    if (x == -1) {
      gameCountdown.innerHTML = "GAME OVER";
      playing = false;
    }

    if (x == -2) {
      gameCountdown.classList.add("hidden");
      gameCountdown.innerHTML = "30";
    }
    if (x == -6) {
      gameOver();
      clearInterval(countdownTimerGame);
    }
  }
  countdownTimerGame = setInterval(demo, 1000);
  console.log(highscore);
};

const resume = javascriptArray.values();

for (let id of resume) {
  // for (let id2 of id) {
  for (let [preq, quest, sol] of id) console.log(`${preq} ${quest} ${sol}`);
  // for (let [preq, quest, sol] of id2) console.log(`${preq} ${quest} ${sol}`);
}
