/**
 * 연산자
 */

/**
 * 대입 연산자
 */
let vae1 = 10;

/**
 * 산술 연산자
 */
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = (1 + 2) * 10;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

/**
 * 복합 대입 연산자
 */
let num7 = 10;
num7 += 20; // 30
num7 -= 20; // 10
num7 *= 20; // 200
num7 /= 20; // 10
num7 %= 20; // 10

console.log(num7);

/**
 * 증감 연산자
 */
let num8 = 10;
console.log(num8++); // 10
console.log(num8); // 11
console.log(++num8); // 12

/**
 * 논리 연산자
 */
let or = true || false; // true
let and = true && false; // false
let not = !true; // false

console.log(or, and, not);

/**
 * 비교 연산자
 */
let comp1 = 1 === 2; // false
let comp2 = 1 !== 2; // true
let comp3 = 1 > 2; // false
let comp4 = 1 < 2; // true
let comp5 = 1 >= 2; // false
let comp6 = 1 <= 2; // true

console.log(comp1, comp2, comp3, comp4, comp5, comp6);
