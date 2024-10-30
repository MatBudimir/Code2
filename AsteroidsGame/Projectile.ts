namespace AsteroidsGame {

    export class Projectile extends Moveable {
        lifetime: number;

        constructor(_pos: Vector, _vel: Vector) {
            super(_pos);

            this.lifetime = 2;
            this.vel = _vel.copy();
        }

        draw(): void {
            // console.log("Draw");
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.strokeRect(-1, -1, 2, 2);
            crc2.restore();
        }

        move(_time: number): void {
            super.move(_time);
            this.lifetime -= _time;
            if (this.lifetime < 0) {
                this.vel = new Vector(0, 0);
                this.pos = new Vector(2000, 2000)
            }
        }

    }
}