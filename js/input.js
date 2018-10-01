function keyDown(evt){
    let keyPos = evt.key;
    
    if(keyPos == 'a') {
        moveLeft = true;
    }
    if(keyPos == 'd'){
        moveRight = true;
    }
    if(keyPos == 'w' && onGround){
        jump = true;
    }
}

function keyUp(evt){
    let keyPos = evt.key;
    if(keyPos == 'a'){
        moveLeft = false;
    }
    if(keyPos == 'd'){
        moveRight = false;
    }
    if(keyPos == 'w'){
        jump = false;
    }
}