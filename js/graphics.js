const PLAYER_PIC = new Image(64, 64);

PLAYER_PIC.src = "assets/img/character01-test.png";

let playerPicLoaded = false;

PLAYER_PIC.onload = function() {
    playerPicLoaded = true;
};

function drawRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}
