"use strict";

// function spinWords(string) {
//   const str = string.split(" ");
//   const str2 = [];

//   for (let eac of str) {
//     if (eac.length >= 5) {
//       let rev = [...eac].reverse().join("");
//       eac = rev;
//       console.log(eac);
//     }

//     str2.push(eac);
//   }
//   return str2.join(" ");
// }

console.log(spinWords("Hey fellow warriors"));

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
