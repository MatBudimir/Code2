namespace BallerBurg {

    const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    interface Cannon {
        player: boolean,
        angle: number,
        power: number,
    }

    function drawMap(): void {

    }

    function drawCannons(): void {

    }

    function fireCannon(): void {

    }

    drawMap();

    function functionA(_event: MouseEvent): void {
        fireCannon();
    }

    function functionB(_event: KeyboardEvent): void {
        fireCannon();
    }
}