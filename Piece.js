class Piece {
    constructor(color, pos, sprite) {
        this.color = color;
        this.pos = pos;
        this.sprite = sprite;
    }

    draw() {
        image(this.sprite, this.pos[0] * 100, this.pos[1] * 100, 100, 100);
    }
}

class Pawn extends Piece {
    constructor(color, pos, sprite) {
        super(color, pos, sprite);
    }
}

class Rook extends Piece {
    constructor(color, pos, sprite) {
        super(color, pos, sprite);
    }
}