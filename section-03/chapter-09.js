/**
 * 5가지 배열 변형 메서드
 */

// 배열 요소 필터링(filter)
// -> 배열에서 콜백 함수를 만족하는 요소를 반환
let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 배열 요소 변형(map)
// -> 배열의 각 요소에 대해 주어진 함수를 실행하고 새로운 배열을 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 배열 요소 정렬(sort)
// -> 배열의 요소를 정렬
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 순서 변경 없음
    return 0;
  }
});
console.log(arr3);
arr3.sort((a, b) => a - b);
console.log(arr3);

// 배열 요소 축소(toSorted)
// -> 배열을 정렬하고 새로운 배열을 반환
let arr4 = ["c", "a", "b"];
const sorted = arr4.toSorted();
console.log(arr4, sorted);

// 배열 요소 결합(join)
// -> 배열의 요소를 문자열로 결합
let arr5 = ["hi", "im", "winterlood"];
const joined = arr5.join("-");
console.log(joined);
