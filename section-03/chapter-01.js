/**
 * Truthy와 Falsy
 * -> 조건문에서 참과 거짓을 판단하는 기준
 */

/**
 * Falsy한 값
 * -> 조건문에서 거짓으로 판단되는 값
 */
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f4) {
  console.log("falsy");
}

/**
 * Truthy한 값
 * -> 조건문에서 참으로 판단되는 값
 */
let t1 = "hello"; // 빈 문자열이 아닌 문자열
let t2 = 123; // 0이 아닌 숫자
let t3 = []; // 빈 배열
let t4 = {}; // 빈 객체
let t5 = () => {}; // 빈 함수

if (t5) {
  console.log("truthy");
}

// 활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);

person = { name: "John" };
printName(person);
