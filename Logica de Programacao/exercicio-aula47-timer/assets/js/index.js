function getHoursBySeconds(seconds) {
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT',
    });
}

(() => {
    const timer = document.querySelector('.relogio');
    const startBtn = document.querySelector('.iniciar');
    const pauseBtn = document.querySelector('.pausar');
    const resetBtn = document.querySelector('.zerar');
    let seconds = 0;
    let timerInterval;

    function startTimer() {
        timerInterval = setInterval(() => {
            seconds++;
            timer.innerHTML = getHoursBySeconds(seconds);
        }, 1000);

        return timerInterval;
    }

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            clearInterval(timerInterval);
            timer.style.color = '#000';
            startTimer();
        })
    }

    if (pauseBtn) {
        pauseBtn.addEventListener('click', () => {
            clearInterval(timerInterval);
            timer.style.color = 'red';
        })
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            clearInterval(timerInterval);
            timer.innerHTML = '00:00:00';
            timer.style.color = '#000';
            seconds = 0;
        })
    }

})();