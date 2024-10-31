namespace AsteroidsGame {

    export class Ufo extends Moveable {
        size: number;
        aiming: boolean;

        constructor(_size: number, _projectileType?: number, _pos?: Vector, _vel?: Vector, ) {
            super(_pos, _vel)

            if (_pos) {
                this.pos = _pos
            }
            else {
                this.pos = new Vector(0, Math.random()* 800 + 50);
            }

            this.vel = new Vector((-1 + (Math.round(Math.random()*1))*2) * 30, 0);
            this.size = _size;

            if (this.size < 1){
                this.aiming = true;
            }
        }

        move(_time: number): void {
            super.move(_time)
        }

        draw(): void {
            console.log("Draw UFO")
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(12, 0);
            crc2.lineTo(20, 12);
            crc2.lineTo(-8, 12);
            crc2.lineTo(20, 12);
            crc2.lineTo(40, 25);
            crc2.lineTo(28, 38);
            crc2.lineTo(-16, 38);
            crc2.lineTo(-28, 25);
            crc2.lineTo(40, 25);
            crc2.lineTo(-28, 25);
            crc2.lineTo(-8, 12);
            crc2.lineTo(0, 0);
            crc2.closePath();
            crc2.lineWidth = 1 / this.size;
            crc2.stroke();
            crc2.restore();
        }

        isHit(_pointer: Vector): boolean {
            const hitSize: number = 50;
            const dif: Vector = new Vector(_pointer.x - this.pos.x, _pointer.y - this.pos.y);
            return (Math.abs(dif.x) < hitSize && Math.abs(dif.y) < hitSize);
        }

    }
}