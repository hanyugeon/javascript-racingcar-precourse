# 🏎️ 자동차 경주 게임

## ✨ 끄적끄적
- Step01: https://hanyugeon.tistory.com/3
- Step02: https://hanyugeon.tistory.com/4
- Step03: https://hanyugeon.tistory.com/7

## 🎯 기능 요구사항

- [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
  - 입력값이 공백일 때 alert을 활용하여 재입력 요구
  - 입력값이 5자 초과일 때 alert을 활용하여 재입력 요구
  - 입력값이 올바를 때 car-names-input 과 car-names-submit 을 비활성화
  - 입력값이 올바를 때 racing-count-form 을 보여줌

- [x] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
  - $nameInput과 carNames를 통해 배열에 자동차 이름들을 저장한다.

- [x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
  - 입력값이 자연수가 아닐 때 alert를 활용하여 재입력 요구
  - 입력값이 올바를 때 racing-count-input 과 racing-count-submit 을 비활성화
  - 입력값이 올바를 때 racing-result-form 을 보여줌

- [x] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
  - 해당조건을 utils/race-utils.js 에 roundScoreUtil() 로 만듦

- [x] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.

- [x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- [x] 우승자가 여러명일 경우 ,를 이용하여 구분한다.
  - roundScore과 winnerPoint 를 통해 최고점을 판별, 우승자(들)을 winner에 삽입 하여 출력한다.


## ✅ 프로그래밍 요구사항

- 다음 Car 객체를 만들고, new 를 이용해 인스턴스를 만든다.
```javascript
function Car(name) {
  this.name = name;
}
class Car {
  constructor(name) {
    this.name = name;
  }
}
```

### DOM 선택자

- 자동차의 이름을 입력하는 input 태그는 `car-names-input` id값을 가진다.
- 자동차의 이름을 제출하는 button 태그는 `car-names-submit` id값을 가진다.
- 레이싱 횟수를 입력하는 input 태그는 `racing-count-input` id값을 가진다.
- 레이싱 횟수을 제출하는 button 태그는 `racing-count-submit` id값을 가진다.
- 최종 우승자를 출력하는 span 태그는 `racing-winners` id를 가진다.
  - 예) `<span id="racing-winners">poco,park,jun</span>` 형태로 작성해주세요.


### 라이브러리
- 랜덤으로 잔돈을 생성하는 기능은 WoowaUtil 라이브러리의 Random.pickNumberInList 메서드를 활용하여 구현한다. (WoowaUtil은 window객체 내에 포함되어 있음)

### 공통 요구사항

- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
  - [Airbnb JavaScript Style Guide()](https://github.com/airbnb/javascript)
  - [JavaScript Standard Style](https://standardjs.com)
  - [NHN FE개발랩](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.
- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.


<br>

## 📝 미션 저장소 및 진행 요구사항

- **기능을 구현하기 전에 javascript-racingcar-precourse/docs/README.md 파일에 구현할 기능 목록**을 정리해 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
