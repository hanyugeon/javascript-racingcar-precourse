const ALERT_MESSAGES = {
  NAME_NONE_VALIDATE_ERROR: "이름을 입력해 주세요.",
  NAME_LENGTH_VALIDATE_ERROR: "5자 이하로 입력해 주세요.",
  COUNT_VALIDATE_ERROR: "1이상의 자연수를 입력해 주세요."
};

export function nameValidate(carNames) {
  let vailable = false;

  if (carNames.includes("")) {
    alert(ALERT_MESSAGES.NAME_NONE_VALIDATE_ERROR);
  } else if (!carNames.every(carName => carName.length < 6)) {
    alert(ALERT_MESSAGES.NAME_LENGTH_VALIDATE_ERROR);
  } else {
    vailable = true;
  }

  return vailable;
}

export function countValidate(racingCount) {
  let vailable = false;

  if (racingCount < 1) {
    alert(ALERT_MESSAGES.COUNT_VALIDATE_ERROR);
  } else {
    vailable = true;
  }

  return vailable;
}

export function clearInput(targetValue) {
  return targetValue.value = "";
}
