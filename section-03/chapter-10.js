/**
 * Date 객체를 생성하는 방법
 * -> 현재시간 생성, 문자열 생성
 */

let date1 = new Date(); // 현재시간 생성
let date2 = new Date("2025/01/01/12:00:00"); // 문자열 생성
console.log(date1);
console.log(date2);

/**
 * 타임 스탬프
 * -> 1970년 1월 1일 00:00:00 UTC 이후 경과한 밀리초
 */
let timestamp = date1.getTime();
let date4 = new Date(timestamp);
console.log(timestamp);
console.log(date4);

/**
 * 시간 요소들을 추출하는 방법
 */
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 0 ~ 11
let date = date1.getDate();

let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hours, minutes, seconds);

let day = date1.getDay(); // 0 ~ 6
console.log(day);

let day2 = date1.toLocaleDateString("ko-KR", { weekday: "long" });
console.log(day2);

/**
 * 시간 수정하기
 */
date1.setFullYear(2025);
date1.setMonth(11);
date1.setDate(31);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
console.log(date1);

/**
 * 시간을 여러 포맷으로 출력하기
 */
console.log(date1.toDateString());
console.log(date1.toLocaleString());
