"use strict";

let myTimer = null;
let sec = 0;
let min = 0;

myTimer = setInterval(function () {
  sec += 1;
  if (sec == 3) {
    min += 1;
    clearInterval(myTimer);
  }
  console.log(min, sec);
}, 1000);
