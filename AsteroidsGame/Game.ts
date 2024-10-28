namespace AsteroidsGame {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;


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

        const asteroid: Asteroid = new Asteroid(1);
        for (let j: number = 0; j < 24; j++) {
            asteroid.draw();
            asteroid.move(0.1);
        }

    }
}