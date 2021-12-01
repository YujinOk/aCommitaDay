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
