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

function drawRect(x, y, width, height, color ) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
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
                if(onGround){
                    playerYVelocity = -10;
                }
            break;
        case 39:
            holdRight = true;
            break;
    }
}

function playerMove() {

    if(playerY >= platform.y) {
        onGround = true;
    } else {
        playerYVelocity += gravity;
    }

    if(holdLeft) {
        playerXVelocity = -2;
    }
    if(holdRight) {
        playerXVelocity = 2;
    }
    playerX += playerXVelocity;
    if(onGround) {
        playerXVelocity *= .8;
    } else {
        playerYVelocity += gravity;
    }
}

function drawAll() {
    let background = new drawRect(0,0, canvasWidth, canvasHeight, 'black');
    let player = new drawRect(playerX - 5, playerY - 20, 10, 20, 'white');
    let platform = new drawRect(0, canvasHeight - 20, canvasWidth, 20, 'green');
}

function moveAll() {
    playerMove();
}

function update(){
    drawAll();
    moveAll();
}