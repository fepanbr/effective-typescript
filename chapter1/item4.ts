// 구조적 타이핑에 익숙해지기
// javascript는 기본적으로 duck타이핑 기반이다. (duck타이핑은 어떤 것이 오리처럼 꿱꿱하면 그것을 오리라고 부르겠다는 의미에서 유래. 객체의 변수와 메소드의 집합이 객체의 타입을 결정하는 것)

interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector2D {
  name: string;
  x: number;
  y: number;
}
const v: NamedVector2D = { name: "Zee", x: 2, y: 3 };
calculateLength(v); // 정상... 이는 덕 타이핑 관점에서 프로퍼티 x와 y가 모두 존재하기 때문에 에러가 발생하지 않음. 심지어 따로 NamedVector2D와 Vector2D의 관계를 명시하지 않음

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v); // calculateLength 메소드는 3D 벡터의 길이를 구하는 함수가 아니라, 2D 벡터의 길이를 구하는 함수.=> 하지만 에러를 잡지 못한다.
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

// 타입스크립트는 기본적으로 타입에 열려(open)있다.
// 그래서 객체를 순회하는데 까다롭다.

for (const axis of Object.keys(v)) {
  const coord = v[axis]; // v 객체의 프로퍼티를 확정할 수 없다. 그러므로 any
}

// 클래스에서 구조적 타이핑이 문제가 될 수 있다.
class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}

const c = new C("instance of C");
const d: C = { foo: "object literal" };
// d에 C타입이 할당 가능하다. 이유는 foo이면서 동시에 string 타입을 가지기 때문이다.

interface Author {
  first: string;
  last: string;
}

function getAuthors(database: DB): Author[] {
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map((row) => ({ first: row[0], last: row[1] }));
}

// 이를 구조적 타이핑을 활용하여 더 구체적인 인터페이스를 정의하는 것이 좋다.

interface DB {
  runQuery: (sql: string) => any[];
}

test("getAuthors", () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [
        ["Toni", "Marrison"],
        ["Maya", "Angelou"],
      ];
    },
  });

  expect(authors).toEqual([
    { fist: "Toni", last: "Morrison" },
    { first: "Maya", last: "Angelou" },
  ]);
});
