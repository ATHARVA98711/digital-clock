// script.js
function updateClock() {
    const now = new Date();
    
    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if values are less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format the time string
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Update the DOM
    document.getElementById('clock').textContent = timeString;
}

// Initialize the clock immediately
updateClock();

// Update every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);