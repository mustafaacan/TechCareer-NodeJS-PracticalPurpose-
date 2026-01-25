"use strict";

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;

console.log(`The current test date is ${formattedDate}`);

// from terminal --> cd <path> than node nodejs or use nodemon (added to scripts)
console.log("Hello World");

const arr = [1, 2, 3, 4];
console.log(Array.isArray(arr));

// checks if each items higher than 0
function check(item) {
  return item > 0;
}
console.log(arr.every(check));
