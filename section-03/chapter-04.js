/**
 * Spread 연산자와 Rest 매개변수
 */

// Spread 연산자
// -> 배열이나 객체를 펼쳐서 각각의 요소로 분리
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(`a=${p1}, b=${p2}, c=${p3}`);
}
funcA(1, 2, 3);

// Rest 매개변수
// -> 함수의 매개변수를 통해 전달된 인수들을 배열로 받아서 사용
function funcB(...rest) {
  console.log(rest);
}
funcB(...arr2);
