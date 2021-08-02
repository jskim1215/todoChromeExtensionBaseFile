const timer = document.querySelector("h3#timer");
const startButton = document.querySelector("#start-timer");
const stopButton = document.querySelector("#stop-timer");

// timer 부터 시작하면 됨

function startTimer() {
    console.log("1");
    startButton.onClick = null;
    stopButton.onClick = stop;
    const start = Date.now();
    setInterval(Timer(start), 1000);
}

function Timer(startTime) {
    console.log("2");
    let deltaOfTime = Math.floor((Date.now() - startTime) / 1000);
    let calHours = Math.floor(deltaOfTime / 3600);
    let calMinutes = Math.floor((deltaOfTime - (calHours * 3600)) / 60);
    let calSeconds = deltaOfTime - (calHours * 3600) - (calMinutes * 60);

    const hours = String(calHours).padStart(2, "0");
    const minutes = String(calMinutes).padStart(2, "0");
    const seconds = String(calSeconds).padStart(2, "0");
    timer.innerText = `${hours}:${minutes}:${seconds}`;
}

function stopTimer() {
    clearInterval(startTimer);
    startButton.onClick = start;
}

startButton.addEventListener("click",startTimer);

