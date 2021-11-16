import { enableForm, disalbeForm, disableUtils } from "./utils/display-utils.js";
import { nameValidate, countValidate, clearInput } from "./utils/input-utils.js";

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
  
  if (nameValidate(carNames)) {
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
    raceStart();
  } else {
    clearInput($countInput);
  }
}

function raceStart() {
  const carNames = $nameInput.value.split(',');
  const racingCount = $countInput.value
  let resultArr = new Array(carNames.length).fill(0);
  let winnerArr = [];

  for (let i = 0; i < racingCount; i++) {
    raceUtil(resultArr);
    console.log(resultArr);
  }

  raceWinner(resultArr, winnerArr);
  // racePaint();
  resultPaint(winnerArr);
}

function raceUtil(arr) {
  let raceResult = 0;
  
  for (let i = 0; i < arr.length; i++) {
    raceResult = Math.floor(Math.random() * 10)
    console.log(raceResult);
    if (raceResult > 4) {
      arr[i] += 1;
    }
  }
}

function raceWinner(resultArr, winnerArr) {
  const winnerPoint = Math.max.apply(null, resultArr);
  
  for (let i = 0; i < resultArr.length; i++) {
    if(resultArr[i] === winnerPoint) {
      winnerArr.push(i);
    }
  }
  console.log(winnerPoint)
  console.log(winnerArr);
}

function racePaint(winner) {
  const $raceCar = document.createElement('li');
  $raceCar.setAttribute("id", "racing-car");
  $raceCar.innerHTML = `
    
  `

  
}

function resultPaint(winnerArr) {
  const carNames = $nameInput.value.split(',');
  let winner = ''

  for (let i = 0; i < winnerArr.length; i++) {
    winner += carNames[winnerArr[i]]
  }

  $resultForm.innerHTML = `<span id="racing-winners"> 최종 우승자: ${winner} </span>`
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
