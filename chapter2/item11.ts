// 잉여속성 체크의 한계 인지하기

interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}

const r: Room = {
  ceilingHeightFt: 10,
  numDoors: 1,
  // elephant: "hi"    // 불가능 => 타입 체커에 의해 지정 불가
};

// 하지만 아래처럼 어떤 객체 리터럴을 Room 타입에 할당하는 것은 오류가 발생하지 않는다.

const obj = {
  ceilingHeightFt: 10,
  numDoors: 1,
  elephant: "present",
};

const r1: Room = obj; //  정상 => obj타입은 Room타입의 일부를 부분집합으로 갖기 때문에

// 위의 예시처럼 잉여 속성 검사와 할당 가능 검사는 별개로 작동한다.

interface Options {
  title: string;
  darkMode?: boolean;
}

function createWindow(options: Options) {
  if (options.darkMode) {
    //
  }
}

// createWindow({title: 'spider', darkmode: true})  // darkmode -> darkMode 잘 잡아낸다.
// 하지만 options의 타입 범위가 너무 넓기 때문에 할당할 수 있는 값들이 많다.
const o1: Options = document; // title이라는 속성을 가지고 있기 때문에 할당이 가능하다.

// 잉여 속성 체크하기 위해 객체 리터럴을 이용하자
// const o: Options = { title: 'ski', darkmode: true} // 에러

// 잉여 속성 체크를 원치 않는다면, 인덱스 시크니처를 사용해서 타입스크립트가 추가적인 속성을 예상할 수 있도록 할 수 있다.
interface Optionss {
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}
const o6: Optionss = { darkMode: true };

// 선택적 속성만 가지는 '약한(Weak)'타입에도 비슷한 체크가 동작합니다.
interface LineChartOptions {
  logscale?: boolean;
  invertedYAxis?: boolean;
  areaChart?: boolean;
}

const opt = { logScale: true };
// const o222: LineChartOptions = opt;  // 에러, 모든 속성이 선택적일 때는 공통된 속성이 있는지 체크를 수행한다. 그래서 공통된 속성이 없기에 에러를 발생시킨다.
