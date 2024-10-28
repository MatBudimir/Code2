namespace AsteroidsGame {

    export class Asteroid {
        pos: Vector;
        vel: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("Asteroid Constructor");
            this.pos = new Vector(0, 0);
            this.vel = new Vector(0, 0);
            this.vel.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }

        move(_time: number): void {
            console.log("Asteroid Move");
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
            console.log("Draw");
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }
    }
}