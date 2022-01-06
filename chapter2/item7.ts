// type을 값의 집합으로 생각하기 === 할당 가능한 값들의 집합 === type

// never는 공집합
// const x: never = 12;

// 1개의 값을 갖는 타입 (unit 타입, literal 타입)
type A = "A";
type Twelve = 12;

// 2개 혹은 3개를 묶으면 유니온 타입(Union)
type ATwelve = A | Twelve;

// & 연산자는 인터섹션을 의미 => 교집합이고, 두 타입의 모든 값을 가질 수 있음을 의미
interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

/**
 * Personspan {
 *  name: string;
 *  birth: Date;
 *  death?: Date;
 * }
 */
type Personspan = Person & Lifespan;

// 드모르간 처럼 기억하자.
// keyof (A&B) = (keyof A) | (keyof B)
// keyof (A|B) = (Keyof A) & (keyof B)

// A extends B : A는 B의 부분집합니다.
interface PersonSpan extends Person {
  birth: Date;
  death?: Date;
}

// 위의 특징을 이용하여, 제네릭에서는 한정자로서 extends를 사용한다.
function getKey<K extends string>(val: any, key: K) {
  // ...
}

// keyof를 이용한 extends 제네릭 사용법
interface Point {
  x: number;
  y: number;
}

type PointKeys = keyof Point;

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  return vals;
}

const pts: Point[] = [
  { x: 1, y: 0 },
  { x: 15, y: 10 },
];
sortBy(pts, "x");
sortBy(pts, "y");
// sortBy(pts, 'z'); // 에러

const list = [1, 2];
// const tuple: [number, number] = list;  // 에러  A = B 이면 B는 A의 부분집합이여야 한다. 하지만 number[]는 [number, number]의 부분집합이 아니다.

type T = Exclude<string | Date, string | number>; // type은 Date
type NonZeroNums = Exclude<number, 0>; // type은 여전히 number
