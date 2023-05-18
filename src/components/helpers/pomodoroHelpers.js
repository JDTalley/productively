export function setTimerText(timerRemaining) {
  // Get minutes and seconds
  let minutes = Math.floor(timerRemaining / 60);
  let seconds = timerRemaining - Math.floor(timerRemaining / 60) * 60;

  return `${padNumber(minutes)}:${padNumber(seconds)}`;
}

export function padNumber(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
