/**
 * 객체(Object)
 */

// 객체 생성
let obj1 = new Object();
let obj2 = {};

// 객체 프로퍼티
let person = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

// 객체 프로퍼티 접근 방법
console.log(person.name); // 홍길동
console.log(person.age); // 27
console.log(person.hobby); // 테니스

console.log(person["name"]); // 홍길동
console.log(person["age"]); // 27
console.log(person["hobby"]); // 테니스

// 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";
console.log(person.job); // fe developer
console.log(person["favoriteFood"]); // 떡볶이

// 프로퍼티의 존재 유무를 확인하는 방법
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1); // true
console.log(result2); // false
