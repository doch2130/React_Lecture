// 전개 연산자, 스프레드 연산자
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

// 객체에서 사용
const person = {
  name: 'Max',
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

// Rest
// filter 함수
const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));
