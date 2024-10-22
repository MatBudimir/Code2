namespace BallerBurg {

    const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    interface Cannon {
        player: boolean,
        x: number,
        y: number,
        angle: number,
        power: number,
    }

    function drawMap(): void {
        const playerOnePosition: {x: number, y: number} = {x: 20, y: 24}
        const playerTwoPosition: {x: number, y: number} = {x: 20, y: 24}
        ctx.beginPath()
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