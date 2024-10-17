// Start confetti and balloons when the page loads
window.onload = function() {
  alert("🎉 Happy Birthday, Angel! 🎉")
  startConfetti();
  playBalloons();
  const music = document.getElementById('backgroundMusic');
  music.muted = false; // Unmute the audio once the page loads
  music.play(); // Ensure playback starts
};

// Confetti effect
function startConfetti() {
  const confettiColors = ['#ff9a9e', '#fad0c4', '#fbc2eb', '#a18cd1'];
  for (let i = 0; i < 150; i++) {
    let confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];
    document.body.appendChild(confetti);

    confetti.animate(
            [
        { transform: 'translateY(0)' },
        { transform: 'translateY(100vh)' }
            ],
      {
        duration: Math.random() * 3000 + 2000,
        iterations: Infinity
      }
    );
  }
}

// Balloon animation
function playBalloons() {
  const balloonContainer = document.querySelector('.balloons');
  const colors = ['#ff7eb9', '#ff65a3', '#7afcff', '#feff9c'];

  for (let i = 0; i < 30; i++) {
    let balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${Math.random() * 2 + 4}s`;
    balloonContainer.appendChild(balloon);
  }
}
