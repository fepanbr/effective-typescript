// 매핑된 타입을 사용하여 값을 동기화 하기 => 타입체커를 이용하여 변경사항 동기화하기

interface ScatterProps {
  xs: number[];
  ys: number[];

  xRange: [number, number];
  yRange: [number, number];

  onClick: (x: number, y: number, index: number) => void;
  onDoubleClick: () => void;
}

function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k]) {
      if (k !== "onClick") return true;
    }
  }
  return false;
}

// 새로운 props가 추가되도 shouldUpdate함수도 변뎡되어야한다.
// 그래서 특정 값을 이용하여 동기화한다.

const REQUIRES_UPDATE: { [k in keyof ScatterProps]: boolean } = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  onDoubleClick: true, //새롭게 추가되면 타입체커에 의해 오류가발생한다.
  onClick: false,
};

function shouldUpdate1(oldProps: ScatterProps, newProps: ScatterProps) {
  let k: keyof ScatterProps;
  for (k in oldProps) {
    if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
      if (k !== "onClick") return true;
    }
  }
  return false;
}
