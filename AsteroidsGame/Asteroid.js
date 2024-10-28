"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Asteroid {
        constructor(_size) {
            console.log("Asteroid Constructor");
            this.pos = new AsteroidsGame.Vector(0, 0);
            this.vel = new AsteroidsGame.Vector(0, 0);
            this.vel.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_time) {
            console.log("Asteroid Move");
        }
        draw() {
            console.log("Draw");
            AsteroidsGame.crc2.save();
            AsteroidsGame.crc2.translate(this.pos.x, this.pos.y);
            AsteroidsGame.crc2.scale(this.size, this.size);
            AsteroidsGame.crc2.stroke(AsteroidsGame.asteroidPaths[this.type]);
            AsteroidsGame.crc2.restore();
        }
    }
    AsteroidsGame.Asteroid = Asteroid;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Asteroid.js.map