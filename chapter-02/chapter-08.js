/**
 * 반복문
 * -> 코드를 반복적으로 실행하는 기능
 */

for (let i = 0; i < 10; i++) {
  // 짝수일 때 반복문을 빠져나감
  if (i % 2 === 0) {
    continue;
  }
  // 5보다 크면 반복문을 빠져나감
  if (i > 5) {
    break;
  }
  console.log(`for문 ${i}번째 반복!`);
}

// while문은 조건이 거짓이면 실행되지 않음
let num = 0;
while (num < 5) {
  console.log(`while문 ${num}번째 반복!`);
  num++;
}

// do-while문은 조건이 거짓이어도 최소 1번은 실행됨
num = 10;
do {
  console.log("do-while문은 조건이 거짓이어도 1번 실행됨");
  num++;
} while (num < 5);
