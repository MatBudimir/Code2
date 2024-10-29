namespace AsteroidsGame {

    export class Asteroid extends Moveable {
        pos: Vector;
        vel: Vector;
        type: number;
        size: number;

        constructor(_size: number, _pos?: Vector, _vel?: Vector) {
           super(_size)
        }

        move(_time: number): void {
            // console.log("Asteroid Move");
            const offset: Vector = new Vector(this.vel.x, this.vel.y);
            offset.scale(_time);
            this.pos.add(offset);

            if (this.pos.x < 0)
                this.pos.x += crc2.canvas.width;
            if (this.pos.y < 0)
                this.pos.y += crc2.canvas.height;
            if (this.pos.x > crc2.canvas.width)
                this.pos.x -= crc2.canvas.width;
            if (this.pos.y > crc2.canvas.height)
                this.pos.y -= crc2.canvas.height;

        }

        draw(): void {
            // console.log("Draw");
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
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