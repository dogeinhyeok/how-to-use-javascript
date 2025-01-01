/**
 * 함수
 * -> 코드를 재사용하는 기능
 */

// 함수선언
function greeting() {
  console.log("안녕하세요!");
}

// 함수호출
greeting();

// 매개변수가 포함된 함수 선언
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  return width * height;
}

// 매개변수가 포함된 함수 호출
console.log(getArea(10, 20));
