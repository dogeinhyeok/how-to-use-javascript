/**
 * 구조 분해 할당
 */

let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

console.log(one, two, three, four);

/**
 * 객체의 구조 분해 할당
 */
let person = {
  personName: "이정환",
  age: 27,
  hobby: "테니스",
};

let { age: myAge, hobby, personName, extra = "hello" } = person;

console.log(personName, myAge, hobby, extra);

/**
 * 객체 구조 분해 할당을 이요해서 함수의 매개변수를 받는 방법
 */
const func = ({ personName, age, hobby, extra = "hello" }) => {
  console.log(personName, age, hobby, extra);
};

func(person);
