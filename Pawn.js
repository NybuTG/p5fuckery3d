class Pawn extends Piece {
    constructor(color, pos, sprite) {
        super(color, pos, sprite);
    }

    draw() {
        image(this.sprite, this.pos[0] * 100, this.pos[1] * 100, 100, 100);
    }
}