/**
 * 동기와 비동기
 */

console.log(1);

setTimeout(() => {
  console.log("3초 후에 실행되는 코드"); // 가장 마지막에 실행됨
}, 3000);

console.log(2);
