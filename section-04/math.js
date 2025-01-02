// math 모듈

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// ESM 모듈 시스템 사용
export { add, subtract, multiply, divide };

// 디폴트 모듈 사용
export default function defaultFunction(a, b) {
  return console.log(a, b);
}
