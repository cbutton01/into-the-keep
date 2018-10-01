let map = {
    rows: 10,
    column: 10,
    tileSize: 20,
    tiles: [
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,0,0,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0
],
getTile: function (col, row) {
    return this.tiles[row * map.column + col];
    }
};

const PLAYER_PIC = new Image(64, 64);
PLAYER_PIC.src = 'assets/img/character01-test.png';
let playerPicLoaded = false;

PLAYER_PIC.onload = function(){
    playerPicLoaded = true;
}

function drawRect(x, y, width, height, color ) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}