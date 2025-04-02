/**
 * 단락 평가
 * -> 조건문에서 조건이 참인 경우 다음 조건을 평가하지 않는 것
 */

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// 조건이 참인 경우 다음 조건을 평가하지 않음
console.log(returnFalse() && returnTrue());
// 조건이 거짓인 경우 다음 조건을 평가함
console.log(returnTrue() && returnFalse());

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "John" });
