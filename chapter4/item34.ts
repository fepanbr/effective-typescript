// 부정확한 타입보다는 미완성 타입을 사용하기
// 보통 정확성을 높이게 되면 버그를 더 잘 잡게된다.
// 하지만 정밀도를 높이는 과정에서 자칫 타입이 없으니만 못하게 될 수도 있다.

interface Point {
  type: "Point";
  coordinates: number[];
}

interface LineString {
  type: "LineString";
  coordinates: number[][];
}

interface Polygon {
  type: "Polygon";
  coordinates: number[][][];
}

type Geometry = Point | LineString | Polygon;

// 여기서 number[]는 너무 추상적이기에 튜플로 하는게 낫다고 생각할 수 있다.
// 하지만 그렇게 되면 세번째 요소인 고도가 있을 수 있고 또 다른 정보를 가질 수 있다.
// 그렇다면 사용하는 입장에서는 타입 단언문이나 'as any' 와 같은 방식으로 타입 체커를 무시해야한다.

// 타입 안정성에서 불쾌한 골짜기는 피해야 한다. 타입이 없는 것보다 잘못된 게 더 나쁘다.
// 정확하게 타입을 모델링할 수 없다면, 부정확하게 모델링하지 말자. any와 unknown을 구별해서 사용하다.
