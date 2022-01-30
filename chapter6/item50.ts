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

// 다른 방법은 여러 가지 타입 선언으로 분리하기이다.

function doubleFor(x: number): number;
function doubleFor(x: string): string;
function doubleFor(x: any) {
  return x + x;
}

// 하나씩 순차적으로 검색하여 해당 함수의 타입을 검사한다. 그래서 마지막 string 타입의 반환값으로 할당된다.

// 여기서 부족한 부분을 채우기 위해 조건부 타입을 이용하는 것이 좋다.

function double2<T extends string | number>(
  x: T
): T extends string ? string : number;
function double2(x: any) {
  return x + x;
}

// 오버로딩 타입보다 조건부 타입을 사용하는 것이 좋다.
