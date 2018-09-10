var canvas = document.getElementById("game");
var canvasContext = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var fps = 1000/30;
var playerX = canvasWidth/ 2, playerY = canvasHeight/ 2;
var holdLeft=holdRight=holdJump=holdDown= false;

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

function update(){
    drawRect(0,0, canvasWidth, canvasHeight, 'black');
    drawRect(playerX, playerY, 10, 20, 'white');
    drawRect(0, canvasHeight - 20, canvasWidth, 20, 'green');
}