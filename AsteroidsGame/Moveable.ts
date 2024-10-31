namespace AsteroidsGame {

    export class Moveable {
        pos: Vector;
        vel: Vector;
        expandable: boolean = false;

        constructor(_pos?: Vector, _vel?: Vector) {
            console.log("Asteroid Constructor");

            if (_pos) {
                this.pos = _pos
            }
            else {
                this.pos = new Vector(0, 0);
            }

            this.vel = new Vector(0, 0);
        }

        move(_time: number): void {
            // console.log("Moveable Move");
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
            // console.log("Moveable Draw");
        }

        isHit(_pointer: Vector, _size: number): boolean {
            const hitSize: number = 50 * _size;
            const dif: Vector = new Vector(_pointer.x - this.pos.x, _pointer.y - this.pos.y);
            return (Math.abs(dif.x) < hitSize && Math.abs(dif.y) < hitSize);
        }

    }
}