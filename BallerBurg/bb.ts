const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface Cannon {
    player: boolean,
    x: number,
    y: number,
    angle: number,
    power: number,
}

interface Ball {
    position: number,
    velocity: number,
    flying: boolean,
}

const playerOnePosition: number = 1080 - Math.random() * 215 - 35;
const playerTwoPosition: number = 1080 - Math.random() * 215 - 35;

function drawMap(_ctx: CanvasRenderingContext2D): void {
    // Draw Mountains
    _ctx.beginPath()
    _ctx.moveTo(0, 1080)
    _ctx.lineTo(0, playerOnePosition);
    _ctx.lineTo(320, playerOnePosition);
    _ctx.lineTo(500, playerOnePosition - Math.random() * 150 + 150 * -1);
    _ctx.lineTo(725, playerOnePosition - Math.random() * 250 + 250 * -1);
    _ctx.lineTo(950, playerOnePosition - Math.random() * 100 + 600 * -1);
    _ctx.lineTo(1125, playerOnePosition - Math.random() * 250 + 150 * -1);
    _ctx.lineTo(1400, playerTwoPosition - Math.random() * 200 + 150 * -1);
    _ctx.lineTo(1600, playerTwoPosition);
    _ctx.lineTo(1920, playerTwoPosition);
    _ctx.lineTo(1920, 1080);
    _ctx.fillStyle = 'sandybrown';
    _ctx.fill();

    const pathCannonTwo: Path2D = new Path2D();
    pathCannonTwo.ellipse(Math.random() * 50 + 1800, playerTwoPosition - 50, 50, 50, Math.PI / 4, 0, 2 * Math.PI);
    _ctx.fillStyle = "white";
    _ctx.fill(pathCannonTwo);
}


drawMap(ctx);

// Draw Cannons (Test)
function drawCannons(_ctx: CanvasRenderingContext2D): void {
    const pathCannonOne: Path2D = new Path2D();
    const posX: number = (Math.random() * 50 + 100);
    pathCannonOne.ellipse(posX, playerOnePosition - 50, 50, 50, Math.PI / 4, 0, 2 * Math.PI);
    pathCannonOne.rect(posX + 25, playerOnePosition - 65, 100, 30);
    _ctx.save();
    _ctx.translate(posX + 25, playerOnePosition - 65);
    _ctx.rotate(Math.PI / 4 * -1);
    _ctx.beginPath();
    _ctx.fillStyle = "green";
    _ctx.rect(0, -25, 100, 30);
    _ctx.fill();
    _ctx.restore();
    _ctx.fillStyle = "green";
    _ctx.fill(pathCannonOne);
}

drawCannons(ctx);

function fireCannon(): void {

}

function functionA(_event: MouseEvent): void {
    fireCannon();
}

function functionB(_event: KeyboardEvent): void {
    fireCannon();
}