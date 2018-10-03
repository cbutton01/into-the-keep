camera = {
    x: 0,
    y: 0,
    width: 800,
    height: 600,
    minX: Math.floor(this.x),
    minY: Math.floor(this.y),
    maxX: Math.ceil(this.width),
    maxY: Math.ceil(this.height)
  }

function drawMap() {
  for (let index = world.map.length - 1; index > -1; --index) {
      let value = world.map[index] - 1;
      let sourceX = (value % 14) * 64;
      let sourceY = Math.floor(value / 14) * 64;
      let destX = (index % world.columns) * 64;
      let destY = Math.floor(index / world.columns) * 64;
      canvasContext.drawImage(TILE_SET_TEST, sourceX,sourceY, 64,64, destX,destY, 64,64);
  }
}


// var startCol = Math.floor( camera.x / world.tile_size);
//     var endCol = startCol + ( camera.width / world.tile_size);
//     var startRow = Math.floor( camera.y / world.tile_size);
//     var endRow = startRow + ( camera.height / world.tile_size);
//     var offsetX = - camera.x + startCol * world.tile_size;
//     var offsetY = - camera.y + startRow * world.tile_size;
// function drawMap(){
// for (var c = startCol; c <= endCol; c++) {
//   for (var r = startRow; r <= endRow; r++) {
//       // var tile = map.getTile(c, r);
//       var x = (c - startCol) * world.tile_size + offsetX;
//       var y = (r - startRow) * world.tile_size + offsetY;
//       if (tile !== 0) { // 0 => empty tile
//         canvasContext.drawImage(TILE_SET_TEST, sourceX,sourceY, 64,64, destX,destY, 64,64);
//       }
//   }
// }
// }