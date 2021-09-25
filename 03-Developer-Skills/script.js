// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/**
 * Prettier and VS Code
 */

// const x = '23';

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));

/**
 * Using Google, StackOverflow and MDN
 */
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/**
 * Debugging with the console and breakpoints
 */
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// Using a Debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBug);
*/

/**
 * Coding Challenge #1
 */
/*
const tempArray1 = [17, 21, 23];
const tempArray2 = [12, 5, -5, -5, 0, 4];

// My Solution (Not exactly correct)
// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`... ${arr[i]} degrees in ${i + 1} days.`);
//   }
// };

// Jonas' Solution
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]} C in ${i + 1} days `;
  }
  console.log(str);
};

printForecast(tempArray1);
printForecast(tempArray2);
*/
