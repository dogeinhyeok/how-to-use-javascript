/**
 * 함수 표현식과 화살표 함수
 */

// 함수 선언
let varA = function funcA() {
  console.log("funcA");
};
console.log(varA); // [Function: funcA]
varA(); // funcA

// 함수 표현식
let varB = () => {
  console.log("funcB");
};
console.log(varB); // [Function: funcB]
varB(); // funcB

// 화살표 함수
let varC = (value) => {
  value += 1;
  return console.log(`${value} 출력`);
};
varC(2); // 3 출력
