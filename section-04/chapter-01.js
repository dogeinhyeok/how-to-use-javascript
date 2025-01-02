/**
 * Node.js 모듈 시스템
 * -> 모듈: 재사용 가능한 코드 블록
 * -> 모듈 시스템: 모듈을 관리하는 시스템
 */

// 모듈 가져오기
import defaultFunction, { add, subtract, multiply, divide } from "./math.js";

// 모듈 사용
console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));

// 디폴트 모듈 사용
defaultFunction(1, 2);
