/**
 * 5가지 요소 순회 및 탐색 메서드
 */

// 배열 요소 순회(forEach)
// -> 배열의 각 요소에 대해 주어진 함수를 실행
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(`arr1[${idx}]: ${item * 2}`);
});

// 배열 요소 탐색(includes)
// -> 배열에 특정 요소가 포함되어 있는지 확인
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(3); // true
console.log(isIncludes);

// 배열 요소 탐색(indexOf)
// -> 배열에서 같은 요소의 인덱스를 반환
let arr3 = [1, 2, 3];
let indexOf = arr3.indexOf(2); // 1
console.log(indexOf);

// 배열 요소 탐색(findIndex)
// -> 배열에서 조건에 만족하는 요소의 인덱스를 반환
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  return item % 2 === 0; // 짝수인 경우 true
}); // 1
console.log(findedIndex);

// 배열 요소 탐색(find)
// -> 배열에서 콜백 함수를 만족하는 요소를 반환
let arr5 = [{ name: "이정환" }, { name: "홍길동" }, { name: "김철수" }];
const finded = arr5.find((item) => item.name === "홍길동");
console.log(finded);
