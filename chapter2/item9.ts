// 타입 단언보다 타입 선언 사용하기

// 타입 선언은 검사를 하지만, 타입 단언은 타입 스크립트 타입체커에게 오류를 무시하라고 하는 것과 같다.

interface Person {
  name: string;
}

const alice: Person = { name: "Alice" }; // 타입 선언 => 타입 체커가 값이 해당 타입이 맞는지 체크한다.
const bob = { name: "Bob" } as Person; // 타입 단언 해당 값이 타입이 맞다고 타입체커에게 알려준다. 즉 오류 무시

// 타입 선언문에서는 잉여 속성 체크가 동작했지만, 단언은 적용되지 않는다.

// const herry: Person = { name: "herry", occupation: "musicion"}  // 에러
const henry = {
  name: "henry",
  occupation: "developer",
} as Person; // 추가 속성에 대한 오류 X

// 타입추론을 구체화 하고 싶으면 단언보다 타입선언을 이용해라
const people = ["alice", "bob", "jan"].map((name) => ({ name } as Person)); // 이 방식은 오류를 못잡는다. 대신에
const people2 = ["alice", "bob", "jan"].map((name) => {
  const person: Person = { name };
  return person;
}); // 타입 체커에 의해 타입 체크도 되고 타입 추론도 올바르게 작동한다.
const people3 = ["alice", "bob", "jan"].map((name): Person => ({ name })); // 위 people2를 간단하게 깔끔하게 표현한다.

// 단언문은 우리가 타입스크립트보다 타입 추론이 더 정확할 때 사용하자. => 예 DOM API
document.querySelector("#myButton").addEventListener("click", (e) => {
  const button = e.currentTarget as HTMLButtonElement; // 이와 같이 해당 타겟이 버튼이라고 나만 알고 있기에 단언문을 사용한다.
});

// null이 확실히 아니라는 것을 알때는 ! 을 이용해서 null이 아님을 단언합니다.
