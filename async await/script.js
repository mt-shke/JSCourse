"use strict";

const text = document.getElementById("result");

async function getNumber1() {
  return 10;
}

async function getNumber2() {
  return 4;
}

async function compute() {
  const value1 = await getNumber1();
  const value2 = await getNumber2();
  return (text.textContent = value1 + value2);
}

compute();
