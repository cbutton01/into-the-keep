let canvas = document.getElementById("game");
let canvasContext = canvas.getContext("2d");
let canvasWidth = (canvas.width = 800);
let canvasHeight = (canvas.height = 600);
let playerX = canvasWidth / 2,
    playerY = 20;
let gravity = 0.9;

window.onload = function() {
    update();
    document.addEventListener("keydown", controller.keyListener);
    document.addEventListener("keyup", controller.keyListener);
};

function drawAll() {
    drawMap();
    drawPlayer();
}

function moveAll() {
    movePlayer();
}

function update() {
    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
    drawRect(0, 0, canvasWidth, canvasHeight, "#494949");
    drawAll();
    moveAll();
    requestAnimationFrame(update);
}
