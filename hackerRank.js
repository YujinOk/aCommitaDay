// 30/12 Permuting Two Arrays
function twoArrays(k, A, B) {
  // Write your code here
  let newArrA = A.sort((a, b) => a - b);
  let newArrB = B.sort((a, b) => a - b).reverse();
  console.log(newArrA, newArrB);

  for (let i = 0; i < newArrA.length; i++) {
    if (newArrA[i] + newArrB[i] >= k) {
    } else {
      return "NO";
    }
  }
  return "YES";
  // sort each arrays from high to lowest, vice versa
  //  then flip one array to be the opposite
  // loop through each items in the array and compare with k
}
