let moveLeft = false;
let moveRight = false;

function keyDown(evt) {
    let keyPos = evt.key;

    if (keyPos == "a") {
        moveLeft = true;
    }
    if (keyPos == "d") {
        moveRight = true;
    }
    if (keyPos == "w") {
        player.jumping = true;
    }
}

function keyUp(evt) {
    let keyPos = evt.key;
    if (keyPos == "a") {
        moveLeft = false;
    }
    if (keyPos == "d") {
        moveRight = false;
    }
    if (keyPos == "w") {
        player.jumping = false;
    }
}
