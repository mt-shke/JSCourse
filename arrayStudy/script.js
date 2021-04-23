"use strict";

const str = "Hey fellow warriors";

const str1 = str.split(" ");
const [str2] = str;
const [...str3] = str;

console.log("str", str);
console.log("");
console.log("str1", str1, "str1[1]", str1[1]);
console.log("[str2]", str2);
console.log("[...str3]", str3);

console.log("");
console.log("");

const array = ["hel", "felll", "summ"];

const arr1 = array;
const [arr2] = array;

console.log("array", array);
console.log("");
console.log("arr1", arr1);
console.log("[arr2]", arr2);
