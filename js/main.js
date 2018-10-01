let canvas = document.getElementById("game");
let canvasContext = canvas.getContext('2d');
let canvasWidth = canvas.width = 800;
let canvasHeight = canvas.height = 600;
let playerX = canvasWidth/ 2, playerY = 20;
let gravity = .1;

window.onload = function(){
    update();
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
}

let player = new Player(playerX, playerY, 0, 0 );

function drawAll(){
    drawMap();
    player.draw();

}

function moveAll(){
    player.move();
}

function update(){
    canvasContext.clearRect(0,0, canvasWidth, canvasHeight);
    drawRect(0,0, canvasWidth, canvasHeight, 'black');
    drawAll();
    moveAll();
    requestAnimationFrame(update);
}