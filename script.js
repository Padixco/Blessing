// Start confetti and balloons when the page loads
window.onload = function() {
  alert("🎉 Happy Birthday, Angel! 🎉")
  startConfetti();
  playBalloons();
  const music = document.getElementById('backgroundMusic');
  music.muted = false; // Unmute the audio once the page loads
  music.play(); // Ensure playback starts
};

function createConfetti() {
    const colors = ['#FF0B6D', '#FFB800', '#1BFF00', '#00D6FF', '#FF00E1'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.position = 'absolute';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 'px';
        confetti.style.height = Math.random() * 10 + 'px';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        confetti.style.opacity = Math.random();
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.transform = `translateY(${Math.random() * 100 + 50}px)`;
            confetti.style.transition = 'transform 3s ease-in';
            confetti.style.opacity = 0;
        }, 100);
    }
}

// Trigger confetti on page load
window.onload = function () {
    createConfetti();
};

}
