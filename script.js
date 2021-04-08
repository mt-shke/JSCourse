'use strict';

// const calcAge3 = birthYear => 2021 - birthYear;
// const myAge = calcAge3(1988);
// console.log(myAge);

// // chall

// const calcAverage = (a, b , c) => (a + b + c) / 3;
// const aveD = calcAverage(44, 23, 71);
// const aveK = calcAverage(65, 54, 49);
// console.log(aveD);
// console.log(aveK);

// const checkWinner = function (aveDolphins, aveKoalas) {
//    if (aveDolphins > aveKoalas * 2 ) {
//    console.log(`Dolphins win (${aveDolphins} vs. ${aveKoalas})`);
// } else if (aveKoalas > aveDolphins * 2) {
//     console.log(`Koalas win (${aveKoalas} vs. ${aveDolphins})`);
// } else {
// console.log(`None team win this match`);
// }
// }

// checkWinner(aveD, aveK);
// const aved2 = calcAverage(85, 54, 41);
// const avek2 = calcAverage(23, 34, 27);

// checkWinner(aved2, avek2);

// // challenge

// const calcTip = function (bill) { 
//     return bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
//     }

// // const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;


// const bil57 = calcTip(100);
// console.log(`With 100 = ${bil57}`);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);
// console.log(`This is the total ${total}`);


// const oreillettesGood = true;

// const casque = function (oreillettes) { 
//     return oreillettes >= 12 && oreillettesGood === true && oreillettes <= 23 ? console.log(`Vous avez ${oreillettes * 2} oreillettes vue le nombre de casques achetés.`): 
// console.log(`I fkin doesn't know what's happening here!!`);
// } 

// casque(98);

// const trainMyFunSkills = (billet, coin) => billet >= 0 || coin > 0 ? console.log(`C'est formidable, vous avez plus d'un centimes dans votre porte monnaire!!`): console.log(`This is the end.....`);

// trainMyFunSkills(54, 0);

// const clouds = false;
// const sky = 'sunny';
// const todayMeteo = (weather) => weather = true && clouds === true && sky === 'sunny' ? console.log('This is a nice sunny day!'):
// console.log('As always, just stay home and do nothing !!!!');

// todayMeteo(false);


// const callMeNoWay = function (myPhone) { return (myPhone + '48' + '6339') == '0612486339' ?
//  console.log(`Is this my real phone number?!!`) :
//  console.log(`Just kidding, I don't know who's phone is this`);
// }

// callMeNoWay('0612');


// const testNum = function(calcul, oper) { 
//     return calcul + oper == 18 && 65 === 75 - 10 && 'le pere noel existe ou pas' || 'this is true' === false ? console.log('Good'):
//     console.log('bad, really bad');
// }
// const tenNum = 10;
// testNum(tenNum, 8);

// const justAnotherUselessFunction = func => func + 134 == 234 ? console.log(`Great u r good at maths!! ${func} is the solution.`):
// console.log(`No way ${100 - func} left!`)

// justAnotherUselessFunction(18);

// const anotherFunc = (funk) => 829 - funk === 800 ? console.log(Great): console.log(BAAAD);
// const Great = 'GREATTT';
// const BAAAD = 'Ril Bad';

// anotherFunc(29);


// const letsAnotherWithBrac = function (pad) { return pad == 21 ? console.log('it is gone'): console.log('still there');
// }

// letsAnotherWithBrac(21);

// const iona = { 
//     firstName : 'Iona',
//     lastName : 'Anoi',
//     friends : ['Rhein', 'Ilka', 'Penelope'],
//     birthYear : 1998,
//     adult: true,
//     isAdult : function() { return (2021 - this.birthYear) >= 18 && this.adult === true ? 'grown person' : 'children';
//     },

//     job: 'adventurer',

//     realAge: function () { this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () { return `${this.firstName} ${this.lastName} has ${this.realAge()} years old, and can wander away like a ${this.adult ? 'really gran person.': "children which don't know where home is."}`   },

// };

// console.log(`${iona.firstName} has ${iona.friends.length} friends and her best friend is ${iona.friends[0]}.`);

// const askName = prompt('What are you doing here, do you know Iona? If yes then what is Anoi to her? If you are a liar I kick you!');
// console.log(iona[askName]);

// // challenge

// console.log(`${iona.firstName} is an ${iona.job}, has ${iona.realAge()} years old, and can wander away like a ${iona.isAdult()}`)

// console.log(iona.getSummary());

// // challenge

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMIMark : function () { this.bmi = this.mass / (this.height ** 2); 
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMIJohn : function () { this.bmi = this.mass / (this.height ** 2); 
//         return this.bmi;
// }
// }

// mark.calcBMIMark();
// john.calcBMIJohn();

// const bmiCompare = function () { mark.bmi > john.bmi ? console.log(`${mark.fullName}'s BMI (${mark.calcBMIMark()}) is higher than ${john.fullName}'s(${john.bmi}).`) :
// console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s(${mark.bmi}).`);
// }

// bmiCompare();

////////////////////////////////
//                                         LOOP
////////////////////////////////

for (let counter = 1; counter <= 18; counter++) {
    console.log(`Say hello ${counter} times`);
}

// for (let i = 1; i <= 30; i++) { i = 1 console.log(`still searching for it, ${i} time`):
// (i >= 2) console.log(`still searching for it, ${i} times`)
// (i = 30) console.log(`Gg got it!!`);
// }


const fruits = [12, 43, 23, 54];
const restMinusSixty = [];
for (let i = 0; i < fruits.length; i++) {
    restMinusSixty.push(60 - fruits[i]);
}

console.log(`Il reste tant de place ${restMinusSixty} dans le tableau restMinusSixty`);


const payMonth = [400, 200, 100, 700, 1000, 'bill', false, 42, 'arro', 98, 789];
const payWoTaxes = [];
const payTotal = [];

// 0, - 200 , - 500 , - 200, 400 ;

for (let i = 0; i < payMonth.length; i++) {
    payWoTaxes.push(payMonth[i] - 400);
}

console.log(payWoTaxes);

const calcPay = function(param) { 
let totals = 0;
for (let i = 0; i < payMonth.length; i++) {
totals = payMonth[i] + totals);
} param = totals / payMonth.length;
}

// AAAAAAAA FIINIR


////////////////////////////////
//// CONTINUE & BREAK

for (let i = 0; i < payMonth.length; i++) { 
    if ( typeof payMonth[i] !== 'number') continue; // continue find all number 
    console.log(payMonth[i]);         // if (=== 'number') continue find all except number                  
}

for (let i = 0; i < payMonth.length; i++) { 
    if ( typeof payMonth[i] === 'number') break;  // stop til find number
    console.log(payMonth[i]);
}


////////////////////////
////////////////    Looping Backward & loops in loops

for (let i = payMonth.length - 1; i >= 0; i--) { 
    if ( typeof payMonth[i] !== 'number') continue;
    console.log(i, payMonth[i]);
}

//////////////////////////////
// Loops in loops



for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Exercise ----- n° ${exercise}`);

    for (let push = 1; push < 6; push++) {
    console.log(`-----Exo ${exercise}--- Push  n° ${push}`);
}
}

/////////////
/////////////////  WHILE loop
////////////////
////////////////////////////////

for (let counter = 1; counter < 10; counter++) {
   // execut counter times ;
}
// THIS IS A FOR LOOP 


//////////////////////
let counter = 1;
while (counter < 10) {
   // execut ;
   counter++;
}
// THIS IS A WHILE LOOP

let dice = Math.trunc(Math.random() * 6) + 1;
while ( dice !== 6) {
    console.log(`Number ${dice} out!!`);
    dice = Math.trunc(Math.random() * 6 + 1);
if (dice === 6) (console.log(`${dice} is out! Game is ending now.`));
}

///// If know how many loops, use FOR LOOP, if don't know use WHILE LOOP



// 1. Create an array 'bills'containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips'and 'totals')
// 3. Use the 'calcTip'function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a forloop to perform the 10 calculations!Test 


// data:22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints:Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉Bonus:

// 4.Bonus:Write a function 'calcAverage'which takes an array called 'arr'as an argument. 
// This function calculates the average of all numbers in the given array. This is a difficultchallenge 
// (we haven't done this before)! Here is how to solve it:



// 4.1.First, you will need to add up all values in the array. To do the addition, 
// start by creating a variable 'sum'that starts at // 0. 
// Then loop over the array using a forloop. In each iteration, add the current value to the 'sum'variable. 
// This way, by the endof the loop, you have all values added together


// 4.2.To calculate the average, divide the sum you calculated before by the lengthof the array (because that's the number of elements)4.


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipsArr = [];
const totals = [];

const calcTip = (pourb) => (pourb >= 50 && pourb <= 300) ? pourb * 15 / 100: pourb * 20 / 100;

const calcTip2 = function(pourb) {
if (pourb >= 50 && pourb <= 300) { return pourb * 15 / 100;
} else { return pourb * 20 / 100; 
}
}

console.log(calcTip(100), calcTip2(100));

for ( let i = 0; i < bills.length ; i++) {
    tipsArr.push(calcTip(bills[i]));
}
console.log(`This is the bills paid 
${bills}`);
console.log(`This is the tips paid 
${tipsArr}`);

for (let i = 0; i < bills.length; i++) {
    totals.push(tipsArr[i] + bills[i]);
}

console.log(`And this is the totals paid 
${totals}!! Finally.`);

// 4.
const arr = [5, 10, 15];
const arr2 = [];




const calcAverage = function(param) {  
    let sum = 0; 
 for  ( let i = 0; i < param.length; i++) { 
  sum = param[i] + sum;
} return param = sum / param.length;
}

console.log(calcAverage(bills));

console.log(calcAverage(totals));
