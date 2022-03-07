// any 타입 지양하기
// 타입스크립트의 타입 시스템은 점진적이고 선택적이다.
// 이 뜻은 코드에 타입을 조금씩 추가할 수 있으며(점진적), 언제든 타입 체커를 해제할 수 있다(선택적)

let age: number;
age = "12"; // 에러
age = "12" as any; // OK

// any는 편하지만 위험하다.

// any타입은 타입의 안전성이 없다
age += 1; // "121"

// any는 함수 시그니처를 무시한다.
function calculateAge(birthDate: Date): number {
  // ...
}

let birthDate: any = "1990-01-19";

calculateAge(birthDate); // 정상

// any는 언어서비스를 사용할 수 없다.
// any타입은 코드 리팩터링 때 버그는 감춘다.

// any는 타입 설계를 감춰버린다.
// 애플리케이션 상태 같은 객체를 정의할 때 복잡하다. 수많은 속성의 타입을 일일이 작성해야하는데, 이 때 객체의 상태를 감추기 때문에 명료한 코드를 작성할 수 없다.

// any는 타입시스템의 신뢰도를 떨어뜨린다.