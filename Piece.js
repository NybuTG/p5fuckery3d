class Piece {
    constructor(color, pos, sprite) {
        this.color = color;
        this.pos = pos;
        this.sprite = set[`${sprite}${`${this.color[0].toUpperCase()}${this.color.slice(1)}`}`];
        this.selected = false;
        this.lock = false;
        this.draw = true;
        this.prev = this.pos;
        this.name = sprite;
    }

    update() {

        if (this.lock === false && this.draw === true) {
            image(this.sprite, this.pos[0] * 100, this.pos[1] * 100, 100, 100);
        } 
        else {
            push();
            imageMode(CENTER);
            
            image(this.sprite, mouseX - 25, mouseY - 25, 100, 100);
            pop();
        }

        if (mouseIsPressed && gridX == this.pos[0] && gridY == this.pos[1] && this.color == playerTurn && current === null) {
            this.selected = true;
            this.lock = true;
        }
    }
}

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
            legal.push([this.pos[0], this.pos[1] + 1 * dir]);
            legal.push([this.pos[0], this.pos[1] + 2 * dir]);   
        } else {
            legal.push([this.pos[0], this.pos[1] + 1 * dir]);
        }


        let tmp = legal.toString()
        for (let p=0; p < pieces.length; p++) {
            for (let l=0; l < legal.length; l++) {
                if (pieces[p].pos.toString === legal[l].toString()) {
                    array.splice(l, 1)
                }
            }
        }

        return legal;
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