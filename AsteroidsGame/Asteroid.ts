namespace AsteroidGame {

    export class Asteroid {
        pos: Vector;
        vel: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            this.pos = new Vector(0, 0);
            this.vel = new Vector(0, 0);
            this.vel.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }

        move(_time: number): void {

        }

        draw(): void {
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }
    }
}