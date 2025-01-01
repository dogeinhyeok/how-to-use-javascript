/**
 * 스코프(Scope)
 * -> 변수의 유효 범위
 * -> 전역 스코프, 지역 스코프
 * -> 전역 스코프: 전체 영역에서 접근 가능
 * -> 지역 스코프: 함수 내부에서 접근 가능
 */

/**
 * 전역 스코프
 */
let globalVar = 10;

/**
 * 지역 스코프
 */
function funcA() {
  let localVar = 20;
  console.log(localVar);
}
funcA(); // 20
console.log(globalVar); // 10

/**
 * 함수 스코프 특징
 * -> 함수 내부에 선언된 함수는 함수 스코프를 가짐
 * -> if 블럭, for 블럭에서 선언된 함수는 함수 스코프를 가지지 않음
 */

function funB() {
  function innerFunc() {} // 함수 내부에 선언된 함수는 함수 스코프를 가짐
}

if (true) {
  function funcC() {
    console.log("funcC");
  } // if 블럭에서는 함수가 지역 스코프를 가지지 않음
}

for (let i = 0; i < 10; i++) {
  function funcD() {
    console.log("funcD");
  } // for 블럭에서는 함수가 지역 스코프를 가지지 않음
}

funcC(); // 호출 가능
funcD(); // 호출 가능
