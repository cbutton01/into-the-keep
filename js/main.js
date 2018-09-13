let canvas = document.getElementById("game");
let canvasContext = canvas.getContext('2d');
let canvasWidth = canvas.width = window.innerWidth;
let canvasHeight = canvas.height = window.innerHeight;
let fps = 1000/30;
let playerX = canvasWidth/ 2, playerY = canvasHeight/ 2;
let holdLeft=holdRight=holdJump=holdDown= false;
let gravity = .5;
let playerXVelocity=playerYVelocity = 0;
let onGround = false;



window.onload = function(){
    animate();
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
}

function animate() {
    requestAnimationFrame(animate);
    update();
}

function DrawRect(x, y, width, height, color ) {
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
                playerXVelocity = -3;
            break;
        case 38:
            holdJump = true;
                if(onGround){
                    playerYVelocity = -10;
                }
            break;
        case 39:
            holdRight = true;
            playerXVelocity = 3;
            break;
    }
}



function update(){
    canvasContext.clearRect(0,0, canvasWidth, canvasHeight);
    let background = new DrawRect(0,0, canvasWidth, canvasHeight, 'black');
    let player = new DrawRect(playerX - 5, playerY - 20, 10, 20, 'white');


    if(holdLeft) {
        playerX += playerXVelocity;
    } else if (holdRight) {
        playerX += playerXVelocity;
    } else {
        playerXVelocity = 0;
    }

    if(playerY >= canvasHeight) {
        playerY += gravity;
    } else {
        onGround = true;
    }
    
}