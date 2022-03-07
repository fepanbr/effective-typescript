// string 타입보다 더 구체적인 타입 사용하기
// string 타입보다 더 구첵적인 타입이 있을지 생각해봐야한다.
interface Album {
  artist: string;
  title: string;
  releaseDate: string; // YYYY-MM-DD
  recordingType: string; // "live" or "studio"
}

// 위 타입은 주석도 있고 string으로 쓰기에는 너무 넓다.
// releaseDate는 너무 포괄적이라, 날짜 형식이 아니어도 할당 가능하다.
// recordingType은 주석으로 되어있지만, 'Studio'를 할당했을 때 에러(타입체크 에러)를 발생시키지 않는다.

function recordRelease(title: string, date: string) {}

const album: Album = {
  artist: "에스파",
  recordingType: "Studio",
  releaseDate: "August",
  title: "savage",
};

recordRelease(album.releaseDate, album.title); // 순서가 바뀌어도 타입 체커를 통과한다.

// releaseDate는 Date 형식으로 제한하기
// recordingType은 type alias 유니온 타입으로 정의하기 (enum no <- string enum은 트랜스파일링 되었을 때, 실제 string값과 구분되지 않는다.)

type RecordingType = "live" | "studio";

interface Album {
  artist: string;
  title: string;
  releaseDate: Date; // YYYY-MM-DD
  recordingType: RecordingType; // "live" or "studio"
}

// 위 방법은 3가지 장점이 있다.
// 1. 타입을 명시적으로 정의함으로써 다른 곳은로 값이 전달되어도 타입 정보가 유지된다.
// 2. 타입을 명시적으로 정의하고 해당 타입의 의미를 설명하는 주석을 붙여 넣을 수 있다.
// 3. keyof 연산자로 더욱 세밀하게 객체의 속성 체크가 가능하다.

/** 어디서 녹음 했는지에 대한 정보 */
type RecordingType = "live" | "studio";

function pluck<T>(records: T[], key: string): any[] {
  return records.map((r) => r[key]);
}

// 위 방식은 any타입을 반환하여 any가 전파하는 나쁜 예이고, key가 string이라 너무 넓은 범위이다.
// 이를 효과적으로 타입체킹 하기 위해서 아래처럼 진행한다.

type K = keyof Album;
function pluckz<T>(records: T[], key: keyof T) {
  return records.map((r) => r[key]);
}

// 위의 pluckz는 타입 추론은 가능하지만 사용할 때, 적절하게 추론하지 못한다.

const releaseDate = pluckz(album, "releaseDate");

// 더 정확하게 추론하기 위해

function plucks<T, K extends keyof T>(records: T[], key: K): T[K][] {
  return records.map((r) => r[key]);
}

const releaseDates = plucks(album, "releaseDate");
