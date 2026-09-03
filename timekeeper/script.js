let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {

    const currentTime = Date.now() - startTime + elapsedTime;

    let milliseconds = currentTime % 1000;

    let seconds = Math.floor(currentTime / 1000) % 60;

    let minutes = Math.floor(currentTime / 60000) % 60;

    let hours = Math.floor(currentTime / 3600000);

    display.textContent =
        String(hours).padStart(2,"0") + ":" +
        String(minutes).padStart(2,"0") + ":" +
        String(seconds).padStart(2,"0") + "." +
        String(milliseconds).padStart(3,"0");
}

// Start
document.getElementById("start").addEventListener("click",()=>{

    if(!running){

        running = true;

        startTime = Date.now();

        timerInterval = setInterval(updateDisplay,10);

    }

});

// Pause
document.getElementById("pause").addEventListener("click",()=>{

    if(running){

        running = false;

        clearInterval(timerInterval);

        elapsedTime += Date.now() - startTime;

    }

});

// Reset
document.getElementById("reset").addEventListener("click",()=>{

    running = false;

    clearInterval(timerInterval);

    startTime = 0;

    elapsedTime = 0;

    display.textContent = "00:00:00.000";

    laps.innerHTML = "";

});

// Lap
document.getElementById("lap").addEventListener("click",()=>{

    if(running){

        const lap = document.createElement("li");

        lap.textContent = "Lap " + (laps.children.length + 1) + " : " + display.textContent;

        laps.appendChild(lap);

    }

});