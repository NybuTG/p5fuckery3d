let pawnWhite;
let pawnBlack;
function preload() {
    pawnWhite = loadImage("./sprites/pawnWhite.png")
    pawnBlack = loadImage("./sprites/pawnBlack.png")
}

let pieces = [];

function setup() {
    createCanvas(850, 850);
    noStroke();


    // Pawns
    for (let i=0; i < 8; i++) {
        pieces.push(new Pawn("white", [i,6], pawnWhite));
        pieces.push(new Pawn("black", [i,1], pawnBlack));
    }

    // Rooks
    for (let i=0; i < 2; i++) {
        
    }

}



function draw() {
    background("#4a422f");
    translate(25, 25);
    drawBoard();

    for (let i=0; i < pieces.length; i++) {
        pieces[i].draw()
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


