class Pawn extends Piece {
    constructor(color, pos) {
        super(color, pos, "pawn");
        this.firstmove = true;
    }

    fetchLegalMoves() {
        let legal = new Array();
        let dir = 1
        if (this.color == "white") { dir = -1 }

        if (this.firstmove === true) {
            legal.push(new PieceMove(this.pos[0], this.pos[1] + 1 * dir));
            legal.push(new PieceMove(this.pos[0], this.pos[1] + 2 * dir));   
        }
        
        else {
            legal.push(new PieceMove(this.pos[0], this.pos[1] + 1 * dir));
        }

        for (let p=0; p < pieces.length; p++) {
            for (let l=0; l < legal.length; l++) {
                if (pieces[p].pos.toString() === legal[l].toString()) {
                    legal.splice(l, 1)
                }

                if ((this.pos[0] + 1).toString() == pieces[p].pos[0].toString() && (this.pos[1] + 1 * dir).toString() == pieces[p].pos[1].toString()) {
                    legal.push(new PieceMove(pieces[p].pos[0], pieces[p].pos[1], true));
                }

                if ((this.pos[0] - 1).toString() == pieces[p].pos[0].toString() && (this.pos[1] + 1 * dir).toString() == pieces[p].pos[1].toString()) {
                    legal.push(new PieceMove(pieces[p].pos[0], pieces[p].pos[1], true));
                }
            }
        }

        return legal;
    }
}