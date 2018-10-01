class Player {
    constructor(x, y, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.width = PLAYER_PIC.width;
        this.height = PLAYER_PIC.height;
        this.draw = function() {
            if (playerPicLoaded) {
                canvasContext.drawImage(PLAYER_PIC, this.x, this.y);
            }
        };

        this.checkGround = function() {
            for (var y = 0; y < mapH; y++) {
                for (var x = 0; x < mapW; x++) {
                    switch (gameMap[y * mapW + x]) {
                        case 1:
                            if (
                                this.y >= y * tileH - this.height &&
                                this.x == x * tileW
                            ) {
                                onGround = true;
                            }
                            break;
                        default:
                            null;
                    }
                }
            }
        };

        this.move = function() {
            this.checkGround();

            if (moveLeft && this.x + this.speedX > 0) {
                this.speedX = -3;
            } else if (moveRight && this.x + this.width < canvasWidth) {
                this.speedX = 3;
            } else {
                this.speedX = 0;
            }

            if (this.y + this.height < canvasHeight && !onGround) {
                this.speedY = 10;
                onGround = false;
            } else if (onGround) {
                this.speedY = 0;
            }

            // if(this.y <= canvasHeight - 150){
            //     jump = false;
            // }

            if (jump) {
                this.speedY = -10;
                onGround = false;
            }

            if (!onGround) {
                this.speedY += gravity;
            }
            this.x += this.speedX;
            this.y += this.speedY;
        };
    }
}
