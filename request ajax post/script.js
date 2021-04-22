"use strict";

let value = document.getElementById("value").value;
let button = document.querySelector("#form > input");
const result = document.getElementById("result");

const request = new XMLHttpRequest();

const send = function () {
  request.onreadystatechange = function () {
    if (this.readyState == this.DONE && this.status == 200) {
      console.log("ok this running");
      let response = JSON.parse(this.responseText);
      console.log(response);
      result.innerHTML = response.postData.text;
      console.log(response.postData.text);
    }
  };
  request.open("POST", "https://mockbin.com/request");
  request.setRequestHeader("Content-Type", "application/json");

  let val = document.getElementById("value").value;
  request.send(JSON.stringify(val));
};

button.addEventListener("click", function (e) {
  send();
  e.preventDefault();
});

//// PB OF SCOPE????
