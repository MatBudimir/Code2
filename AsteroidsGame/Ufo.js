"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Ufo extends AsteroidsGame.Moveable {
        constructor(_size, _projectileType, _pos, _vel) {
            super(_pos, _vel);
            if (_pos) {
                this.pos = _pos;
            }
            else {
                this.pos = new AsteroidsGame.Vector(0, Math.random() * 1000 + 50);
            }
            this.vel = new AsteroidsGame.Vector((-1 + (Math.round(Math.random() * 1)) * 2) * 30, 0);
            this.size = _size;
            if (this.size < 1) {
                this.aiming = true;
            }
        }
        move(_time) {
            super.move(_time);
        }
        draw() {
            console.log("Draw UFO");
            AsteroidsGame.crc2.save();
            AsteroidsGame.crc2.translate(this.pos.x, this.pos.y);
            AsteroidsGame.crc2.scale(this.size, this.size);
            AsteroidsGame.crc2.translate(-50, -50);
            AsteroidsGame.crc2.beginPath();
            AsteroidsGame.crc2.moveTo(0, 0);
            AsteroidsGame.crc2.lineTo(12, 0);
            AsteroidsGame.crc2.lineTo(20, 12);
            AsteroidsGame.crc2.lineTo(-8, 12);
            AsteroidsGame.crc2.lineTo(20, 12);
            AsteroidsGame.crc2.lineTo(40, 25);
            AsteroidsGame.crc2.lineTo(28, 38);
            AsteroidsGame.crc2.lineTo(-16, 38);
            AsteroidsGame.crc2.lineTo(-28, 25);
            AsteroidsGame.crc2.lineTo(40, 25);
            AsteroidsGame.crc2.lineTo(-28, 25);
            AsteroidsGame.crc2.lineTo(-8, 12);
            AsteroidsGame.crc2.lineTo(0, 0);
            AsteroidsGame.crc2.closePath();
            AsteroidsGame.crc2.lineWidth = 1 / this.size;
            AsteroidsGame.crc2.stroke();
            AsteroidsGame.crc2.restore();
        }
        isHit(_pointer) {
            const hitSize = 50;
            const dif = new AsteroidsGame.Vector(_pointer.x - this.pos.x, _pointer.y - this.pos.y);
            return (Math.abs(dif.x) < hitSize && Math.abs(dif.y) < hitSize);
        }
    }
    AsteroidsGame.Ufo = Ufo;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Ufo.js.map