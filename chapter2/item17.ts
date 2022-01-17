// 변경 관련된 오류 방지를 위해 readonly 사용하기

function arraySum(arr: readonly number[]) {
  let sum = 0,
    num;
  while ((num = arr.pop()) !== undefined) {
    // 에러 readonly number[] 타입은 변경 불가능
    sum += num;
  }
  return sum;
}

// 수정버전
function arraySum1(arr: readonly number[]) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

// readonly는 얕은 복사(shallow)를 한다. 그래서 readonly가 붙은 객체만 변경 불가능하다.

// 요약
// 함수의 매개변수를 변경 불가능하도록 만들 때, readonly를 사용하자
// const와 readonly의 차이점을 분명히 알자.
// readonly는 얕게 동작한다.
