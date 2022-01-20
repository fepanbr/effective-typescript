// 추론 가능한 타입을 사용해 장황한 코드 방지하기

// 타입추론이 가능한 타입은 명시적으로 사용하지 않는다.
let x: number = 12;
// => let x = 12;

// 비구조화 할당과 같은 구문에서 명시적으로 타입을 넣는다면 장황하여 코드가 번잡보이기에 피한다.
interface Product {
  id: string;
  name: string;
  price: string;
}

function logProduct(product: Product) {
  const { id, name, price } = product;
}

// 기본값을 넣을 때도 타입을 생략할 수 있다.
function selector(index: string, base = 10) {}

// 콜백함수에 있는 타입은 자동으로 추론하기에 명시적으로 타입을 선언하지 말자.
// app.get('/health', (request, response) => { response.send('OK')})

// 예외적으로 타입 추론이 될 수 있음에도 타입을 명시적으로 해야할 때가 있다.
// 주로 객체 리터럴을 정의할 때이다.
// 객체 리터럴에 명시적으로 타입을 선언해주면, 첫번쨰로 객체 선언시 오타를 줄일 수 있고, 두번째로 해당 객체의 사용할 경우 에러가 발생하는 것이 아닌 선언 시 발생하여 일찍 오류를 잡을 수 있다.

// 또한 함수에서 의도된 반환 타입을 명시한다면 정확한 위치에 오류를 표시할 수 있다.
const cache: { [ticker: number]: number } = {};
function getQuote(ticker: string): Promise<number> {
  if (ticker in cache) {
    return cache[ticker];
  }
}

// 함수의 반환타입을 먼저 명시함으로서, 해당 함수의 주요 프로세스를 생각해보고 이는 TDD와 비슷한 효과를 기대할 수 있다.
// 또한 추론 타입이 복잡할수록 반환 타입을 명시하는 것이 이점이 커진다.
