/**
 * 객체 타입
 * -> 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다
 */

let o1 = { name: "이정환" };
let o2 = o1; // 참조값 복사
let o3 = { ...o1 }; // 객체 복사

// 얕은 비교
console.log(o1 === o2); // true -> 참조값이 같기 때문
console.log(o1 === o3); // false -> 참조값이 다르기 때문

// 깊은 비교
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true -> 객체의 속성값이 같기 때문
