/*jshint esversion: 6 */

class Pendulum {

    constructor() {
        this.length = 100;
        this.angle = PI/4;
        this.angularAcceleration = 0;
        this.angularVelocity = 0;
        this.origin = createVector(width / 2, 250);
        this.position = createVector(width / 2, this.length + this.origin.y);
        this.mass = 0.001;
    }

    update() {
        this.angularAcceleration = -1 * 9.8 * this.mass * sin(this.angle);
        this.angularVelocity += this.angularAcceleration;
        this.angle += this.angularVelocity;

        this.position = createVector(this.length * sin(this.angle), this.length * cos(this.angle));
        this.position.add(this.origin);
    }

    render() {
        clear();
        line(this.origin.x, this.origin.y, this.position.x, this.position.y);
        ellipse(this.position.x, this.position.y, 16, 16);
    }

}

var pendulum;

function setup() {
    createCanvas(800, 600);
    pendulum = new Pendulum();
}

function draw() {
    pendulum.update();
    pendulum.render();
}
