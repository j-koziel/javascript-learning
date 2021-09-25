/**
 * Linking a Javascript file
 */

let js = "amazing";
console.log(40 + 8 + 23 - 10);

/**
 * Values and Variables
 */

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.145;

let myFirstJob = "Coder"; // }These are better.
let myCurrentJob = "Teacher"; // } These are better.

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Lecture Assignment

let country = "Poland";
let continent = "Europe";
let polandPopulation = 37970000;

console.log(country, continent, polandPopulation);

/**
 * Data Types
 */
/*
- Value - Object or Primitive value


7 Primitive data types - Number, String, Boolean, Undefined, Null, Symbol and BigInt

- Number: Floating point numbers - Used for decimals and integers.
- Strings: Simply a sequence of characters (Used for text)
- Boolean: Logical type that can only be true or false. (Used for taking decisions)
- Undefined: Value taken by a variable that is not yet defined('empty value')
- Null: Also means 'empty value'
- Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]
- BigInt (ES2020): Larger integers than the Number type can hold
*/

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

/**
 * let, const and var
 */

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtman";
console.log(lastName);

// Lecture Assignment

const languageSpoken = "English";
languageSpoken = "Polish";
console.log(languageSpoken);

/**
 * Basic Operators
 */

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Shmedtmam";
console.log(firstName + " " + lastName);

// Assongment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// Lecture Assingment

console.log(polandPopulation / 2);
polandPopulation++;
console.log(polandPopulation);

const finlandPopulation = 6000000;

console.log(polandPopulation > finlandPopulation);

const averagePopulation = 33000000;

console.log(polandPopulation < averagePopulation);

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

/**
 * Operator Precedence
 */

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

/**
 * Coding Challenge #1
 */

// TEST DATA 1: MARK WEIGHT = 78KG MARK HEIGHT = 1.69M JOHN WEIGHT = 92KG JOHN HEIGHT = 1.95M

// TEST DATA 2: MARK WEIGHT = 95KG MARK HEIGHT = 1.88M JOHN WEIGHT = 85KG JOHN HEIGHT = 1.76M

// TEST DATA 1

let massJohn, heightJohn, massMark, heightMark, bmiJohn, bmiMark;

massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

// TEST DATA 2

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

/**
 * Strings and Template Literals
 */

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + "years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

/**
 * Taking Decisions: if / else statements
 */

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

/**
 * Coding Challenge #2
 */

// TEST DATA 1

let massJohn, heightJohn, massMark, heightMark, bmiJohn, bmiMark;

massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}

// TEST DATA 2

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}

/**
 * Type Conversion and Coercion
 */

// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

/**
 * Truthy and Falsy Values
 */

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height >= 0) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

/**
 * Equality Operator: == vs ===
 */

const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

/**
 * Boolean Logic
 */

// AND operator: &&  This is true when ALL are true.
// OR operator: ||   This is true when one is true.
// NOT operator:     Inverts true/false value.

/**
 * Logical Operators
 */

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

/**
 * Coding Challenge #4
 */

// TEST DATA: Dolphins score: 96, 108 and 89. Koalas score: 88, 91 and 110

const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (89 + 108 + 96) / 3;

console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas) {
  console.log(`The Dolphins win with an average score of ${avgDolphins}.`);
} else if (avgKoalas > avgDolphins) {
  console.log(`The Koalas win with an average score of ${avgKoalas}.`);
} else {
  console.log(`It's a draw!!! It was an intense game though.`);
}

// BONUS TEST DATA 1: Dolphins: 97, 112, 101. Koalas: 109, 125, 123.

const avgDolphins1 = (92 + 105 + 100) / 3;
const avgKoalas1 = (109 + 125 + 123) / 3;

console.log(avgDolphins1, avgKoalas1);

if (avgDolphins1 >= 100 && avgDolphins1 > avgKoalas1) {
  console.log(`The Dolphins win with an average score of ${avgDolphins1}.`);
} else if (avgKoalas1 >= 100 && avgKoalas1 > avgDolphins1) {
  console.log(`The Koalas win with an average score of ${avgKoalas1}.`);
} else {
  console.log(`It's a draw!!! It was an intense game though.`);
}

// BONUS TEST DATA 2: Dolphins: 97, 112, 102. Koalas: 109, 95, 106.

const avgDolphins2 = (100 + 100 + 100) / 3;
const avgKoalas2 = (100 + 100 + 100) / 3;

console.log(avgDolphins, avgKoalas);

if (avgDolphins2 >= 100 && avgDolphins2 > avgKoalas2) {
  console.log(`The Dolphins win with an average score of ${avgDolphins2}.`);
} else if (avgKoalas2 >= 100 && avgKoalas2 > avgDolphins2) {
  console.log(`The Koalas win with an average score of ${avgKoalas2}.`);
} else if (
  avgDolphins2 >= 100 &&
  avgKoalas2 >= 100 &&
  avgDolphins2 === avgKoalas2
) {
  console.log(`It's a draw!!! It was an intense game though.`);
} else {
  console.log(`No team had won. A truce has been called.`);
}

/**
 * The switch Statement
 */

const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

/**
 * Statements and Expressions
 */

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);

/**
 * The Conditional (Ternary) Operator
 */

const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

/**
 * Coding Challenge #4
 */

// TEST DATA: Bill values - 275, 40 and 430

const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the final bill was ${
    bill + tip
  }`
);

// END
