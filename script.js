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

// 2/11 HACKERRANK Flipping bits
function flippingBits(n) {
  // let y = n.toString(2).padStart(32, "0");
  // let result = "";
  // for (const char of y) {
  //     result += char == "0" ? "1" : "0"; // invert bits
  // }
  // return parseInt(result, 2);
  // Write your code here
  // conver (n) -> binary 32 bits
  const binary = n.toString(2);
  let binaryNum = binary;

  for (let i = 0; i < 32 - binary.length; i++) {
    binaryNum = "0" + binaryNum;
  }

  let binarythiryTwo = binaryNum;
  console.log(binarythiryTwo);

  const flipNum = Array.from(binarythiryTwo)
    .map((num) => {
      if (num === "0") {
        return "1";
      }
      return "0";
    })
    .join("");
  console.log(flipNum);
  // flip the binary 32 bit
  const convertNum = parseInt(flipNum, 2);

  // read as base 10
  return convertNum;
}

// 6/12 Monday Codewars Simple sum of pairs
function solve(n){
  let str = n + '',
      a = '9'.repeat(str.length - 1)*1,
      b = n - a
  return ('' + a + b).split('').reduce((c, d) => +c + +d)

}

// Define the Problem
// Come up with Solutions
// Do Your Research but Don’t Reinvent the Wheel
// Think About and Choose a Solution
// Take Action
// Hit Singles
// Respect Your Time

// 7/12 HackerRank Diagonal Difference 
function diagonalDifference(matrix) {
  // length of input matrix.
   const length = matrix.length;
   let diagonal1 = 0, diagonal2 = 0;
 
   // Looping through the array and summing the diagonals.
   for(let i = 0; i < length; i++){
     // Calculating the primary diagonal.
       diagonal1 += matrix[i][i];
     // Reversing the second dimension of array to calculate secondary diagonal.
       diagonal2 += matrix[length -1 - i][i]
   }
   // return absolute difference value.
   return Math.abs(diagonal1 - diagonal2);  

}
