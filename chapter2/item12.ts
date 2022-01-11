// 함수 표현식에 타입 적용하기
// 타입스크립트에서는 함수 표현식을 이용하는 것이 좋다.

type DiceRollFn = (slides: number) => number;
// slides 변수가 number 타입으로 지정되어 있다.
const rollDice: DiceRollFn = (slides) => {
  return 0;
};

// 함수 타입 선언은 중복을 줄일 수 있다.
function add(a: number, b: number) {
  return a + b;
}
function sub(a: number, b: number) {
  return a - b;
}
function mul(a: number, b: number) {
  return a * b;
}
function div(a: number, b: number) {
  return a / b;
}
// a, b에 대한 number 타입 선언이 중복되었다.

// 함수 타입 선언 한번으로 중복을 줄일 수 있다.
type BinaryFn = (a: number, b: number) => number;
const addFn: BinaryFn = (a, b) => a + b;
const subFn: BinaryFn = (a, b) => a - b;
const mulFn: BinaryFn = (a, b) => a * b;
const divFn: BinaryFn = (a, b) => a / b;

// 시그니처가 일치하는 다른 함수가 있을 때도 함수 표현식에 타입을 적용할 수 있다.
// fetch의 상태를 체크해줄 함수를 작성해보자
async function checkedFetch(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw Error("Request Failed: " + response.status);
  }
  return response;
}

const checkedFunc: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw Error("Request Failed: " + response.status);
  }
  return response;
};

// 함수의 매개변수에 타입 선언을 하는 것보다 함수 표현식 전체 타입을 정의하는 것이 코드가 간결하다.
// 동일한 타입의 시그니처를 가지는 여러 개의 함수를 작성할 떄 하나의 통합 타입을 설정하는 것이 좋다.
