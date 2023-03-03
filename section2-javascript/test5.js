// 객체 및 배열 복사하는 방법

const number = 1;
const num2 = number;

console.log(num2);

const person = {
  name: 'Max',
};
const secondPerson = person;

const thirdPerson = {
  ...person,
};

// 객체는 주소를 저장하는데 secondPerson이 주소를 가져온 것이기 떄문에
// person에서 데이터를 변경하면 secondPerson의 이름도 동일하게 변경된다.
person.name = 'Manu';

console.log(secondPerson);

console.log(thirdPerson);
