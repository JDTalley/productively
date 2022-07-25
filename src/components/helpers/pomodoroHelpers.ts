export function setTimerText(timerRemaining: number) {
    // Get minutes and seconds
    let minutes: number = Math.floor((timerRemaining / 60));;
    let seconds: number = timerRemaining - Math.floor((timerRemaining / 60)) * 60;

    return `${padNumber(minutes)}:${padNumber(seconds)}`;
}

export function padNumber (number: number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}