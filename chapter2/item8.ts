// 타입 공간과 값 공간이 구분된다.

// 타입으로 쓰인 Cylinder
interface Cylinder {
  radius: number;
  height: number;
}

// 값으로 쓰인 Cylinder
const Cylinder = (radius: number, height: number) => ({ radius, height });
1;

// instanceof는 javascript 런타임 연산자이고 해당 표현은 값에 대해 연산한다. => 여기서 Cylinder는 타입이다.
function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    // shape.radius;  => 에러
  }
}

// class enum은 상황에 따라 값과 타입 둘 다 가능하다.

class CylinderClass {
  radius = 1;
  height = 1;
}

function calculateVolume2(shape: unknown) {
  if (shape instanceof CylinderClass) {
    shape.radius; // 에러 발생 X
  }
}

interface Person8 {
  first: string;
  last: string;
}

const p: Person8 = { first: "JANE", last: "JACOBS" };

// typeof는 타입으로 쓰일 때와 값으로 쓰일 때가 다른 기능을 한다.
type T1 = typeof p; // 타입은 Person8

const v1 = typeof p; // 값은 'object' => 런타임의 typeof 연산자

const v = typeof CylinderClass; // 값이 'function'

type T8 = typeof CylinderClass; // 타입이 typeof CylinderClass  =>  === CylinderClass의 생성자 함수

// InstanceType: 생성자 함수의 리턴 타입을 얻는다.
// InstanceType 제네릭을 이용하여 생성자 타입과 인스턴스 타입을 전환할 수 있다.

type C = InstanceType<typeof CylinderClass>; // 타입이 CylinderClass

const first: Person8["first"] = p["first"]; // []를 이용하여 속성의 타입에 접근 가능하다.

type PersonEL = Person8["first" | "last"]; // 타입은 string

type Tuple = [string, number, Date];
type TupleEl = Tuple[number];

function email(options: { person: Person8; subject: string; body: string }) {}

function email2({ person, subject, body }) {
  // person과 subject, body가 any로 해석된다.  값과 타입을 구분하지 못한 경우다.
}

// 올바른 표현
function email3({
  person,
  subject,
  body,
}: {
  person: Person8;
  subject: string;
  body: string;
}) {}
