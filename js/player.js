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
    if (moveLeft) {
        player.velocity_x -= .1;
    } else if (moveRight) {
        player.velocity_x += .1;
    } else {
        player.velocity_x = 0;
    }

    player.x += player.velocity_x;
}
