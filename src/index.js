import { enableForm, disalbeForm, disableUtils } from "./utils/display-utils.js";
import { namesValidate, countValidate, clearInput } from "./utils/input-utils.js";

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
  
  if (namesValidate(carNames)) {
    disableUtils($nameInput, $nameBtn);
    enableForm($countForm);
  } else {
    clearInput($nameInput);
  }
}

function countInput(e) {
  e.preventDefault();
  const racingCount = $countInput.value;

  if (countValidate(racingCount)) {
    disableUtils($countInput, $countBtn);
    enableForm($resultForm);
  } else {
    clearInput($countInput);
  }
}

function init() {
  disalbeForm($countForm);
  disalbeForm($resultForm);
  $nameForm.addEventListener('submit', nameInput);
  $nameBtn.addEventListener('click', nameInput);
  $countForm.addEventListener('submit', countInput);
  $countBtn.addEventListener('click', countInput);
}

init();
