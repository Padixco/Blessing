// Popup asking for confirmation
window.onload = function() {
    const name = prompt("Are you Blessing? (yes/no)");
    if (name.toLowerCase() !== 'yes') {
        document.body.innerHTML = "<h1>Access Denied</h1><p>This page is for Blessing only!</p>";
    } else {
        // Start confetti animation
        setInterval(createConfetti, 200);
    }
};

// Confetti animation
function createConfetti() {
    const container = document.querySelector('.container');
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    container.appendChild(confetti);
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}