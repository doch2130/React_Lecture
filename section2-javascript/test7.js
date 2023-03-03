// Exercise: Array Methods
// 코드 작성해보기
// Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.
// For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].

// 답1
function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  const resultNumbers = [];
  numberArray.map((num) => {
    // console.log('num', num);
    // console.log('resultNumbers', resultNumbers);
    return resultNumbers.push({ val: num });
    // return { val: num };
  });
  return resultNumbers;
}
const numberArray = [1, 2, 3];
const resultNumbers = transformToObjects(numberArray);
console.log(resultNumbers);

// 답2
function transformToObjects2(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  numberArray.map((num, index) => {
    return (numberArray[index] = { val: num });
  });
  return numberArray;
}

const numbers = [1, 2, 3];
const result = transformToObjects2(numbers);
console.log(result);
