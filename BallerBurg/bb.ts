const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface Cannon
{
    player: boolean,
    x: number,
    y: number,
    angle: number,
    power: number,
}

interface Ball
{
    player: boolean,
    x: number,
    y: number,
    radius: number,
    velocityX: number,
    velocityY: number,
    flying: boolean
}

// Starting Angle
let degree1: number = 45;
const angleOne: HTMLSpanElement = <HTMLSpanElement>document.getElementById('angle-player1')!;
angleOne.innerText = "" + degree1;

let degree2: number = 135;
const angleTwo: HTMLSpanElement = <HTMLSpanElement>document.getElementById('angle-player2')!;
angleTwo.innerText = "" + degree2;

// Starting Power
let power1: number = 10;
const powerOne: HTMLSpanElement = <HTMLSpanElement>document.getElementById('power-player1')!;
powerOne.innerText = "" + power1;

let power2: number = 10;
const powerTwo: HTMLSpanElement = <HTMLSpanElement>document.getElementById('power-player2')!;
powerTwo.innerText = "" + power2;



// Player Starting Position on the Y axis.
const playerOnePosition: number = 930 - Math.random() * 215 - 35;
const playerTwoPosition: number = 930 - Math.random() * 215 - 35;

// Draw Mountains
function drawMap(_ctx: CanvasRenderingContext2D): void
{
    _ctx.beginPath();
    _ctx.moveTo(0, 930);
    _ctx.lineTo(0, playerOnePosition);
    _ctx.lineTo(320, playerOnePosition);
    _ctx.lineTo(500, playerOnePosition - Math.random() * 125 + 125 * -1);
    _ctx.lineTo(725, playerOnePosition - Math.random() * 150 + 250 * -1);
    _ctx.lineTo(950, playerOnePosition - Math.random() * 75 + 375 * -1);
    _ctx.lineTo(1125, playerOnePosition - Math.random() * 125 + 225 * -1);
    _ctx.lineTo(1400, playerTwoPosition - Math.random() * 100 + 150 * -1);
    _ctx.lineTo(1600, playerTwoPosition);
    _ctx.lineTo(1920, playerTwoPosition);
    _ctx.lineTo(1920, 930);
    _ctx.fillStyle = 'sandybrown';
    _ctx.fill();
}

drawMap(ctx);
const imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

// Draw Cannons
function drawCannons(_ctx: CanvasRenderingContext2D): void
{
    // Cannon Player 1
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

    // Cannon Player 2
    const angle2: number = degree2 * (Math.PI / -180);
    const pathCannonTwo: Path2D = new Path2D();
    const posX2: number = 1820;
    const cannonX2: number = posX2;
    const cannonY2: number = playerTwoPosition - 65;
    pathCannonTwo.ellipse(posX2, playerTwoPosition - 50, 50, 50, Math.PI / 4, 0, 2 * Math.PI);
    pathCannonTwo.rect(cannonX2, cannonY2, 100, 30);
    _ctx.save();
    _ctx.translate(cannonX2, cannonY2);
    _ctx.rotate(angle2);
    _ctx.translate(-(cannonX2), -(cannonY2));
    _ctx.fillStyle = "white";
    _ctx.fill(pathCannonTwo);
    _ctx.restore();
}

const ball: Ball = {
    player: true,
    x: 100,
    y: playerOnePosition - 50,
    radius: 10,
    velocityX: 0,
    velocityY: 0,
    flying: false
};

function moveBall(): void
{
    if (ball.flying)
    {
        ball.velocityY += 0.5;
        ball.x += ball.velocityX;
        ball.y += ball.velocityY;

        if (ball.y >= 930)
        {
            ball.y = 930;
            ball.flying = false;
        }
    }

    ctx.putImageData(imgData, 0, 0);
    drawCannons(ctx);

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    if (ball.flying)
    {
        requestAnimationFrame(moveBall);
    }
}

window.addEventListener("load", loadHandler);
window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(_event: KeyboardEvent): void
{
    if (_event.key === 'e')
    {
        const addAngleButton2: HTMLButtonElement = document.getElementById("addAngleButton2") as HTMLButtonElement;
        addAngleButton2.click();
    }
    else if (_event.key === 'q')
    {
        const subAngleButton2: HTMLButtonElement = document.getElementById("subAngleButton2") as HTMLButtonElement;
        subAngleButton2.click();
    }
    else if (_event.key === 'd')
    {
        const addPowerButton2: HTMLButtonElement = document.getElementById("addPowerButton2") as HTMLButtonElement;
        addPowerButton2.click();
    }
    else if (_event.key === 'a')
    {
        const subPowerButton2: HTMLButtonElement = document.getElementById("subPowerButton2") as HTMLButtonElement;
        subPowerButton2.click();
    }
    else if (_event.key === 't')
    {
        const fireButton2: HTMLButtonElement = document.getElementById("fireButton2") as HTMLButtonElement;
        fireButton2.click();
    }
    else { }
}

function loadHandler(_event: Event): void
{
    const restartButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("restartButton");
    restartButton.addEventListener("click", restartGame);

    // Adjust Angle with Mousedown
    const addAngleButton1: HTMLButtonElement = document.getElementById("addAngleButton1") as HTMLButtonElement;
    addAngleButton1.addEventListener("mousedown", addAngle);
    const subAngleButton1: HTMLButtonElement = document.getElementById("subAngleButton1") as HTMLButtonElement;
    subAngleButton1.addEventListener("mousedown", subAngle);

    // Adjust Angle with Keydown
    const addAngleButton2: HTMLButtonElement = document.getElementById("addAngleButton2") as HTMLButtonElement;
    addAngleButton2.addEventListener("click", addAngle2);
    const subAngleButton2: HTMLButtonElement = document.getElementById("subAngleButton2") as HTMLButtonElement;
    subAngleButton2.addEventListener("click", subAngle2);

    // Adjust Power with Mousedown
    const addPowerButton1: HTMLButtonElement = document.getElementById("addPowerButton1") as HTMLButtonElement;
    addPowerButton1.addEventListener("mousedown", addPower);
    const subPowerButton1: HTMLButtonElement = document.getElementById("subPowerButton1") as HTMLButtonElement;
    subPowerButton1.addEventListener("mousedown", subPower);

    // Adjust Power with Keydown
    const addPowerButton2: HTMLButtonElement = document.getElementById("addPowerButton2") as HTMLButtonElement;
    addPowerButton2.addEventListener("click", addPower2);
    const subPowerButton2: HTMLButtonElement = document.getElementById("subPowerButton2") as HTMLButtonElement;
    subPowerButton2.addEventListener("click", subPower2);

    // Fire Cannons on Mousedown
    const fireButton1: HTMLButtonElement = document.getElementById("fireButton1") as HTMLButtonElement;
    fireButton1.addEventListener("click", () => fireCannon(degree1, power1, true));
    
    // Fire Cannons on Keydown
    const fireButton2: HTMLButtonElement = document.getElementById("fireButton2") as HTMLButtonElement;
    fireButton2.addEventListener("click", () => fireCannon(degree2, power2, false));
}

function addAngle(): void
{
    if (degree1 < 90)
    {
        degree1 += 1;
        angleOne.textContent = degree1.toString();
        drawCannons(ctx);
    }
}

function subAngle(): void
{
    if (degree1 > 0)
    {
        degree1 -= 1;
        angleOne.textContent = degree1.toString();
        drawCannons(ctx);
    }
}

function addAngle2(): void
{
    degree2 += 1;
    angleTwo.textContent = degree2.toString();
    console.log("q");
    drawCannons(ctx);
}

function subAngle2(): void
{
    degree2 -= 1;
    angleTwo.textContent = degree2.toString();
    console.log("e");
    drawCannons(ctx);
}

function addPower(): void
{
    if (power1 < 20)
    {
        power1 += 1;
        powerOne.textContent = power1.toString();
    }
}

function subPower(): void
{
    if (power1 > 0)
    {
        power1 -= 1;
        powerOne.textContent = power1.toString();
    }
}

function addPower2(): void
{
    if (power2 < 20)
    {
        power2 += 1;
        powerTwo.textContent = power2.toString();
    }
}

function subPower2(): void
{
    if (power2 > 0)
    {
        power2 -= 1;
        powerTwo.textContent = power2.toString();
    }
}

function fireCannon(_angle: number, _power: number, _isPlayer1: boolean): void
{
    const radianAngle: number = _angle * (Math.PI / 180);

    ball.x = _isPlayer1 ? 100 : 1820;
    ball.y = _isPlayer1 ? playerOnePosition - 50 : playerTwoPosition - 50;

    _power = _isPlayer1 ? 20 + power1 : 20 + power2;

    ball.velocityX = _power * Math.cos(radianAngle);
    ball.velocityY = _power * Math.sin(radianAngle) * -1;

    ball.flying = true;

    moveBall();
}

function restartGame(_event: MouseEvent): void
{

}