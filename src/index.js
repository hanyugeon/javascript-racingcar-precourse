import { $ } from './utils/DOM.js'

const $nameForm = $('#car-name-form');
const $nameInput = $('#car-name');
const $nameSubmit = $('#car-name-submit-button');
const $countForm = $('#game-count-form');
const $resultForm = $('#racing-result-form');

function inputName(e) {
  e.preventDefault();
  const nameObj = $nameInput.value.split(',');

  nameExecution(nameObj);
}

function nameExecution(obj) {
  const nameAvaliable = obj.every((item) => item.length < 5 && item.length > 0);

  if(nameAvaliable) {
    $countForm.style.display = 'block';
    inputCount();
    return;
  }
  else {
    window.alert("이름은 1자 이상 5자 이하만 가능합니다.");
    $nameInput.value = "";
    return;
  }
}

function inputCount() {
  
}

/*
   - ,를 기준으로 구분하며 이름은 5자 이하만 가능
   - 사용자는 시도할 횟수를 입력할 수 있어야 한다.
   
   - 전진하는 조건은 0에서 9사이에서 random값을 구한 후 
  random값이 4이상일 경우 전진, 3이하의 값이면 멈춘다.
   
   - 자동차 경주 게임을 완료한 후 누가 우승했는지 알려주기
   - 우승자는 한명 이상일 수 있다.
   - 우승자가 여러명일 경우 ,를 이용하여 구분

  */

function init() {
  $countForm.style.display = 'none';
  $resultForm.style.display = 'none';
  $nameForm.addEventListener('submit', inputName);
  $nameSubmit.addEventListener('click', inputName);
}

init();
