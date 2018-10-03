player = {

    sprite: PLAYER_PIC,
    jumping:   true,
    height:    world.tile_size,
    width:     world.tile_size/2,
    x:         world.tile_size * 4 - world.tile_size * 0.5 + 2,
    x_old:     world.tile_size * 4 - world.tile_size * 0.5 + 2,
    x_velocity:0,
    y:         world.tile_size * 4,
    y_old:     world.tile_size * 8,
    y_velocity:0,

  };

function drawPlayer() {
    if (playerPicLoaded) {
        canvasContext.drawImage(player.sprite, player.x, player.y);
    }
    // drawRect(player.x,player.y, player.width,player.height, 'red');
    // drawRect(player.x,player.y ,2,2, 'white');
    // drawRect(player.x + player.width - 2,player.y ,2,2, 'white');
    // drawRect(player.x,player.y + player.height - 2 ,2,2, 'white');
    // drawRect(player.x + player.width - 2,player.y + player.height -2 ,2,2, 'white');
}

function movePlayer() {
    if (controller.up && !player.jumping) {

        player.jumping = true;
        player.y_velocity = -27;

      }

      if (controller.left) {

        player.x_velocity -= 0.5;

      }

      if (controller.right) {

        player.x_velocity += 0.5;

      }

      player.x_old = player.x;
      player.y_old = player.y;

      player.y_velocity += 1;

      player.x += player.x_velocity;
      player.y += player.y_velocity;

      player.x_velocity *= 0.89;
      player.y_velocity *= 0.9;

      // Collision detection and response handling with the walls:

      if (player.y < 0) {

        player.y_velocity = 0;
        player.y = 0;

      } else if (player.y + player.height > canvasHeight) {

        player.jumping = false;
        player.y_velocity = 0;
        player.y = canvasHeight - player.height - 0.001;

      }

      if (player.x < 0) {

        player.x_velocity = 0;
        player.x = 0;

      } else if (player.x + player.width > canvasWidth) {

        player.x_velocity = 0;
        player.x = canvasWidth - player.width - 0.001;

      }

      // Handle collision with world AFTER moving the player.
      world.collision.handleCollision(player, world);
}
