document.getElementById('celebrateBtn').addEventListener('click', function () {
    // Запуск анимации шариков
    const balloonContainer = document.createElement('div');
    document.body.appendChild(balloonContainer);
    for (let i = 0; i < 100; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.width = Math.random() * 20 + 10 + 'px';
        balloon.style.height = balloon.style.width;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        balloon.style.animationDuration = Math.random() * 3 + 2 + 's';
        balloonContainer.appendChild(balloon);
    }

    // Запуск анимации салюта
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // Since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
});
