/**
 * 비동기 작업 처리하기 - 프로미스
 */

// 프로미스 객체 생성
// -> 비동기 작업을 처리하는 객체
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      // 성공
      resolve(num + 10);
    } else {
      // 실패
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});

// then() 메서드
// -> 비동기 작업이 성공했을 때 실행되는 함수
promise.then((result) => {
  console.log(`작업 성공시 결과 출력: ${result}`);
});

// catch() 메서드
// -> 비동기 작업이 실패했을 때 실행되는 함수
promise.catch((error) => {
  console.log(`작업 실패시 결과 출력: ${error}`);
});

// finally() 메서드
// -> 비동기 작업이 성공했든 실패했든 실행되는 함수
promise.finally(() => {
  console.log("성공했든 실패했든 실행되는 함수");
});
