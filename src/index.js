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

function init() {
  $countForm.style.display = 'none';
  $resultForm.style.display = 'none';
  $nameForm.addEventListener('submit', inputName);
  $nameSubmit.addEventListener('click', inputName);
}

init();
