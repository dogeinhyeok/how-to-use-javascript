/**
 * 상수 객체
 * -> 객체를 상수로 선언하면 객체의 프로퍼티를 변경할 수 없음
 */

const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "냥냥이"; // 수정
delete animal.color; // 삭제

console.log(animal);

/**
 * 메세드
 * -> 값이 함수인 프로퍼티를 말함
 */

const person = {
  name: "홍길동",
  sayHi() {
    console.log("안녕하세요!");
  },
};

person.sayHi(); // 안녕하세요!
person["sayHi"](); // 안녕하세요!
