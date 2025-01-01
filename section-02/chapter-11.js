/**
 * 콜백 함수(Callback Function)
 * -> 함수의 매개변수로 전달되는 함수
 */

// 메인 함수 선언
function main(value) {
  value(); // sub 출력, 콜백 함수 호출
}

// 콜백 함수 선언
function innerFunc() {
  console.log("sub");
}

// 메인 함수 호출
main(innerFunc);

/**
 * 콜백 함수 사용 예시
 */

function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat(5, (i) => console.log(`${i} * 1 = ${i * 1}`));
repeat(5, (i) => console.log(`${i} * 2 = ${i * 2}`));
repeat(5, (i) => console.log(`${i} * 3 = ${i * 3}`));
