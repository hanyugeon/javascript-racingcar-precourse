import { $ } from './utils/DOM.js'

const $nameForm = $('#car-names-form');
const $nameInput = $('#car-names-input');
const $nameSubmit = $('#car-names-submit');
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
  $countForm.style.display = 'block';
}

function init() {
  $countForm.style.display = 'none';
  $resultForm.style.display = 'none';
  $nameForm.addEventListener('submit', inputName);
  $nameSubmit.addEventListener('click', inputName);
}

init();
