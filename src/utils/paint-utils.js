import { $resultForm } from "../index.js";
import { winner } from "./race-utils.js";

export function raceResultPaint(raceResult) {
  const $raceResult = document.createElement('span');
  $raceResult.setAttribute("id", "racing-round-result");
  $raceResult.innerHTML = `${raceResult}`;

  $resultForm.appendChild($raceResult);
}

export function raceWinnerPaint() {
  const $racingWinner = document.createElement('span');

  $racingWinner.setAttribute("id", "racing-winner");
  $racingWinner.innerHTML = `최종 우승자: ${winner}`;
  $resultForm.appendChild($racingWinner);
}
