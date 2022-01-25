// 타입 주변에 null 값 배치하기
// strictNullChecks 설정을 키는 것이 좋다.
function extent(nums: number[]) {
  let min, max;
  for (const num of nums) {
    if (!min) {
      min = num;
      max = num;
    } else {
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
  }
  return [min, max];
}

// 모든 변수를 null과 함께 선언하게 되면, 매번 null 체크를 해야한다.
// 그렇기 때문에 선언과 동시에 초기화할 수 있는 방법을 생각하는 것이 좋다.
