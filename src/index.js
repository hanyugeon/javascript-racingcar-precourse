const $nameForm = document.getElementById('car-names-form');
const $nameInput = document.getElementById('car-names-input');
const $nameBtn = document.getElementById('car-names-submit');
const $countForm = document.getElementById('racing-count-form');
const $countInput = document.getElementById('racing-count-input');
const $countBtn = document.getElementById('racing-count-submit');
const $resultForm = document.getElementById('racing-result-form');

function nameInput(e) {
  e.preventDefault();
  const carNames = $nameInput.value.split(',');
  
  nameValidator(carNames);
}

function nameValidator(carNames) {
  const nameValidate = carNames.every((carName) => carName.length < 5 && carName.length > 0);

  if (nameValidate) {
    $nameInput.disabled = true;
    $nameBtn.disabled = true;
    $countForm.style.display = 'block';
  } else {
    alert("이름은 1자 이상 5자 이하만 가능합니다.");
    $nameInput.value = "";
  }
}

function countInput(e) {
  e.preventDefault();
  const racingCount = $countInput.value;

  countValidator(racingCount);
}

function countValidator(racingCount) {
  if (racingCount < 1) {
    alert("1이상의 자연수를 입력해 주세요.")
    $countInput.value = "";
  } else {
    $countInput.disabled = true;
    $countBtn.disabled = true;
    $resultForm.style.display = 'block';
  }
}

function init() {
  $countForm.style.display = 'none';
  $resultForm.style.display = 'none';
  $nameForm.addEventListener('submit', nameInput);
  $nameBtn.addEventListener('click', nameInput);
  $countForm.addEventListener('submit', countInput);
  $countBtn.addEventListener('click', countInput);
}

init();
