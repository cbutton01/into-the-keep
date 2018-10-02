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
        player.velocity_y -= 20;
        player.jumping = true;
    }

    if (controller.left) {
        player.velocity_x -= 0.5;
    }

    if (controller.right) {
        player.velocity_x += 0.5;
    }

    //player.velocity_y += 1.5;
    player.x += player.velocity_x;
    player.y += player.velocity_y;
    player.velocity_x *= 0.9;
    player.velocity_y *= 0.9;
}
