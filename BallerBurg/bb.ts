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

// Starting Angle
let degree1: number = 45;
const angle1: HTMLSpanElement = <HTMLSpanElement>document.getElementById('angle-player1')!;
angle1.innerText = "" + degree1;

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
const imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

// Draw Cannons (Test)
function drawCannons(_ctx: CanvasRenderingContext2D): void {
    const angle: number = degree1 * (Math.PI / -180);
    _ctx.putImageData(imgData, 0, 0);
    const pathCannonOne: Path2D = new Path2D();
    const posX: number = 100;
    const cannonX: number = posX;
    const cannonY: number = playerOnePosition - 65;
    pathCannonOne.ellipse(posX, playerOnePosition - 50, 50, 50, Math.PI / 4, 0, 2 * Math.PI);
    pathCannonOne.rect(cannonX, cannonY, 100, 30);
    _ctx.save();
    _ctx.translate(cannonX, cannonY);
    _ctx.rotate(angle);
    _ctx.translate(-(cannonX), -(cannonY));
    _ctx.fillStyle = "green";
    _ctx.fill(pathCannonOne);
    _ctx.restore();
}

function fireCannon(): void {

}

window.addEventListener("load", loadHandler);

function loadHandler(_event: Event): void {
    const restartButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("restartButton");
    restartButton.addEventListener("click", restartGame);

    const addAngleButton1: HTMLButtonElement = document.getElementById("addAngleButton1") as HTMLButtonElement;
    addAngleButton1.addEventListener("mousedown", addAngle);

    const subAngleButton1: HTMLButtonElement = document.getElementById("subAngleButton1") as HTMLButtonElement;
    subAngleButton1.addEventListener("mousedown", subAngle);
}

function addAngle(_event: MouseEvent): void {
    if (degree1 < 90) {
        degree1 += 1;  // Increase the value by 1
        angle1.textContent = degree1.toString();
        drawCannons(ctx);
    }
}

function subAngle(_event: MouseEvent): void {
    if (degree1 > 0) {
        degree1 -= 1;  // Increase the value by 1
        angle1.textContent = degree1.toString();
        drawCannons(ctx);
    }
}


function functionA(_event: MouseEvent): void {
    fireCannon();
}

function functionB(_event: KeyboardEvent): void {
    fireCannon();
}

function restartGame(_event: MouseEvent): void {

}