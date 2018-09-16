let canvas = document.getElementById("game");
let canvasContext = canvas.getContext('2d');
let canvasWidth = canvas.width = 800;
let canvasHeight = canvas.height = 600;
let playerX = canvasWidth/ 2, playerY = canvasHeight/ 2;
let playerSpeedX = 0;
let playerSpeedY = 0;



window.onload = function(){
    animate();
    // document.addEventListener("keydown", keyDown);
    // document.addEventListener("keyup", keyUp);
}

function animate() {
    requestAnimationFrame(animate);
    update();
}

function DrawRect(x, y, width, height, color ) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}


// function keyDown(evt) {
//     switch(evt.keyCode) {
//         case 37:
//             holdLeft = true;
//                 playerXVelocity = -3;
//                 console.log('moving left');
                
//             break;
//         case 38:
//             holdJump = true;
//                 if(onGround){
//                     playerYVelocity = -10;
//                 }
//             console.log('jumping');
//             break;
//         case 39:
//             holdRight = true;
//             playerXVelocity = 3;
//             console.log('moving right');
//             break;
//     }
// }

// function keyUp(evt) {
//     switch(evt.keyCode) {
//         case 37:
//             holdLeft = false;
//             break;
//         case 38:
//             holdJump = false;
//             if(!onGround){
//                 playerYVelocity += gravity;
//                 console.log('falling!');
//             }
//             break;
//         case 39:
//             holdRight = false;
//             break;
//         case 40:
//             holdDown = false;
//             break;
//     }
// }

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

        }
    }

    

}

function update(){
    canvasContext.clearRect(0,0, canvasWidth, canvasHeight);
    let background = new DrawRect(0,0, canvasWidth, canvasHeight, 'black');
    let player = new Player();
    player.draw();
    
}