/**
 * 6가지의 요소 조작 메서드
 */

// 배열 요소 추가(push)
// -> 배열의 마지막에 요소를 추가
let arr = [1, 2, 3];
const newLength = arr.push(4, 5); // 길이 반환
console.log(newLength, arr); // 5, [1, 2, 3, 4, 5]

// 배열 요소 삭제(pop)
// -> 배열의 마지막 요소를 삭제
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); // 삭제된 요소 반환
console.log(poppedItem, arr2); // 3, [1, 2]

// 배열 요소 삭제(shift)
// -> 배열의 첫번째 요소를 삭제
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift(); // 삭제된 요소 반환
console.log(shiftedItem, arr3); // 1, [2, 3]

// 배열 요소 삽입(unshift)
// -> 배열의 첫번째 위치에 요소를 삽입
let arr4 = [1, 2, 3];
const unshiftedItem = arr4.unshift(0); // 길이 반환
console.log(unshiftedItem, arr4); // 4, [0, 1, 2, 3]

// 배열 요소 삭제(slice)
// -> 배열의 일부를 추출
let arr5 = [1, 2, 3, 4, 5];
const slicedArr = arr5.slice(2, 5);
console.log(slicedArr, arr5); // [3, 4, 5], [1, 2, 3, 4, 5]

// 배열 요소 합치기(concat)
// -> 배열을 합치기
let arr6 = [1, 2];
let arr7 = [3, 4];
const concatArr = arr6.concat(arr7);
console.log(concatArr, arr6); // [1, 2, 3, 4], [1, 2]
