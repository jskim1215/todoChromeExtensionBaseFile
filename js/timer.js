const timer = document.querySelector("h3#timer");
const startButton = document.querySelector("#start-timer");
const resetButton = document.querySelector("#reset-timer");
const pauseButton = document.querySelector("#pause-timer");
const totalTimeAddButtonInTimer = document.querySelector("#timeadd-button");

// timer 부터 시작하면 됨
let startTime = 0;
let endTime = 0;

function startTimer() {
    startButton.disabled = true;
    totalTimeAddButtonInTimer.disabled = true;
    resetButton.disabled =true;
    if (!startTime) {
        startTime = Date.now() // 처음 시작할 때
    }
    else {
        startTime += (Date.now() - endTime) // 재시작할 때
    }
    continueTimer = setInterval(function () {
        let nowTime = new Date(Date.now() - startTime)
        let hours = String(nowTime.getHours() - 9).padStart(2, "0");
        let minutes = String(nowTime.getMinutes()).padStart(2, "0");
        let seconds = String(nowTime.getSeconds()).padStart(2, "0");
        timer.innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000)
}

function pauseTimer() {
    startButton.disabled = false;
    totalTimeAddButtonInTimer.disabled = false;
    resetButton.disabled=false;
    if (continueTimer) {
        clearInterval(continueTimer)
        endTime = Date.now() // STOP시점의 시간 저장
    }
}

function resetTimer() {
    startButton.disabled = false;
    totalTimeAddButtonInTimer.disabled = false;
    timer.innerText = "00:00:00";
    startTime = 0;
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);