namespace AsteroidsGame {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    const asteroids: Asteroid[] = [];


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

        createAsteroids(7);

        canvas.addEventListener("click", fire);

        window.setInterval(update, 20);
    }

    function createAsteroids(_nAsteroids: number): void {
        console.log("Create Asteroids");
        for (let i:number = 0; i < _nAsteroids; i++){
            const asteroid: Asteroid = new Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }

    function fire(_event: MouseEvent): void {
        console.log("Fire!");
        let pointer: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let detectHit: Asteroid | null = getAsteroidHit(pointer);
        if (detectHit) {
            //break asteroid
        }
            

    }

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (const asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
    }
}