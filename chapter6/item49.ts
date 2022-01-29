// 콜백에서 this에 대한 타입 제공하기

// this 바인딩은 종종 콜백함수에서 사용됩니다.

class ResetButton {
  render() {
    return makeButton({ text: "Reset", onClick: this.onClick });
  }

  onClick() {
    alert(`Reset ${this}`);
  }
}
// ResetButton에 onClick을 호출하면, this 바인딩 문제가 있다.
// 이 문제를 해결하기 위해 this 바인딩을 한다.

class ResetButton {
  constructor() {
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return makeButton({ text: "Reset", onClick: this.onClick });
  }

  onClick() {
    alert(`Reset ${this}`);
  }
}

// 이보다 단순하게 해결하는 방법은 화살표 함수로 하는것입니다.
class ResetButton {
  constructor() {
    this.onClick = this.onClick.bind(this);
  }
  render() {
    return makeButton({ text: "Reset", onClick: this.onClick });
  }

  onClick = () => {
    alert(`Reset ${this}`);
  };
}

// 콜백함수에서 this를 사용하려면 타입정보를 명시해야 합니다.
