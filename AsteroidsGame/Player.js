"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Player extends AsteroidsGame.Moveable {
        constructor(_size, _pos, _vel, _laserReady) {
            super(_pos);
            if (_pos) {
                this.pos = _pos;
            }
            else {
                this.pos = new AsteroidsGame.Vector(0, 0);
            }
            this.vel = new AsteroidsGame.Vector(0, 0);
            this.vel.random(0, -10);
        }
        draw() {
            console.log("Player Draw");
            AsteroidsGame.crc2.save();
            AsteroidsGame.crc2.translate(this.pos.x, this.pos.y);
            AsteroidsGame.crc2.translate(AsteroidsGame.crc2.canvas.width / 2, AsteroidsGame.crc2.canvas.height / 2);
            AsteroidsGame.crc2.beginPath();
            AsteroidsGame.crc2.moveTo(0, 0);
            AsteroidsGame.crc2.lineTo(15, 45);
            AsteroidsGame.crc2.lineTo(-15, 45);
            AsteroidsGame.crc2.closePath();
            AsteroidsGame.crc2.fillStyle = "white";
            AsteroidsGame.crc2.fill();
            AsteroidsGame.crc2.stroke();
            AsteroidsGame.crc2.restore();
        }
        accelerate(_factor) {
            this.vel.scale(_factor);
        }
        turn(_event) {
            console.log("Player Turn, Probably Right");
            const pointerX = _event.clientX - AsteroidsGame.crc2.canvas.offsetLeft;
            const pointerY = _event.clientY - AsteroidsGame.crc2.canvas.offsetTop;
            const angle = Math.atan2(pointerY - this.pos.y, pointerX - this.pos.x);
            const speed = this.vel.mag();
            this.vel.x = Math.cos(angle) * speed;
            this.vel.y = Math.sin(angle) * speed;
        }
    }
    AsteroidsGame.Player = Player;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Player.js.map