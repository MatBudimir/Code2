namespace AsteroidGame {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2D");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";

        createPaths();

        let asteroid: Asteroid = new Asteroid(1);
        asteroid.draw();
    }
}