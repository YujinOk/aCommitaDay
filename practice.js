// const capitalise = (str) => {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// };

// create 'result' string which is the first character of the input string capitalised
// for each character in teh string
// IF the character to teh left a space -> Capitalise it and add it to 'result'
// ELSE add it to 'result'

const reverse = (str) => {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
};

console.log(reverse("hello!"));

const numbers = [1, -1, 2, 3];

// let sum = 0;

// for (let n of numbers) {
//   sum += n;
// }

const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sum);

// const numbers = [1, -1, 2, 3];
// acc =0, cur=1 --> acc:1
// acc =1, cur= -1 -> acc:0
// acc =0, cur= 2 --> acc: 2
// acc =2, cur= 3 --> acc: 5

// console.log(Math.floor(Math.random() * 3));

const input = 8;
const controlVal = input / 2 + 3;

const multiplier = (number, phase) => {
  const val = number * controlVal + phase;
  console.log(val);
};

// 2/11 STUDIES

// Higher Order Functions
// A higher order function is a function that does at least one of the following
//  ** Takes one or more functions as an argument (parameter)
//  ** Returns a function as the result

// forEach
const arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
  console.log(num);
});

const filteredNum = arr.filter((num) => {
  return num === 5;
});
