/**
 * 형 변환
 * -> 데이터의 타입을 변환하는 것
 * -> 명시적 형 변환과 암시적 형 변환이 있음
 * -> 명시적 형 변환: 명시적으로 형 변환을 하는 것
 * -> 암시적 형 변환: 자동으로 형 변환을 하는 것
 */

/**
 * 암시적 형 변환
 * -> 자바스크립트 엔진이 자동으로 형 변환을 하는 것
 */

let num = 10;
let str = "20";

const result = num + str;

console.log(result);

/**
 * 명시적 형 변환
 * -> 프로그래머가 명시적으로 형 변환을 하는 것
 */

// 문자열을 숫자로 변환
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(10 + strToNum2);

// 숫자를 문자열로 변환
let num1 = 10;
let numToStr1 = String(num1);
console.log(10 + numToStr1 + "입니다.");
