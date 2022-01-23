// 타입 넓히기
// 넓히기의 예시

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function getComponent(vector: Vector3D, axis: "x" | "y" | "z") {
  return vector[axis];
}

let x = "x";
let vec = { x: 10, y: 20, z: 30 };
getComponent(vec, x); // 에러 string타입은 'x' | 'y' | 'z' 타입에 할당할 수 없습니다.

// 실행은 되지만, 편집기는 에러를 발생시킨다.
// 변수 x는 'x' 타입을 string 타입으로 넓혀서 해석했기 때문이다.

// 넓히기를 제어하기 위한 방법
// 1. const 사용하기
// const x = 'x'   => 타입은 string이 아닌 'x'로 추론된다.
// 하지만 배열이나, 객체는 const로 커버하지 못한다.
// 객체에서 추론은 let처럼 작동한다.
// 타입 추론 강도를 직접 제어하려면 기본 동작을 재정의 해야한다.
const v: { x: 1 | 3 | 5 } = {
  x: 1,
}; // 타입이 {x: 1|3|5}

// 타입 체커에 추가적인 문맥을 제공하기
// const 단언문 사용하기
const v1 = {
  x: 1,
  y: 2,
}; // 타입은 { x: number, y: number }

const v2 = {
  x: 1 as const,
  y: 2,
}; // 타입은 { x: 1, y: number }

// 배열에서 const 단언문 사용
const a1 = [1, 2, 3]; // 타입은 number[]
const a2 = [1, 2, 3] as const; // readonly [1,2,3]
