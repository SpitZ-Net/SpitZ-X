const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

// Ensure the snow sits behind your panels but covers the background
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.pointerEvents = 'none'; // Lets you click buttons through the canvas
canvas.style.zIndex = '-1';

let width, height;
let snowflakes = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function createSnowflakes() {
    for (let i = 0; i < 150; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.5,
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.1
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    
    snowflakes.forEach(flake => {
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
    });
    
    ctx.fill();
    update();
    requestAnimationFrame(draw);
}

function update() {
    snowflakes.forEach(flake => {
        flake.y += flake.speedY;
        flake.x += flake.speedX;

        // Reset snowflake to top when it falls off screen
        if (flake.y > height) {
            flake.y = -5;
            flake.x = Math.random() * width;
        }
    });
}

createSnowflakes();
draw();
