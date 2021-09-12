
class Player {
    constructor() {
        this.delta = 0;
        this.cam = createCamera();
        
        this.sensitivity = 0.01;
        this.pan = 0;
        this.tilt = 0;
        this.pos = [0, 0, 0];
        this.forward = 0;

    }

    draw() {

        this.pan = (mouseX - pmouseX) * this.sensitivity;
        this.tilt = (mouseY - pmouseY) * this.sensitivity;

        this.cam.pan(-this.pan);
        this.cam.tilt(this.tilt);
        this.cam.setPosition(this.pos[0], this.pos[1], this.pos[2])

        this.keyHandler();

        
    }

    keyHandler() {
        // W - Forward
        if (keyIsDown(87)) {
            this.pos[2] -= 0.1
        } 
        // S - Backwards
        else if (keyIsDown(83)) {
            this.pos[2] += 0.1
        }
    }
}

let player;

function setup() {
    createCanvas(800, 600, WEBGL);
    player = new Player();
}

function draw() {
    background(220);
    // noFill();
    box(4, 4, 4, 4, 4);
    lights();
    player.draw();
}

