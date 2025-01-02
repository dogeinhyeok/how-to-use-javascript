/**
 * 비동기 작업 처리하기 - 프로미스2
 */

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num == "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise; // 프로미스 객체 반환
}

// 프로미스 체이닝
// -> 프로미스 객체를 연결하여 여러 개의 비동기 작업을 순차적으로 처리하는 방법
add10(0)
  .then((result) => {
    console.log(`1번째 프로미스 결과 출력: ${result}`);
    return add10(result);
  })
  .then((result) => {
    console.log(`2번째 프로미스 결과 출력: ${result}`);
    return add10(result);
  })
  .then((result) => {
    console.log(`3번째 프로미스 결과 출력: ${result}`);
  })
  .catch((error) => {
    console.log(`에러 출력: ${error}`);
  });
