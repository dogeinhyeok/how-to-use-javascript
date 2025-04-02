/**
 * null 병합 연산자
 * -> 존재하는 값을 추려내는 기능
 * -> null, undefined가 아닌 값을 찾아내는 연산자
 */

let userName;
const userNameDefault = "기본값";

let displayName = userName ?? userNameDefault;

console.log(displayName); // 기본값

userName = "홍길동";
displayName = userName ?? userNameDefault;

console.log(displayName); // 홍길동

/**
 * typeof 연산자
 * -> 값의 타입을 문자열로 반환하는 기능
 */
let type1 = typeof 1; // number
let type2 = typeof "1"; // string
let type3 = typeof true; // boolean
let type4 = typeof null; // object
let type5 = typeof undefined; // undefined

console.log(type1, type2, type3, type4, type5);

/**
 * 삼항 연산자
 * -> 조건에 따라 값을 선택하는 기능
 */

// 변수 res에 var8의 값이 짝수인가?
let var8 = 10;
let res = var8 % 2 ? "짝수" : "홀수";
console.log(res);
