"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Asteroid {
        constructor(_size, _pos, _vel) {
            console.log("Asteroid Constructor");
            if (_pos) {
                this.pos = _pos;
            }
            else {
                this.pos = new AsteroidsGame.Vector(0, 0);
            }
            this.vel = new AsteroidsGame.Vector(0, 0);
            this.vel.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_time) {
            // console.log("Asteroid Move");
            const offset = new AsteroidsGame.Vector(this.vel.x, this.vel.y);
            offset.scale(_time);
            this.pos.add(offset);
            if (this.pos.x < 0)
                this.pos.x += AsteroidsGame.crc2.canvas.width;
            if (this.pos.y < 0)
                this.pos.y += AsteroidsGame.crc2.canvas.height;
            if (this.pos.x > AsteroidsGame.crc2.canvas.width)
                this.pos.x -= AsteroidsGame.crc2.canvas.width;
            if (this.pos.y > AsteroidsGame.crc2.canvas.height)
                this.pos.y -= AsteroidsGame.crc2.canvas.height;
        }
        draw() {
            // console.log("Draw");
            AsteroidsGame.crc2.save();
            AsteroidsGame.crc2.translate(this.pos.x, this.pos.y);
            AsteroidsGame.crc2.scale(this.size, this.size);
            AsteroidsGame.crc2.translate(-50, -50);
            AsteroidsGame.crc2.stroke(AsteroidsGame.asteroidPaths[this.type]);
            AsteroidsGame.crc2.restore();
        }
        isHit(_pointer) {
            const hitSize = 50 * this.size;
            const dif = new AsteroidsGame.Vector(_pointer.x - this.pos.x, _pointer.y - this.pos.y);
            return (Math.abs(dif.x) < hitSize && Math.abs(dif.y) < hitSize);
        }
    }
    AsteroidsGame.Asteroid = Asteroid;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Class_Asteroid.js.map