/**
 * 비동기 작업 처리하기 - 콜백함수
 */

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// 콜백 지옥 -> 다음장에서 소개할 프로미스로 해결 예정
orderFood((food) => {
  console.log(`${food}가 도착했습니다.`);
  cooldownFood(food, (cooldownedFood) => {
    console.log(`${cooldownedFood}를 식혔습니다.`);
    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(`${freezedFood}를 냉동했습니다.`);
    });
  });
});

console.log("음식을 주문했습니다.");
