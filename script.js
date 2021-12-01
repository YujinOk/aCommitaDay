"use strict";
// 1/12
// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalise = (str) => {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
    console.log(word[1]);
  }
  return words.join(" ");
};
console.log(capitalise("a short sentence"));

// make an empty array 'word
// split the input string by spaces to get an array
// for each word in the array ->uppercase the first letter of the word, join the first letter with rest of the string, push the result into 'words' array
// join 'words' into a string and return it

// 1. My solution
// looping backwards, remember* the conditional part!
function reverse(str) {
  const splitArr = str.split("");

  let newArr = [];

  for (let i = splitArr.length - 1; i >= 0; --i) {
    newArr.push(splitArr[i]);
  }
  return newArr.join("");
}

console.log(reverse("!hello"));

// 2.
const reverse = (str) => {
  return (arr = str.split("").reverse().join(""));
};

// 3.
// Create an empty string called 'reversed'
// for each character in the provided string -take the char and add it to the start of 'reversed'
// return the variable 'reversed'

const reverse = (str) => {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
    console.log(reversed);
  }
  return reversed;
};
console.log(reverse("hello!"));

// 4.
const reverse = (str) => {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
};
