class Grid {
    constructor(x, y, width, height, cordX, cordY) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xCord = cordX;
        this.yCord = cordY;
    }

}

class PositionVector {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;

    }

}
class StepVector {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

}