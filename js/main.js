let canvas = document.getElementById("game");
let canvasContext = canvas.getContext('2d');
let canvasWidth = canvas.width = 800;
let canvasHeight = canvas.height = 600;
let playerX = canvasWidth/ 2, playerY = canvasHeight/ 2;
let playerSpeedX = 0;
let playerSpeedY = 0;
let moveLeft = moveRight = jump = false;



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

function keyDown(evt){
    let keyPos = evt.key;
    console.log(keyPos);
    if(keyPos = 'a') {
        moveLeft = true;
    }
    
    
}

function keyUp(evt){
    let keyPos = evt.key;
    if(keyPos = 65){
        moveLeft = false;
    }
}

class Player {
    constructor() {
        this.x = playerX;
        this.y = playerY;
        this.speedX = playerSpeedX;
        this.speedY = playerSpeedY;
        this.width = 10;
        this.height = 20;
        this.draw = function(){
            DrawRect(this.x, this.y, this.width, this.height, 'white');
        }
        this.move = function(){
            if(moveLeft){
                console.log(moveLeft);
                
                this.speedX = -3;
            }

            this.x += this.speedX;
        }
    }
}

function update(){
    canvasContext.clearRect(0,0, canvasWidth, canvasHeight);
    let background = new DrawRect(0,0, canvasWidth, canvasHeight, 'black');
    let player = new Player();
    player.draw();
    player.move();

}