export let winner = '';

export function roundScoreUtil(roundScore) {
  for (let i = 0; i < roundScore.length; i++) {
    const raceCondition = Math.floor(Math.random() * 10);

    if (raceCondition > 4) {
      roundScore[i] += 1;
    }
  }
}

export function roundResultUtil(carNames, roundScore) {
  const br = "</br>";
  const roundResultArray = [];

  for (let i = 0; i < carNames.length; i++) {
    roundResultArray.push(carNames[i] + ":")
    
    for (let j = 0; j < roundScore[i]; j++) {
      roundResultArray.push('-');
    }
    roundResultArray.push(br);
  }
  roundResultArray.push(br);
  const roundResultString = roundResultArray.join(' ')

  return roundResultString;
}

export function raceWinner(carNames, roundScore) {
  const winnerPoint = Math.max.apply(null, roundScore);
  let winnerIndex = [];
  let winnerArray = [];

  for (let i = 0; i < roundScore.length; i++) {
    if(roundScore[i] === winnerPoint) {
      winnerIndex.push(i);
    }
  }

  for (let i = 0; i < winnerIndex.length; i++) {
    winnerArray.push(carNames[winnerIndex[i]]);
  }

  winner = winnerArray.join(',');
}
