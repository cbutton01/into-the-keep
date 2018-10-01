let canvas = document.getElementById("game");
let canvasContext = canvas.getContext('2d');
let canvasWidth = canvas.width = 800;
let canvasHeight = canvas.height = 600;
let playerX = canvasWidth/ 2, playerY = canvasHeight/ 2;
let moveLeft = moveRight = jump = onGround = false;
let gravity = .1;

window.onload = function(){
    update();
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
}

let player = new Player(playerX, playerY, 0, 0 );

function drawAll(){
    player.draw();
    for (var column = 0; column < map.columns; column++) {
        for (var row = 0; row < map.rows; row++) {
          var tile = map.getTile(column, row);
          var x = column * map.tileSize;
          var y = row * map.tileSize;
          if(tile === 1){
              drawRect(x,y, tileSize,tileSize, 'white');
          }
        }
      }
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