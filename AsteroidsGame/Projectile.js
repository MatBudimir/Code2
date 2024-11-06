"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Projectile extends AsteroidsGame.Moveable {
        constructor(_pos, _vel) {
            super(_pos);
            this.lifetime = 2;
            this.vel = _vel.copy();
        }
        draw() {
            // console.log("Draw");
            AsteroidsGame.crc2.save();
            AsteroidsGame.crc2.translate(this.pos.x, this.pos.y);
            AsteroidsGame.crc2.strokeRect(-1, -1, 2, 2);
            AsteroidsGame.crc2.restore();
        }
        move(_time) {
            super.move(_time);
            this.lifetime -= _time;
            if (this.lifetime < 0) {
                this.expandable = true;
            }
        }
    }
    AsteroidsGame.Projectile = Projectile;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Projectile.js.map