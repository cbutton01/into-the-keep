let canvas = document.getElementById("game");
let canvasContext = canvas.getContext('2d');
let canvasWidth = canvas.width = 800;
let canvasHeight = canvas.height = 600;
let playerX = canvasWidth/ 2, playerY = canvasHeight/ 2;
let moveLeft = moveRight = jump = onGround = false;



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
    if(keyPos == 'w' && onGround){
        jump = true;
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
    if(keyPos == 'w'){
        jump = false;
    }
}

class Player {
    constructor(x, y, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.width = 10;
        this.height = 20;
        this.draw = function(){
            drawRect(this.x, this.y, this.width, this.height, 'red');
        }
        this.move = function(){
            if(moveLeft && this.x + this.speedX > 0){
                this.speedX = -3;
            } else if(moveRight && this.x + this.width < canvasWidth) {
                this.speedX = 3;
            } else {
                this.speedX = 0;
            }
            
            if(this.y + this.height < canvasHeight){
                this.speedY = 10;
            } else if(this.y + this.height >= canvasHeight){
                this.speedY = 0;
                this.y = canvasHeight - this.height;
                onGround = true;
            }
            
            if (jump) {
                this.speedY = -5;
                onGround = false;
            }

            this.x += this.speedX;
            this.y += this.speedY;
            
        }
    }
}

let player = new Player(playerX, playerY, 0, 0 );

function update(){
    canvasContext.clearRect(0,0, canvasWidth, canvasHeight);
    drawRect(0,0, canvasWidth, canvasHeight, 'black');
    player.move();
    player.draw();
    requestAnimationFrame(update);
}