/**
 * 비동기 작업 처리하기 - Async/Await
 * -> 함수를 비동기 함수로 만들어주는 키워드
 * -> 함수가 프로미스를 반환하도록 변환해주는 키워드
 */

// async 함수
// -> 비동기 작업을 처리하는 함수
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

// await 키워드
// -> 비동기 작업을 기다리는 키워드
// -> async 함수 내부에서만 사용 가능

async function printData() {
  const data = await getData(); // 데이터를 가져오는 비동기 작업을 기다림
  console.log(data); // 비동기 작업이 완료되면 출력
}

printData();
