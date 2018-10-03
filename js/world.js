world = {
    columns: 13,
    rows: 10,
    tile_size: 64,
    map: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,6,0,0,0,
        0,0,0,6,0,0,6,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,8,1,
        0,0,0,0,0,0,0,0,0,0,8,0,0,
        0,0,0,0,0,0,0,0,0,8,0,0,0,
        1,1,1,1,1,1,1,1,1,1,1,1,1,
        0,0,0,0,0,0,0,0,0,0,0,0,0
    ],
    //collision is placed inside the world object because the tile numbers are directly related to how the collisions are detected
    collision: {

        offset:0.001,

        /* A platform tile with a flat top surface. */
        1:function(object, column, row) {

          this.collideTop(object, row);

        },

        /* A platform tile with a flat right surface. */
        2:function(object, column, row) {

          this.collideRight(object, column);

        },

        /* A platform tile with a flat bottom surface. */
        3:function(object, column, row) {

          this.collideBottom(object, row);

        },

        /* A platform tile with a flat left surface. */
        4:function(object, column, row) {

          this.collideLeft(object, column);

        },

        /* A platform tile with flat top, right, bottom, and left surfaces. */
        5:function(object, column, row) {

          if (this.collideTop(object, row)) return;
          if (this.collideLeft(object, column)) return;
          if (this.collideRight(object, column)) return;
          this.collideBottom(object, row);

        },

        /* A half height platform tile residing in the bottom half of the tile space
        with flat top, right, bottom, and left surfaces. */
        6:function(object, column, row) {

          if (this.collideTop(object, row, world.tile_size * 0.5)) return;

          if (object.y + object.height > row * world.tile_size + world.tile_size * 0.5) {

            if (this.collideLeft(object, column)) return;
            if (this.collideRight(object, column)) return;

          }

          this.collideBottom(object, row);

        },

        /* A half height platform tile residing in the bottom half of the tile space
        with a flat top surface. */
        7:function(object, column, row) {

          this.collideTop(object, row, world.tile_size * 0.5);

        },

        /* A slope tile starting in the bottom left corner and rising to the top right
        corner of the tile space that only pushes objects up out of it. This is not
        a platform tile, it is a solid tile. */
        8:function(object, column, row) {

          let current_x = object.x + object.width - column * world.tile_size;

          let top = -1 * current_x + world.tile_size + row * world.tile_size;

          if (current_x > world.tile_size) {

            object.jumping = false;
            object.y_velocity = 0;
            object.y = row * world.tile_size - object.height - this.offset;

          } else if (object.y + object.height > top) {

            object.jumping = false;
            object.y_velocity = 0;
            object.y = top - object.height - this.offset;

          }

        },

        /* A slope tile starting in the bottom left corner and rising to the top right
        corner of the tile space. */
        9:function(object, column, row) {

          this.collideSlopeTop(object, column, row, -1, world.tile_size);

        },

        /* A slope tile starting in the top left corner and declining to the bottom
        right corner of the tile space. */
        10:function(object, column, row) {

          this.collideSlopeTop(object, column, row, 1, 0);

        },

        /* A half height slope tile starting in the bottom left corner and rising to
        the middle right side of the tile space. */
        11:function(object, column, row) {

          this.collideSlopeTop(object, column, row, -0.5, world.tile_size);

        },

        /* A half height slope tile starting in the middle left side and declining
        to the bottom right corner of the tile space. */
        12:function(object, column, row) {

          this.collideSlopeTop(object, column, row, 0.5, world.tile_size * 0.5);

        },

        /* A slope tile starting in the top left corner and declining to the bottom
        right corner of the tile space, with flat surfaces on the bottom and left sides. */
        13:function(object, column, row) {

          if (this.collideSlopeTop(object, column, row, 1, 0)) return;
          if (this.collideLeft(object, column)) return;

          let bottom = row * world.tile_size + world.tile_size;
          let right = column * world.tile_size + world.tile_size;

          if (object.x < right && object.x_old >= right && object.y < bottom && object.y + object.height > bottom) {

            object.x_velocity = 0;
            object.x = right;

          }

          this.collideBottom(object, row);

        },

        /* A half height curve tile that simply pushes the object up when collision is detected. */
        14:function(object, column, row) {


          let x = (object.x + object.width * 0.5) - (column * world.tile_size + world.tile_size * 0.5);

          let y_vertex = row * world.tile_size + world.tile_size * 0.5;

          let coefficient = world.tile_size / ((world.tile_size * world.tile_size) / 2);


          let top = coefficient * x * x + y_vertex;

          if (object.y + object.height > top) {

            object.jumping = false;
            object.y_velocity = 0;
            object.y = top - object.height - this.offset;

          }

        },

        collideBottom:function(object, row, y_offset = world.tile_size) {

          let bottom = row * world.tile_size + y_offset;

          if (object.y < bottom && object.y_old >= bottom) {

            object.y_velocity = 0;
            object.y = bottom + this.offset;

            return true;

          } return false;

        },

        collideLeft:function(object, column) {

          let left = column * world.tile_size;

          if (object.x + object.width > left && object.x_old + object.width <= left) {

            object.x_velocity = 0;
            object.x = left - object.width - this.offset;

            return true;

          } return false;

        },

        collideRight:function(object, column) {

          let right = column * world.tile_size + world.tile_size;

          if (object.x < right && object.x_old >= right) {

            object.x_velocity = 0;
            object.x = right;

            return true;

          } return false;

        },

        collideTop:function(object, row, y_offset = 0) {

          let top = row * world.tile_size + y_offset;

          if (object.y + object.height > top && object.y_old + object.height <= top) {

            object.jumping = false;
            object.y_velocity = 0;
            object.y = top - object.height - this.offset;

            return true;

          } return false;

        },

        /* This function handles collision with slope tiles on the y axis. */
        collideSlopeTop:function(object, column, row, slope, y_offset) {

          let origin_x = column * world.tile_size;
          let origin_y = row * world.tile_size + y_offset;
          let current_x = (slope < 0) ? object.x + object.width - origin_x : object.x - origin_x;
          let current_y = object.y + object.height - origin_y;
          let old_x = (slope < 0) ? object.x_old + object.width - origin_x : object.x_old - origin_x;
          let old_y = object.y_old + object.height - origin_y;
          let current_cross_product = current_x * slope - current_y;
          let old_cross_product     = old_x * slope - old_y;
          let top = (slope < 0) ? row * world.tile_size + world.tile_size + y_offset * slope : row * world.tile_size + y_offset;

          if ((current_x < 0 || current_x > world.tile_size) && (object.y + object.height > top && object.y_old + object.height <= top || current_cross_product < 1 && old_cross_product > -1)) {

            object.jumping = false;
            object.y_velocity = 0;
            object.y = top - object.height - this.offset;

            return true;

          } else if (current_cross_product < 1 && old_cross_product > -1) {

            object.jumping = false;
            object.y_velocity = 0;
            object.y = row * world.tile_size + slope * current_x + y_offset - object.height - this.offset;

            return true;

          } return false;

        },

        handleCollision:function(object, world) {

          var column, row, value;

          /* TEST TOP */

          column = Math.floor(object.x / world.tile_size);// The column under the left side of the object:
          row    = Math.floor(object.y / world.tile_size);// The row under the top side of the object:
          value  = world.map[row * world.columns + column];// We get the tile value under the top left corner of the object:

          if (value != 0) this[value](object, column, row);// If it's not a walkable tile, we do narrow phase collision.

          column = Math.floor((object.x + object.width) / world.tile_size);// The column under the right side of the object:
          value  = world.map[row * world.columns + column];// Value under the top right corner of the object.

          if (value != 0) this[value](object, column, row);

          /* TEST BOTTOM */

          column = Math.floor(object.x / world.tile_size);// The column under the left side of the object:
          row    = Math.floor((object.y + object.height) / world.tile_size);// The row under the bottom side of the object:
          value  = world.map[row * world.columns + column];

          if (value != 0) this[value](object, column, row);

          column = Math.floor((object.x + object.width) / world.tile_size);// The column under the right side of the object:
          value  = world.map[row * world.columns + column];

          if (value != 0) this[value](object, column, row);

          /* TEST LEFT */

          column = Math.floor(object.x / world.tile_size);// The column under the left side of the object:
          row    = Math.floor(object.y / world.tile_size);// Top side row:
          value  = world.map[row * world.columns + column];

          if (value != 0) this[value](object, column, row);

          row = Math.floor((object.y + object.height) / world.tile_size);// Bottom side row:
          value = world.map[row * world.columns + column];

          if (value != 0) this[value](object, column, row);

          /* TEST RIGHT */

          column = Math.floor((object.x + object.width) / world.tile_size);// The column under the right side of the object:
          row    = Math.floor(object.y / world.tile_size);// Top side row:
          value  = world.map[row * world.columns + column];

          if (value != 0) this[value](object, column, row);

          row = Math.floor((object.y + object.height) / world.tile_size);// Bottom side row:
          value = world.map[row * world.columns + column];

          if (value != 0) this[value](object, column, row);

        }
      }
    };


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
