let countdownInterval;

const startCountdown = () => {
    const days = parseInt(document.getElementById('daysInput').value);
    const hours = parseInt(document.getElementById('hoursInput').value);
    const minutes = parseInt(document.getElementById('minutesInput').value);

    const countdownTime = (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000);

    const countdownDate = new Date().getTime() + countdownTime;

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').innerHTML = 'Countdown expired';
            return;
        }

        const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = daysRemaining.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hoursRemaining.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutesRemaining.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = secondsRemaining.toString().padStart(2, '0');
    }, 1000);
};
