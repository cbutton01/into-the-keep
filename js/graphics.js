const PLAYER_PIC = new Image();
const TILE_SET_TEST = new Image();
TILE_SET_TEST.src = "assets/img/tilesettest.png"
PLAYER_PIC.src = "assets/img/character01-test.png";

let playerPicLoaded = false;

PLAYER_PIC.onload = function() {
    playerPicLoaded = true;
};

function drawRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}
