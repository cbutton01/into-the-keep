controller = {
    left: false,
    right: false,
    up: false,
    keyListener: function(event) {
        let keyState = event.type == "keydown" ? true : false;

        switch (event.keyCode) {
            case 65: //left
                controller.left = keyState;
                break;
            case 87: //up
                controller.up = keyState;
                break;
            case 32:
                controller.up = keyState;
            case 68: //right
                controller.right = keyState;
                break;
            default:
                null;
        }
    }
};
