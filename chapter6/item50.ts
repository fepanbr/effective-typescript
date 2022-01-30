//오버로딩 타입보다는 조건부 타입 사용하기

// double함수의 매개변수로는 string | number가 들어올 수 있고 반환값은 string | number일 수 있다.
// function double(x) {
//   return x + x;
// }

function double(x: number | string): string | number;
function double(x: any) {
  return x + x;
}

// 하지만 아래와 같이 어떤 값을 넣어도 타입은 string | number이다.
// 이는 모호하다.
const num = double(12); // string | number
const str = double("x"); // string | number

// 제네릭을 사용하면 이러한 동작을 모델링 할 수 있다.
function doubleByGeneric<T extends number | string>(x: T): T;
function doubleByGeneric(x: any) {
  return x + x;
}

// 하지만 이 경우는 너무 구체적이다.
// 'x'를 매개변수로 넘길 경우 'xx'가 나오는데, string을 넘기면 string이 나와야 합니다.
