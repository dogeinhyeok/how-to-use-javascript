/**
 * 자료형
 * -> 데이터의 종류
 * -> 자료형은 집합으로 구분
 * -> 자료형은 원시 자료형과 객체 자료형으로 구분
 * -> 원시 자료형: 기본적인 데이터 타입
 * -> 객체 자료형: 복합적인 데이터 타입
 * -> 객체 자료형은 이후에 배우게 될 것
 */

/**
 숫자형 자료형
 */
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

console.log(inf);
console.log(mInf);

console.log(nan);
console.log(1 * "hello"); // 불가능한 연산 결과는 NaN

/**
 * 문자열 자료형
 */
let myName = "John";
let myLocation = "목동";
let introduce = myName + myLocation;

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;

console.log(introduce);
console.log(introduceText);

/**
 * 불리언 자료형
 */
let isSwitchOn = true;
let isEmpty = false;

/**
 * Null Type
 */
let empty = null;

/**
 * Undefined Type
 */
let none;
console.log(none);
