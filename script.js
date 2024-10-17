const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];
const content = document.getElementById('content');
const music = document.getElementById('birthdayMusic');

// Popup function to ask if it's Blessing
window.onload = function () {
    const isBlessing = confirm("Are you Blessing? 🎂");

    if (isBlessing) {
        content.classList.remove('hidden');
        music.play();
        createConfetti();
        animateConfetti();
    } else {
        alert("Oops! This surprise is for Blessing only. 🎉");
    }
};

// Confetti creation
class Confetti {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedY = Math.random() * 5 + 2;
    }

    update() {
        this.y += this.speedY;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const size = Math.random() * 8 + 4;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiParticles.push(new Confetti(x, y, size, color));
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach((confetti) => {
        confetti.update();
        confetti.draw();
    });
    requestAnimationFrame(animateConfetti);
}