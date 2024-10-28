"use strict";
var AsteroidGame;
(function (AsteroidGame) {
    class Asteroid {
        constructor(_size) {
            this.pos = new AsteroidGame.Vector(0, 0);
            this.vel = new AsteroidGame.Vector(0, 0);
            this.vel.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_time) {
        }
        draw() {
            AsteroidGame.crc2.save();
            AsteroidGame.crc2.translate(this.pos.x, this.pos.y);
            AsteroidGame.crc2.scale(this.size, this.size);
            AsteroidGame.crc2.stroke(AsteroidGame.asteroidPaths[this.type]);
            AsteroidGame.crc2.restore();
        }
    }
    AsteroidGame.Asteroid = Asteroid;
})(AsteroidGame || (AsteroidGame = {}));
//# sourceMappingURL=Asteroid.js.map