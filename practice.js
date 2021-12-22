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

// const reverse = (str) => {
//   return str.split("").reduce((reversed, char) => {
//     return char + reversed;
//   }, "");
// };

// console.log(reverse("hello!"));

// const numbers = [1, -1, 2, 3];

// let sum = 0;

// for (let n of numbers) {
//   sum += n;
// }

// const sum = numbers.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);
// console.log(sum);

// const numbers = [1, -1, 2, 3];
// acc =0, cur=1 --> acc:1
// acc =1, cur= -1 -> acc:0
// acc =0, cur= 2 --> acc: 2
// acc =2, cur= 3 --> acc: 5

// console.log(Math.floor(Math.random() * 3));

// const input = 8;
// const controlVal = input / 2 + 3;

// const multiplier = (number, phase) => {
//   const val = number * controlVal + phase;
//   console.log(val);
// };

// 2/11 STUDIES

// Higher Order Functions
// A higher order function is a function that does at least one of the following
//  ** Takes one or more functions as an argument (parameter)
//  ** Returns a function as the result

// forEach
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((num) => {
//   console.log(num);
// });

// const filteredNum = arr.filter((num) => {
//   return num === 5;
// });

// const strEndsWith = (str, ending) => {
//   const strArr = str.split("");
//   // console.log(strArr);
//   const endingsArr = ending.split("");
//   console.log(endingsArr.length - 1);
//   let counter = 0;
//   // ni
//   for (let i = endingsArr.length - 1; i >= 0; i--) {
//     // console.log(endingsArr[i]);
//     // console.log(strArr[strArr.length - 1]);
//     if (endingsArr[i] === strArr[strArr.length - 1]) {
//       if (endingsArr[i - 1] === start[strArr.length - 2]) {
//         console.log("hi");
//         counter += 1;
//       }
//     } else {
//       counter -= 1;
//     }
//   }
//   return counter > 1 ? true : false;
// };

// console.log(strEndsWith("yujin", "in"));

// function solution(str, ending) {
//   if (ending.length == 0) return true;
//   return str.substr(-ending.length) == ending;
// }

// const strEndsWith = (str, ending) => {
//   const strArr = str.split("");
//   // console.log(strArr);
//   const endingsArr = ending.split("");

//   return strArr.slice(-endingsArr.length).join("") === ending;
// };

// const solution = (str, ending) => {
//   const strArr = str.split("");

//   const endingsArr = ending.split("");

//   let counter = 0;
//   if (ending.length === 0) return true;

//   for (let i = 0; i < endingsArr.length; ++i) {
//     //     This represents the starting point of the ending characters (e.g. second to last char here)
//     console.log(strArr[strArr.length - (endingsArr.length - i)]);

//     console.log(endingsArr[i]);
//     if (endingsArr[i] === strArr[strArr.length - (endingsArr.length - i)]) {
//       // endingsArr[0] ===strArr[5-(2-0)]-> strArr[3]
//       // strArr['y','u','j','i','n']
//       counter += 1;
//     } else {
//       return false;
//     }
//     console.log(counter);
//   }
//   return (counter = endingsArr.length ? true : false);
// };
