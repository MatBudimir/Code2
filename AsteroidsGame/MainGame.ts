namespace AsteroidsGame
{
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    const moveables: Moveable[] = [];
    let score: number = 0;

    function handleLoad(_event: Event): void
    {
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
        for (let i: number = 0; i < 5; i++)
        {
            createAsteroids();
        }


        canvas.addEventListener("click", fire);
        // canvas.addEventListener("mousedown", shootLaser);

        window.setInterval(update, 20);
        window.setInterval(shootProjectile, 1200);
        window.setInterval(createUfos, 6000);
        window.setInterval(createAsteroids, 4800);
    }

    function createAsteroids(): void
    {
        //console.log("Create Asteroids");
        const asteroid: Moveable = new Asteroid(1.0);
        if (moveables.filter(_asteroid => _asteroid instanceof Asteroid).length < 7)
        {
            moveables.push(asteroid);
        }
    }

    function createUfos(): void
    {
        const ufo: Moveable = new Ufo((Math.ceil(Math.random() * 2) / 2));
        if (moveables.filter(_ufo => _ufo instanceof Ufo).length < 2)
        {
            moveables.push(ufo);
        }
    }

    function fire(_event: MouseEvent): void
    {
        //console.log("Fire!");
        const pointer: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        const asteroidHit: Asteroid | null = getAsteroidHit(pointer);
        const ufoHit: Ufo | null = getUfoHit(pointer);
        if (asteroidHit)
        {
            //console.log("Hit!")
            breakAsteroid(asteroidHit);
        } else if (ufoHit)
        {
            destroyUfo(ufoHit);
        }
    }

    function shootProjectile(_event: Event): void
    {
        //console.log("Projectile!");
        for (const ufo of moveables)
        {
            if (ufo instanceof Ufo && ufo.size === 1)
            {
                const origin: Vector = new Vector(ufo.pos.x - crc2.canvas.offsetLeft - 34, ufo.pos.y - crc2.canvas.offsetTop - 19);
                console.log(ufo.pos.x);
                const vel: Vector = new Vector(0, 0);
                vel.random(100, 100);
                moveables.push(new Projectile(origin, vel));
            }
        }
    }

    function getAsteroidHit(_pointer: Vector): Asteroid | null
    {
        for (const asteroid of moveables)
        {
            if (asteroid instanceof Asteroid && asteroid.isHit(_pointer))
            {
                return asteroid;
            }
        }
        return null;
    }

    function getUfoHit(_pointer: Vector): Ufo | null
    {
        for (const ufo of moveables)
        {
            if (ufo instanceof Ufo && ufo.isHit(_pointer))
            {
                return ufo;
            }
        }
        return null;
    }

    function breakAsteroid(_asteroid: Asteroid): void
    {
        if (_asteroid.size > 0.4)
        {
            for (let i: number = 0; i < 2; i++)
            {
                const fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.pos.copy());
                fragment.vel = _asteroid.vel.copy();

                if (i === 0)
                {
                    fragment.vel.x *= -1;
                } else
                {
                    fragment.vel.y *= -1;
                }

                moveables.push(fragment);
            }
        }
        const index: number = moveables.indexOf(_asteroid);
        moveables.splice(index, 1);
        score += 5 / _asteroid.size;
    }

    function destroyUfo(_ufo: Ufo): void
    {
        const index: number = moveables.indexOf(_ufo);
        moveables.splice(index, 1);
        score += 25;
    }

    function update(): void
    {
        //console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        score += 0.1;
        document.querySelector("#score")!.innerHTML = "0000" + Math.floor(score);

        for (const moveable of moveables)
        {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
}