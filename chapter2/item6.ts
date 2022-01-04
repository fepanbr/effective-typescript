// 에디터 차원에서 타입을 추론해준다. 마우스를 올려두면 추론된 타입을 확인할 수 있다.
let num = 10;
// 함수도 타입을 추론할 수 있다.
function add(a: number, b: number) {
  return a + b;
}

// 특정 시점에 타입스크립트가 값의 타입을 어떻게 해석하는지 확인하는 것은 중요하다.
// 이는 아래와 같은 조건문으로 확인 가능하다.
function logMessage(message: string | null) {
  if (message) {
    message; // 해당 message는 message: string으로 해석된다.
  } else {
  }
}

// 에디터 상에서 오류를 살펴봄으로써 타입 시스템 성향을 파악할 수 있다.
function getElement(elOrId: string | HTMLElement | null): HTMLElement {
  if (typeof elOrId === "object") {
    return elOrId; // null은 object이기에 아래 else if 문이 없다면 에러가 발생한다.
  } else if (elOrId === null) {
    return document.body;
  } else {
    const el = document.getElementById(elOrId); // 에러가 난다. el이 null일 수 있기 때문에
    return el;
  }
}

// 타입스크립트가 동작을 어떻게 모델링 하는지 알기 위해 타입 선언 파일을 찾아보는 방법을 터득해야한다.
