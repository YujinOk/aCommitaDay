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
function solve(n) {
  let str = n + "",
    a = "9".repeat(str.length - 1) * 1,
    b = n - a;
  return ("" + a + b).split("").reduce((c, d) => +c + +d);
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
  let diagonal1 = 0,
    diagonal2 = 0;

  // Looping through the array and summing the diagonals.
  for (let i = 0; i < length; i++) {
    // Calculating the primary diagonal.
    diagonal1 += matrix[i][i];
    // Reversing the second dimension of array to calculate secondary diagonal.
    diagonal2 += matrix[length - 1 - i][i];
  }
  // return absolute difference value.
  return Math.abs(diagonal1 - diagonal2);
}

// 9/12 Codewars
function solve(a, b) {
  // 1. find prime numbers for b
  // 2. put them into array
  // 3. loop through the numbers in the array to check if a is divisible by these numbers
  // 4. if it is ? true: false
}

// 14/12 Tuesday
function isPangram(string) {
  // split input by character
  //   check if they are used only once per alphabet
  //    if so, return true, otherwise false
  const stringArr = string.toLowerCase().split("");
  //   console.log(stringArr);

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  //   console.log(alphabet);

  for (let i = 0; i < alphabet.length; i++) {
    if (stringArr.indexOf(alphabet[i]) === -1) {
      //   console.log("hi");
      //   console.log(`StringArr ${stringArr}`);
      //   console.log(`Alphabet ${alphabet[i]}`);
      return false;
    }
  }
  return true;
}

console.log(isPangram("This is not a pangram."));
console.log(isPangram("The quick brown fox jumps over the lazy dog."));

// Simple Fun #206: Factorial Digits

// Isograms
function isIsogram(str) {
  const aStrObj = buildMap(str);

  const count = Object.values(aStrObj);
  console.log(count);

  for (let i = 0; i < count.length; i++) {
    if (count[i] > 1) {
      return false;
    }
  }
  return true;
}

const buildMap = (str) => {
  let charMap = {};
  for (char of str.toLowerCase().split("")) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

function isIsogram(str) {
  const splitArr = str.split("");

  let emptyArr = [];

  for (let i = 0; i < splitArr.length; i++) {
    if (emptyArr.includes(splitArr[i])) {
      return false;
    }
    emptyArr.push(splitArr[i]);
  }
  return true;
}
isIsogram("words");
isIsogram("flatten");

// 14/12
function factorial(n) {
  // 0 != 1, 1 != 1;

  if (n > 0 && n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// 15/12
function factDigits(n) {
  //   let numArr=[]
  // //   if(n===1)return 1;

  //   for(let i=1; i<= n; i++){
  //     numArr.push(i)
  //     console.log(i)
  //   }
  //   console.log(numArr)
  //   const x=``* numArr.reduce((a,b)=>{
  //      return a*b;

  //   },0);

  //   const factorial= x.length;
  //   return Number(factorial);

  // 0 != 1, 1 != 1;

  if (n > 0 && n <= 1) {
    return 1;
  } else {
    return n * factDigits(n - 1);
  }
}

// 16/12 Meeting
const meeting = (s) =>
  s
    .toUpperCase() // can harmlessly uppercase the whole thing
    .split(";") // split into array of people
    .map((person) => {
      // turn each into an object of matching first / last names
      const [first, last] = person.split(":");
      return { first, last };
    })
    .sort(
      (
        a,
        b // ugh, but
      ) =>
        a.last === b.last
          ? a.first === b.first
            ? 0
            : a.first > b.first
            ? 1
            : -1
          : a.last > b.last
          ? 1
          : -1
    )
    .map((p) => `(${p.last}, ${p.first})`) // turn each back into a string
    .join(""); // and stick them back together :)

// SOLUTION 2
function meeting(s) {
  let string = s
    .toUpperCase()
    .split(";")
    .map((x) => x.split(":").reverse().join(", "))
    .sort()
    .join(")(");
  return "(" + string + ")";
}

// 19/12 Beginner Series #1 Shool Paperwork
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

function paperwork(n, m) {
  if (m < 0 || n < 0) {
    return 0;
  }
  return m * n;
}

// Wacky one
const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);

// mine;;
function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m;
  } else if (n <= 0 || m <= 0) {
    return 0;
  }
}

// 20/12
const prime_factors = (n) => {
  const factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i == 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
};

