let canvas = document.getElementById("game");
let canvasContext = canvas.getContext('2d');
let canvasWidth = canvas.width = 800;
let canvasHeight = canvas.height = 600;
let playerX = canvasWidth/ 2, playerY = canvasHeight/ 2;
let moveLeft = moveRight = jump = false;



window.onload = function(){
    update();
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
}

function drawRect(x, y, width, height, color ) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}

function keyDown(evt){
    let keyPos = evt.key;
    if(keyPos == 'a') {
        moveLeft = true;
    }
    if(keyPos == 'd'){
        moveRight = true;
    }
    
    
}

function keyUp(evt){
    let keyPos = evt.key;
    if(keyPos == 'a'){
        moveLeft = false;
    }
    if(keyPos == 'd'){
        moveRight = false;
    }
}

class Player {
    constructor(x, y, playerSpeedX, playerSpeedY) {
        this.x = x;
        this.y = y;
        this.speedX = playerSpeedX;
        this.speedY = playerSpeedY;
        this.width = 10;
        this.height = 20;
        this.draw = function(){
            drawRect(this.x, this.y, this.width, this.height, 'white');
        }
        this.move = function(){
            // debugger
            if(moveLeft){
                this.speedX = -3;
            } else if(moveRight) {
                this.speedX = 3;
            } else {
                this.speedX = 0;
            }
            
            this.x += this.speedX;
        }
    }
}

function update(){
    canvasContext.clearRect(0,0, canvasWidth, canvasHeight);
    drawRect(0,0, canvasWidth, canvasHeight, 'black');
    let player = new Player(400 - 5, 300 - 10, 0, 0 );
    player.draw();
    player.move();
    requestAnimationFrame(update);
}