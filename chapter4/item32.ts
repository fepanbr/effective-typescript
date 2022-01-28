// 유니온의 인터페이스보다는 인터페이스의 유니온을 사용하기
// 유니온을 사용하는 인터페이스를 사용할 때, 혹시 '인터페이스의 유니온'이 나은 선택인지 확인해본다.

// 해당 인터페이스는 여러개의 유니온들을 가져 처리할 때, 번거롭다.
// layout 프로퍼티가 fillLayout일 때, paint가 LinePaint는 될 수 없다.
// 해당 상황일 때, 인터페이스 유니온을 사용한다.
interface Layer {
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}

// 아래와 같이 나눠서 사용하는 것이 더 쉽다.
interface FillLayer {
  layout: FillLayout;
  paint: FillPaint;
}

interface LineLayer {
  layout: LineLayout;
  paint: LinePaint;
}

interface PointLayer {
  layout: PointLayout;
  paint: PointPaint;
}

type Layer = FillLayer | LineLayer | PointLayer;
