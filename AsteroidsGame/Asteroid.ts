namespace AsteroidsGame {

    export class Asteroid extends Moveable {
        pos: Vector;
        vel: Vector;
        type: number;
        size: number;

        constructor(_size: number, _pos?: Vector, _vel?: Vector) {
            super(_pos);

            if (_pos) {
                this.pos = _pos.copy();
            }
            else {
                this.pos = new Vector(0, 0);
            }

            this.vel = new Vector(0, 0);
            this.vel.random(100, 200);

            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }

        move(_time: number): void {
            // console.log("Asteroid Move");
            const offset: Vector = new Vector(this.vel.x, this.vel.y);
            offset.scale(_time);
            this.pos.add(offset);

            if (this.pos.x < 0 - 50)
                this.pos.x += crc2.canvas.width + 50;
            if (this.pos.y < 0 - 50)
                this.pos.y += crc2.canvas.height + 50;

            if (this.pos.x > crc2.canvas.width + 50)
                this.pos.x = -crc2.canvas.width - 50;
            if (this.pos.y > crc2.canvas.height + 50)
                this.pos.y = -crc2.canvas.height - 50;

        }

        draw(): void {
            // console.log("Draw");
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.lineWidth = 1 / this.size;
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }

        isHit(_pointer: Vector): boolean {
            const hitSize: number = 50 * this.size;
            const dif: Vector = new Vector(_pointer.x - this.pos.x, _pointer.y - this.pos.y);
            return (Math.abs(dif.x) < hitSize && Math.abs(dif.y) < hitSize);
        }

    }
}