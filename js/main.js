let canvas = document.getElementById("game");
let canvasContext = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let fps = 1000/30;
let playerX = canvasWidth/ 2, playerY = canvasHeight/ 2;
let holdLeft=holdRight=holdJump=holdDown= false;
let gravity = .05;
let playerXVelocity=playerYVelocity = 0;
let onGround 

window.onload = function(){
    setInterval(update, 1000/30);
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
}

function drawRect(startX, startY, width, height, color ) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(startX, startY, width, height);
}

function keyUp(evt) {
    switch(evt.keyCode) {
        case 37:
            holdLeft = false;
            break;
        case 38:
            holdJump = false;
            break;
        case 39:
            holdRight = false;
            break;
        case 40:
            holdDown = false;
            break;
    }
}

function keyDown(evt) {
    switch(evt.keyCode) {
        case 37:
            holdLeft = true;
            break;
        case 38:
            holdJump = true;
            break;
        case 39:
            holdRight = true;
            break;
        case 40:
            holdDown = true;
            break;
    }
}

function playerMove() {
    if(holdLeft) {
        playerXVelocity = -2;
    }
    if(holdRight) {
        playerXVelocity = 2;
    }
    playerX += playerXVelocity;
}

function drawAll() {
    let background = new drawRect(0,0, canvasWidth, canvasHeight, 'black');
    let player = new drawRect(playerX, playerY, 10, 20, 'white');
    let platform = new drawRect(0, canvasHeight - 20, canvasWidth, 20, 'green');
}

function moveAll() {
    playerMove();
}

function update(){
    drawAll();
    moveAll();
}