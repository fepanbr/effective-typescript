// 코드 생성과 타입이 관계없음을 이해하기
// 타입스크립트의 두 가지 역할
// - 최신 타입스크립트/자바스크립트를 브라우저에서 동작할 수 있도록 구버전의 자바스크립트로 트랜스파일
// - 코드의 타입 오류를 체크
// 위 둘은 독립적

// 타입스크립트 특징
// 타입 오류가 있는 코드도 컴파일이 가능
let x = "hello";
x = 1234; // 1234는 string형식에 할당할 수 없습니다. => 에러 발생

// 하지만 위의 경우 자바스크립트로 컴파일이 된다.

// 런타임에는 타입체크가 불가능하다.
interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  // if (shape instanceof Rectagle) {
  //   // ...에러
  // }
  if ("height" in shape) {
    shape.height; // 가능
  }
}

// instaceof는 런타임에 일어나지만, Rectagle은 타입이기에 런타임시점에는 아무것도 하지 않는다.
// 타입스크립트는 컴파일되는 과정에서 모두 제거된다.
// 그러므로 위와 같이 'height'속성의 유무로 런타임에 타입체크를 해야한다.
// 타입 체킹에 또 다른 방법으로 '태그' 기법이 있다.

interface Square {
  kind: "square";
  width: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
}

type Shape = Rectangle | Square;

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {
    // kind로 런타임에 체킹
    shape.height; // 가능
  }
}

// 타입을 클래스로 만들면 런타임에 체크할 수 있다.
class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape = Rectangle | Square;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectagle) {
    // 런타임에 체크가능
  }
}

// 타입 연산은 런타임에 영향을 주지 않는다.

function asNumber(val: string | number): number {
  return val as number;
}

// 위의 코드는 자바스크립트로 컴파일 시 타입 연산은 사라진다.
// 그러므로 자바스크립트 연산을 통해 변환을 수행해야 합니다.

// 런타임 타입은 선언된 타입과 다를 수 있다.
// 특히 라우팅 쿼리는 number로 선언해도 런타임에는 string으로 받습니다.

// 타입스크립트의 타입으로는 함수의 오버로딩을 할 수 없다.
// 구현체는 하나 타입은 여러개 선언할 수 있다.
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a, b) {
  return a + b;
}

const three = add(1, 2);
const twelve = add("1", "2");

// 타입스크립트 타입은 런타임 성능에 영향을 주지 않는다.
