 const year = 2025;

function getStartTime() {
    const now = new Date();
    const start = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        20, 45, 0
    );
    return start.getTime();
}

const endTime = new Date(year, 2, 14, 16, 0, 0).getTime(); 

function updateCountdown() {
    const now = new Date().getTime();
    const timer = document.getElementById("timer");
    const startTime = getStartTime();

    if (now < startTime) {
        timer.innerText = "Countdown hasn’t started yet";
        return;
    }

    const distance = endTime - now;

    if (distance <= 0) {
        timer.innerText = "Time’s up!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    timer.innerText =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();