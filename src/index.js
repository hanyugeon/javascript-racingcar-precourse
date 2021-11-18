import { enableForm, disableForm, disableUtil } from "./utils/display-utils.js";
import { nameValidate, countValidate, clearInput } from "./utils/input-utils.js";
import { roundScoreUtil, roundResultUtil, raceWinner } from "./utils/race-utils.js";
import { raceResultPaint, raceWinnerPaint } from "./utils/paint-utils.js";

export const $resultForm = document.getElementById('racing-result-form');

const $nameForm = document.getElementById('car-names-form');
const $nameInput = document.getElementById('car-names-input');
const $nameBtn = document.getElementById('car-names-submit');
const $countForm = document.getElementById('racing-count-form');
const $countInput = document.getElementById('racing-count-input');
const $countBtn = document.getElementById('racing-count-submit');

function nameInput(e) {
  e.preventDefault();
  const carNames = $nameInput.value.split(',');
  
  if (nameValidate(carNames)) {
    disableUtil($nameInput);
    disableUtil($nameBtn);
    enableForm($countForm);
  } else {
    clearInput($nameInput);
  }
}

function countInput(e) {
  e.preventDefault();
  const racingCount = $countInput.value;

  if (countValidate(racingCount)) {
    disableUtil($countInput);
    disableUtil($countBtn);
    enableForm($resultForm);
    raceStart();
  } else {
    clearInput($countInput);
  }
}

function raceStart() {
  const carNames = $nameInput.value.split(',');
  const racingCount = $countInput.value;
  let roundScore = new Array(carNames.length).fill(0);
  let raceResult = '';

  for (let i = 0; i < racingCount; i++) {
    roundScoreUtil(roundScore);
    raceResult += roundResultUtil(carNames, roundScore);
  }
  
  raceResultPaint(raceResult);
  raceWinner(carNames, roundScore);
  raceWinnerPaint();
}

function init() {
  disableForm($countForm);
  disableForm($resultForm);
  $nameForm.addEventListener('submit', nameInput);
  $nameBtn.addEventListener('click', nameInput);
  $countForm.addEventListener('submit', countInput);
  $countBtn.addEventListener('click', countInput);
}

init();
