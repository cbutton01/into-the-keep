var canvas = document.getElementById("game");
var canvasContext = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var fps = 1000/30;
var map = [
    0,0,0,0,0,
]

window.onload = function(){
    setInterval(fps, update());
    
}

function update(){
    drawRect(0,0, canvasWidth, canvasHeight, 'black');
    drawRect(canvasWidth/2, canvasHeight/2, 10, 15, 'white');
}

function drawRect(startX, startY, width, height, color ) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(startX, startY, width, height);
}