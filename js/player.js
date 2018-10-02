player = {
    sprite: PLAYER_PIC,
    width: PLAYER_PIC.width,
    height: PLAYER_PIC.height,
    old_x: 160,
    old_y: 160,
    velocity_x: 0,
    velocity_y: 0,
    x: 400,
    y: 300,
    jumping: false
};

function drawPlayer() {
    if (playerPicLoaded) {
        canvasContext.drawImage(player.sprite, player.x, player.y);
    }
}

function movePlayer() {
    if (controller.up && player.jumping == false) {
        player.velocity_y -= 25;
        player.jumping = true;
    }

    if (controller.left) {
        player.velocity_x -= 0.5;
    }

    if (controller.right) {
        player.velocity_x += 0.5;
    }

    player.velocity_y += 1.5;
    player.x += player.velocity_x;
    player.y += player.velocity_y;
    player.velocity_x *= 0.9;
    player.velocity_y *= 0.9;

    if (player.x < 0) {

        player.velocity_x = 0;
        player.old_x = player.x = 0;

      } else if (player.x + player.width > canvasWidth) {

        player.velocity_x = 0;
        player.old_x = player.x = canvasWidth - player.width;

      }

      if (player.y < 0) {

        player.velocity_y = 0;
        player.old_y = player.y = 0;

      } else if (player.y + player.height > canvasHeight) {

        player.velocity_y = 0;
        player.old_y = player.y = canvasHeight - player.height;

      }

      // calculate the player's x and y tile position in the tile map
      var tile_x = Math.floor((player.x + player.width * 0.5) / world.tile_size);
      var tile_y = Math.floor((player.y + player.height) / world.tile_size);
      // get the value at the tile position in the map
      var value_at_index = world.map[tile_y * world.columns + tile_x];

      // if it's not an empty tile, we need to do narrow phase collision detection and possibly response!
      if (value_at_index != 0) {

        // simply call one of the routing functions in the collision object and pass
        // in values for the collision tile's location in grid/map space
        world.collision[value_at_index](player, tile_y, tile_x);

      }

      tile_x = Math.floor((player.x + player.width * 0.5) / world.tile_size);
      tile_y = Math.floor((player.y + player.height) / world.tile_size);
      value_at_index = world.map[tile_y * world.columns + tile_x];

      if (value_at_index != 0) {

        world.collision[value_at_index](player, tile_y, tile_x);

      }
}
