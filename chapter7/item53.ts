// 타입스크립트 기능보다는 ECMA Script 기능을 사용하기
// 타입스크립트에서 문자열 열거형은 사용하기 보다 리터럴 타입의 유니온을 사용하자
enum Flavor {
  VANILLA = "vanilla",
}

function addFlavor(flavor: Flavor) {
  flavor === Flavor.VANILLA; // X
}

// 아래와 같이 리터럴 유니온 타입으로 사용하자
type FlavorType = "vanilla" | "spicy";

// 매개변수 속성
// name, first, last 세가지 속성이 있지만, 실제로는 두가지만 사용되는 것 처럼 표현된다. 사용에 조심해야한다.
class Person {
  last: string;
  first: string;
  constructor(public name: string) {
    [this.first, this.last] = name.split(" ");
  }
}

// 네임스페이스와 트리플 슬래시 임포트
// TS는 ECMA 2015의 module과 같은 기능을 하는 namespace 키워드 추가
// ECMA 2015 스타일의 모듈(import와 export)를 사용하자

// 데코레이터
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @logged
  greet() {
    return "Hello, " + this.greeting;
  }
}

function logged(target: any, name: string, descriptor: PropertyDescriptor) {
  const fn = target[name];
  descriptor.value = function () {
    console.log(`Calling ${name}`);
    return fn.apply(this, arguments);
  };
}

console.log(new Greeter("Dave").greet());
// 출력 :
// Calling greet
// Hello, Dave

// 아직 표준화 되지 않음
