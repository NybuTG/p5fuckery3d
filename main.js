let pawnWhite;
let pawnBlack;
let rookWhite;
let rookBlack;
let available = ["pawn", "rook", "knight", "king", "queen", "bishop"];
let set = new Object();
let pieces = new Array();
let playerTurn = "white";
let gridX;
let gridY;

function preload() {
    for (let i=0; i < available.length; i++) {
        let white = `${available[i]}White`;
        let black = `${available[i]}Black`;

        set[white.toString()] = loadImage(`./sprites/${white}.png`);
        set[black.toString()] = loadImage(`./sprites/${black}.png`);
    }
}



function setup() {
    createCanvas(850, 850);
    noStroke();
    defaultPos();
}

function draw() {

    gridX = floor((mouseX - 25) / 100);
    gridY = floor((mouseY - 25) / 100);
    background("#4a422f");
    translate(25, 25);
    drawBoard();

    for (let i=0; i < pieces.length; i++) {
        pieces[i].update()
    }


    if (current == null) {
        for (let i = 0; i < pieces.length; i++) {
            if (pieces[i].lock === true) {
                current = pieces[i];
                break;
            }
        }
    }

}

let current = null;

function mousePressed() {
    if (current !== null) {
        xOffset = mouseX - current.pos[0] * 100
        yOffset = mouseY - current.pos[1] * 100
        // current.draw = false;
    }
}

function mouseReleased() {

    if (current !== null) {
        
        
        current.lock = false;
        current.draw = true;
        
        // Check if move was legal
        let moves = current.fetchLegalMoves();
        current.pos = [gridX, gridY];


        let possible = []

        for (let i=0; i < moves.length; i++) {
            possible.push(moves[0][i].toString())
        }

        // Swap turns if succesful
        if (possible.includes(current.pos.toString())) {

            if (current.name == "pawn") {
                if(current.firstmove) {
                    current.firstmove = false;
                }
            }

            if (playerTurn == "white") {
                playerTurn = "black"    
            } else if (playerTurn == "black") {
                playerTurn = "white";
            }

            current.prev = current.pos;
        } else {
            current.pos = current.prev;
        }
        current = null;
    } 
}

function drawBoard() {
    for (let x=0; x < 800; x+=100) {
        for (let y=0; y < 800; y+=100) {
            if ((x + y) % 200) {
                fill(255);
            } else {
                fill("#759674");
            }

            rect(x, y, 100, 100);
        }
    }
}

function defaultPos() {
    // Pawns
    for (let i=0; i < 8; i++) {
        pieces.push(new Pawn("white", [i,6]));
        pieces.push(new Pawn("black", [i,1]));
    }

    // Rooks
    for (let i=0; i < 8; i+=7) {
        pieces.push(new Rook("black", [i,0]));
        pieces.push(new Rook("white", [i,7]));
    }

    // Knights
    for (let i=1; i < 7; i+=5) {
        pieces.push(new Knight("black", [i,0]));
        pieces.push(new Knight("white", [i,7]));
    }

    for (let i=2; i < 6; i+=3) {
        pieces.push(new Bishop("black", [i,0]));
        pieces.push(new Bishop("white", [i,7]));
    }

    // Queens
    pieces.push(new Queen("black", [3,0]));
    pieces.push(new Queen("white", [3,7]));

    // Kings
    pieces.push(new King("black", [4,0]));
    pieces.push(new King("white", [4,7]));

}