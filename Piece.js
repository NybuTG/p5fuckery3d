class Piece {
    constructor(color, pos, sprite) {
        this.color = color;
        this.pos = pos;
        this.sprite = set[`${sprite}${`${this.color[0].toUpperCase()}${this.color.slice(1)}`}`];
        this.selected = false;
        this.lock = false;
        this.draw = true;
        this.prev = this.pos;
    }

    update() {

        if (this.lock == false) {
            image(this.sprite, this.pos[0] * 100, this.pos[1] * 100, 100, 100);
        } else {
            push();
            imageMode(CENTER);
            image(this.sprite, mouseX, mouseY, 100, 100);
            pop();
        }

        // https://p5js.org/examples/input-mouse-functions.html
        if (mouseIsPressed && gridX == this.pos[0] && gridY == this.pos[1] && this.color == playerTurn) {
            this.selected = true;
            this.lock = true;
        }

        else {
            image(this.sprite, this.pos[0] * 100, this.pos[1] * 100, 100, 100);
        }
    }
}

class Pawn extends Piece {
    constructor(color, pos) {
        super(color, pos, "pawn");
    }
}

class Rook extends Piece {
    constructor(color, pos) {
        super(color, pos, "rook");
    }
}

class Knight extends Piece {
    constructor(color, pos) {
        super(color, pos, "knight");
    }
}

class Bishop extends Piece {
    constructor(color, pos) {
        super(color, pos, "bishop");
    }
}

class Queen extends Piece {
    constructor(color, pos) {
        super(color, pos, "queen");
    }
}

class King extends Piece {
    constructor(color, pos) {
        super(color, pos, "king");
    }
}