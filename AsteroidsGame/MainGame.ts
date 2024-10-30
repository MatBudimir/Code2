namespace AsteroidsGame {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    const moveables: Moveable[] = [];
    let projectile: Projectile;

    function handleLoad(_event: Event): void {
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.canvas.width = window.innerWidth;
        crc2.canvas.height = window.innerHeight;
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        createPaths();
        console.log("AsteroidPaths: ", asteroidPaths);

        moveables.unshift(new Player(1));
        createAsteroids(7);

        canvas.addEventListener("click", fire);
        canvas.addEventListener("mousedown", shootProjectile)

        window.setInterval(update, 20);
    }

    function createAsteroids(_nAsteroids: number): void {
        //console.log("Create Asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            const asteroid: Moveable = new Asteroid(1.0);
            moveables.push(asteroid);
        }
    }

    function fire(_event: MouseEvent): void {
        //console.log("Fire!");
        const pointer: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        const detectHit: Asteroid | null = getAsteroidHit(pointer);
        if (detectHit) {
            //console.log("Hit!")
            breakAsteroid(detectHit);
        }
    }

    function shootProjectile(_event: MouseEvent): void {
        //console.log("Projectile!");
        const origin: Vector = new Vector(moveables[0].pos.x - crc2.canvas.offsetLeft, moveables[0].pos.y - crc2.canvas.offsetTop);
        console.log(moveables[0].pos.x)
        const vel: Vector = new Vector(0, 0);
        vel.random(100, 100);
        moveables.push(new Projectile(origin, vel));

    }

    function getAsteroidHit(_pointer: Vector): Asteroid | null {
        for (const asteroid of moveables) {
            if (asteroid instanceof Asteroid) {
                if (asteroid.isHit(_pointer)) {
                    return asteroid;
                }
            }
        }
        return null;
    }

    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.4) {
            for (let i: number = 0; i < 2; i++) {
                const fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.pos.copy());
                fragment.vel = _asteroid.vel.copy()

                if (i === 0) {
                    fragment.vel.x *= -1;
                } else {
                    fragment.vel.y *= -1;
                }

                moveables.push(fragment);
            }
        }
        const index: number = moveables.indexOf(_asteroid);
        moveables.splice(index, 1);
    }

    function update(): void {
        //console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (const player of moveables) {
            if (player instanceof Player) {
                player.move(1 / 50)
                player.draw();
            }
        }

        for (const asteroid of moveables) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }

        if (projectile != null) {
            projectile.move(1 / 50);
            projectile.draw();
        }
    }
}