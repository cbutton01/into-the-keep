world = {
    map: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        5,5,5,5,5,5,5,5,5,5,5,4,0,0,2,5,5,5,5,5,
        1,1,1,1,1,1,1,1,1,1,1,1,5,5,1,1,1,1,1,1
    ],
    columns:20,
    rows:15,
    tile_size:40,

    //collision is placed inside the world object because the tile numbers are directly related to how the collisions are detcted
    collision: {

        1:function(object, row, column) {

        if (this.topCollision(object, row)) { return; }// if no top collision
        this.rightCollision(object, column);           // try right side collision

        },

        // the 2 tile type has a top and a left side to collide with
        2:function(object, row, column) {

        if (this.topCollision(object, row)) { return; }
        this.leftCollision(object, column);

        },

        // the 3 tile type only blocks movement through the right side
        3:function(object, row, column) {

        this.rightCollision(object, column);

        },

        // the 4 tile type has collision on all sides but the bottom
        4:function(object, row, column) {

        if (this.topCollision(object, row)) { return; }// you only want to do one
        if (this.leftCollision(object, column)) { return; }// of these collision
        this.rightCollision(object, column);// responses. that's why there are if statements

        },

        // the 5 tile only does collision if the object falls through the top
        5:function(object, row, column) {

        this.topCollision(object, row);

        },
        leftCollision(object, column) {

        if (object.velocity_x > 0) {// If the object is moving right

            var left = column * world.tile_size;// calculate the left side of the collision tile

            if (object.x + object.width * 0.5 > left && object.old_x <= left) {// If the object was to the right of the collision object, but now is to the left of it

            object.velocity_x = 0;// Stop moving
            object.x = object.old_x = left - object.width * 0.5 - 0.001;

            return true;

            }

        }

        return false;

        },

        rightCollision(object, column) {

        if (object.velocity_x < 0) {

            var right = (column + 1) * world.tile_size;

            if (object.x + object.width * 0.5 < right && object.old_x + object.width * 0.5 >= right) {

            object.velocity_x = 0;
            object.old_x = object.x = right - object.width * 0.5;

            return true;

            }

        }

        return false;

        },

        topCollision(object, row) {

        if (object.velocity_y > 0) {

            var top = row * world.tile_size;

            if (object.y + object.height > top && object.old_y + object.height <= top) {

            object.jumping = false;
            object.velocity_y = 0;
            object.old_y = object.y = top - object.height - 0.01;

            return true;

            }

        }

        return false;

        }

    }
}

function drawMap(){
    for (let index = world.map.length - 1; index > -1; -- index) {

        canvasContext.fillStyle = (world.map[index] > 0)?("#0099" + world.map[index] + "f"):"#303840";
        canvasContext.fillRect((index % world.columns) * world.tile_size, Math.floor(index / world.columns) * world.tile_size, world.tile_size, world.tile_size);

      }
}