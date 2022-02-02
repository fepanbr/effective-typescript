// 객체를 순회하는 방법
const obj = {
  one: "uno",
  two: "dos",
  three: "tres",
};

for (const key in obj) {
  const element = obj[key]; // 암시적으로 any타입입니다.
}

// 이를 해결하기 위해 keyof, typeof를 이용

const obj1 = {
  one: "uno",
  two: "dos",
  three: "tres",
};

let k: keyof typeof obj1;

for (const k in obj1) {
  const element = obj1[k]; // 암시적으로 any타입
}

// 하지만 위의 방법을 이용할 경우 object에 없는 속성에 접근할 수 있고 타입 추론 또한, 올바르게 추론하지 못한다.
// 이럴 때 Object.entries를 이용하자

// 객체를 순회할 때, 키가 어떤 타입인지 정확히 파악하고 있다면 let k: keyof T와 for-in을 사용하자.
// 늘 추가적인 키가 존재할 수 있다는 점을 명심하자.
// 객체를 순회하며 키와 값을 얻는 가장 일반적인 방법은 Object.entries를 사용하는 것이다.
