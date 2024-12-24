const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

function createSnowflake() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    opacity: Math.random(),
    speed: Math.random() * 3 + 1,
    radius: Math.random() * 4 + 1,
  };
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  ctx.beginPath();
  snowflakes.forEach((snowflake) => {
    ctx.moveTo(snowflake.x, snowflake.y);
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
  });
  ctx.fill();
  updateSnowflakes();
}

function updateSnowflakes() {
  snowflakes.forEach((snowflake) => {
    snowflake.y += snowflake.speed;
    if (snowflake.y > canvas.height) {
      snowflake.y = 0;
      snowflake.x = Math.random() * canvas.width;
    }
  });
}

function playSnow() {
  if (snowflakes.length === 0) {
    for (let i = 0; i < 200; i++) {
      snowflakes.push(createSnowflake());
    }
  }
  setInterval(drawSnowflakes, 30);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  snowflakes = [];
});
