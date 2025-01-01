/**
 * 배열
 * -> 여러 개의 값을 순서대로 저장하는 자료구조
 */
let arrA = new Array();
let arrB = [];
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

console.log(arrC);

// 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello";
arrC[1] = "world";

// item1, item2는 변경되지 않음
console.log(item1); // 1
console.log(item2); // 2

// arrC[0], arrC[1]은 변경됨
console.log(arrC[0]); // hello
console.log(arrC[1]); // world
