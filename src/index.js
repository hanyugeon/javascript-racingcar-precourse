const $nameForm = document.getElementById('car-names-form');
const $nameInput = document.getElementById('car-names-input');
const $nameBtn = document.getElementById('car-names-submit');
const $countForm = document.getElementById('racing-count-form');
const $countInput = document.getElementById('racing-count-input');
const $countBtn = document.getElementById('racing-count-submit');
const $resultForm = document.getElementById('racing-result-form');

function inputName(e) {
  e.preventDefault();
  const nameObj = $nameInput.value.split(',');
  
  nameExecution(nameObj);
}

function nameExecution(obj) {
  const nameAvaliable = obj.every((item) => item.length < 5 && item.length > 0);

  if(nameAvaliable) {
    $nameInput.disabled = true;
    $nameBtn.disabled = true;
    $countForm.style.display = 'block';
    return;
  }
  else {
    window.alert("이름은 1자 이상 5자 이하만 가능합니다.");
    $nameInput.value = "";
    return;
  }
}

function inputCount(e) {
  e.preventDefault();
  const racingCount = $countInput.value;
  
  countExecution(racingCount);
}

function countExecution(racingCount) {
  if(racingCount < 1) {
    window.alert("1이상의 자연수를 입력해 주세요.")
    $countInput.value = "";
    return;
  }
  else {
    $countInput.disabled = true;
    $countBtn.disabled = true;
    $resultForm.style.display = 'block';
  }
}

function init() {
  $countForm.style.display = 'none';
  $resultForm.style.display = 'none';
  $nameForm.addEventListener('submit', inputName);
  $nameBtn.addEventListener('click', inputName);
  $countForm.addEventListener('submit', inputCount);
  $countBtn.addEventListener('click', inputCount);
}

init();
