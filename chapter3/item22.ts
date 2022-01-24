// 타입 좁히기
// null 체크로 HTMLElement로 좁히기
const el = document.getElementById("foo"); // HTMLElement | null

if (el) {
  el.innerHTML = "party time".blink();
}

// instanceof로 타입 좁히기
function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    return search; // 타입은 RegExp
  }
}

// 내장 함수로 줄이기
function contain(text: string, terms: string | string[]) {
  const termList = Array.isArray(terms) ? terms : [terms];
}

// 태그를 통해 줄이기

interface UploadEvent {
  type: "upload";
  filename: string;
  contents: string;
}
interface DownloadEvent {
  type: "download";
  filename: string;
  contents: string;
}

// 사용자 정의 타입 가드를 통해 줄이기
function isInputElement(el: HTMLElement): el is HTMLElement {
  return "value" in el;
}
