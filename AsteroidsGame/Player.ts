namespace AsteroidsGame {

    export class Player extends Moveable {
        pos: Vector;
        vel: Vector;
        laserReady: boolean;

        constructor(_size: number, _pos?: Vector, _vel?: Vector, _laserReady?: boolean) {
            super(_pos);
            if (_pos) {
                this.pos = _pos;
            }
            else {
                this.pos = new AsteroidsGame.Vector(crc2.canvas.width/2, crc2.canvas.height/2);
            }
            this.vel = new AsteroidsGame.Vector(0, 0);
            this.vel.random(0, -10);
        }

        draw(): void {
            // console.log("Player Draw");
            AsteroidsGame.crc2.save();
            AsteroidsGame.crc2.translate(this.pos.x, this.pos.y);
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

        accelerate(_factor: number): void {
            this.vel.scale(_factor);
        }

        turn(_event: MouseEvent): void {
            console.log("Player Turn, Probably Right");
            const pointerX: number = _event.clientX - AsteroidsGame.crc2.canvas.offsetLeft;
            const pointerY: number = _event.clientY - AsteroidsGame.crc2.canvas.offsetTop;
            const angle: number = Math.atan2(pointerY - this.pos.y, pointerX - this.pos.x);
            const speed: number = this.vel.mag();
            this.vel.x = Math.cos(angle) * speed;
            this.vel.y = Math.sin(angle) * speed;

        }

        move(_time: number): void {
            super.move(_time);
        }
    }
}
