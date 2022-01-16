// 동적 데이터에 인덱스 시그니처 사용하기

// 런타임 때까지 객체의 속성을 알 수 없는 경우(CSV 파일 파싱)에만 인덱스 시그니처 사용하기
// 안전한 접근을 위해, undefined 타입 추가하기
// 가능하다면 인터페이스, Record, 매핑된 타입과 같은 정확한 타입 사용하기

// Record 타입 사용하기
type Vec3D = Record<"x" | "y" | "z", number>;
// type Vec3D = {
//   x: number,
//   y: number,
//   z: number,
// }

type ABC = { [k in "a" | "b" | "c"]: k extends "b" ? string : number };
// type ABC = {
//   a: number,
//   b: string,
//   c: number,
// }
