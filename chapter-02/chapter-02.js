/**
 * 변수
 * -> 변수는 재할당이 가능한 값
 */

let age = 27;
console.log(age);

age = 30;
console.log(age);

/**
 * 상수
 * -> 변수와 비슷하지만 재할당이 불가능한 변수
 */

const birth = "1997-11-02";
console.log(birth);

/**
 * 변수 명명규칙
 * -> 변수 이름은 문자, 숫자, 언더스코어(_), 달러($)로 구성
 * -> 변수 이름은 숫자로 시작할 수 없음
 * -> 예약어는 사용할 수 없음
 * -> 변수는 어떤 의미를 나타내는 것이 좋음
 */

let $_name = "John";
let name1 = "John";
let $2name = "John";

// let 2name = "John"; // 숫자로 시작할 수 없음
// let class = "John"; // 예약어는 사용할 수 없음

// 변수는 어떤 의미를 나타내는 것이 좋음
let salesCount = 10;
let refundCount = 10;
let totalCount = salesCount + refundCount;

console.log(totalCount);
