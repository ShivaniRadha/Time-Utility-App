// ------------------ TAB SWITCH ------------------
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// ------------------ DIGITAL CLOCK ------------------
function updateClock() {
    let now = new Date();
    document.getElementById("clock-display").textContent =
        now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// ------------------ STOPWATCH ------------------
let swInterval;
let swTime = 0;

document.getElementById("startSW").onclick = () => {
    if (!swInterval) {
        swInterval = setInterval(() => {
            swTime++;
            let hrs = String(Math.floor(swTime / 3600)).padStart(2, '0');
            let mins = String(Math.floor((swTime % 3600) / 60)).padStart(2, '0');
            let secs = String(swTime % 60).padStart(2, '0');
            document.getElementById("stopwatch-display").textContent =
                `${hrs}:${mins}:${secs}`;
        }, 1000);
    }
};

document.getElementById("stopSW").onclick = () => {
    clearInterval(swInterval);
    swInterval = null;
};

document.getElementById("resetSW").onclick = () => {
    clearInterval(swInterval);
    swInterval = null;
    swTime = 0;
    document.getElementById("stopwatch-display").textContent = "00:00:00";
};

// ------------------ TIMER ------------------
let timerInterval;

document.getElementById("startTimer").onclick = () => {
    let minutes = parseInt(document.getElementById("minutes").value);
    if (isNaN(minutes) || minutes <= 0) return;

    let totalSeconds = minutes * 60;

    timerInterval = setInterval(() => {
        let mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        let secs = String(totalSeconds % 60).padStart(2, '0');
        document.getElementById("timer-display").textContent = `${mins}:${secs}`;

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
        totalSeconds--;
    }, 1000);
};

document.getElementById("resetTimer").onclick = () => {
    clearInterval(timerInterval);
    document.getElementById("timer-display").textContent = "00:00";
};
