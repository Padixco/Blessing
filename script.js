document.getElementById('yesButton').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
    startConfetti();
});

function startConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 + 1,
    }));

    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.dx;
            p.y += p.dy;

            if (p.y > canvas.height) p.y = 0;
            if (p.x > canvas.width) p.x = 0;
        });
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
