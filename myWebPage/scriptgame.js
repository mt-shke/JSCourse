"use strict";

let solution = "rightSolution";

document.querySelector(".question").textContent = "question?";

document.querySelector(".submit").addEventListener("click", function () {
  let inputAnswer = String.toLowerCase(document.querySelector(".answer").value);
  console.log(inputAnswer, typeof inputAnswer);
});

if (inputAnswer === solution) {
  document.querySelector(".solutionComment").textContent =
    "Oh Yeah! You knew this!!!";
  document.querySelector(".body").style.backgroundColor = rgb(44, 122, 146);
} else if (inputAnswer !== solution) {
  document.querySelector(".solutionComment").textContent =
    "Try again, and again!!!";
}

// score rightAnswer question record
document.querySelector(".rightAnswer").textContent = solution;

document.querySelector(".solutionComment").textContent = "Try again and again!";
