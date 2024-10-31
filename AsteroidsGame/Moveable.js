"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Moveable {
        constructor(_pos, _vel) {
            this.expandable = false;
            console.log("Asteroid Constructor");
            if (_pos) {
                this.pos = _pos;
            }
            else {
                this.pos = new AsteroidsGame.Vector(0, 0);
            }
            this.vel = new AsteroidsGame.Vector(0, 0);
        }
        move(_time) {
            // console.log("Moveable Move");
            const offset = new AsteroidsGame.Vector(this.vel.x, this.vel.y);
            offset.scale(_time);
            this.pos.add(offset);
            if (this.pos.x < 0 - 50)
                this.pos.x += AsteroidsGame.crc2.canvas.width + 50;
            if (this.pos.y < 0 - 50)
                this.pos.y += AsteroidsGame.crc2.canvas.height + 50;
            if (this.pos.x > AsteroidsGame.crc2.canvas.width + 50)
                this.pos.x = -AsteroidsGame.crc2.canvas.width - 50;
            if (this.pos.y > AsteroidsGame.crc2.canvas.height + 50)
                this.pos.y = -AsteroidsGame.crc2.canvas.height - 50;
        }
        draw() {
            // console.log("Moveable Draw");
        }
        isHit(_pointer, _size) {
            const hitSize = 50 * _size;
            const dif = new AsteroidsGame.Vector(_pointer.x - this.pos.x, _pointer.y - this.pos.y);
            return (Math.abs(dif.x) < hitSize && Math.abs(dif.y) < hitSize);
        }
    }
    AsteroidsGame.Moveable = Moveable;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Moveable.js.map