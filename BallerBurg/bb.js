"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
// Starting Angle
let degree1 = 45;
const angleOne = document.getElementById('angle-player1');
angleOne.innerText = "" + degree1;
let degree2 = 135;
const angleTwo = document.getElementById('angle-player2');
angleTwo.innerText = "" + degree2;
// Starting Power
let power1 = 10;
const powerOne = document.getElementById('power-player1');
powerOne.innerText = "" + power1;
let power2 = 10;
const powerTwo = document.getElementById('power-player2');
powerTwo.innerText = "" + power2;
// Player Starting Position on the Y axis.
const playerOnePosition = 930 - Math.random() * 215 - 35;
const playerTwoPosition = 930 - Math.random() * 215 - 35;
// Draw Mountains
function drawMap(_ctx) {
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
const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
// Draw Cannons
function drawCannons(_ctx) {
    // Cannon Player 1
    const angle = degree1 * (Math.PI / -180);
    _ctx.putImageData(imgData, 0, 0);
    const pathCannonOne = new Path2D();
    const posX = 100;
    const cannonX = posX;
    const cannonY = playerOnePosition - 65;
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
    const angle2 = degree2 * (Math.PI / -180);
    const pathCannonTwo = new Path2D();
    const posX2 = 1820;
    const cannonX2 = posX2;
    const cannonY2 = playerTwoPosition - 65;
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
const ball = {
    player: true,
    x: 100,
    y: playerOnePosition - 50,
    radius: 10,
    velocityX: 0,
    velocityY: 0,
    flying: false
};
function moveBall() {
    if (ball.flying) {
        ball.velocityY += 0.5;
        ball.x += ball.velocityX;
        ball.y += ball.velocityY;
        if (ball.y >= 930) {
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
    if (ball.flying) {
        requestAnimationFrame(moveBall);
    }
}
window.addEventListener("load", loadHandler);
window.addEventListener("keydown", handleKeyPress);
function handleKeyPress(_event) {
    if (_event.key === 'e') {
        const addAngleButton2 = document.getElementById("addAngleButton2");
        addAngleButton2.click();
    }
    else if (_event.key === 'q') {
        const subAngleButton2 = document.getElementById("subAngleButton2");
        subAngleButton2.click();
    }
    else if (_event.key === 'd') {
        const addPowerButton2 = document.getElementById("addPowerButton2");
        addPowerButton2.click();
    }
    else if (_event.key === 'a') {
        const subPowerButton2 = document.getElementById("subPowerButton2");
        subPowerButton2.click();
    }
    else if (_event.key === 'f') {
        const fireButton2 = document.getElementById("fireButton2");
        fireButton2.click();
    }
    else { }
}
function loadHandler() {
    const restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", restartGame);
    // Adjust Angle with Mousedown
    const addAngleButton1 = document.getElementById("addAngleButton1");
    addAngleButton1.addEventListener("mousedown", addAngle);
    const subAngleButton1 = document.getElementById("subAngleButton1");
    subAngleButton1.addEventListener("mousedown", subAngle);
    // Adjust Angle with Keydown
    const addAngleButton2 = document.getElementById("addAngleButton2");
    addAngleButton2.addEventListener("click", addAngle2);
    const subAngleButton2 = document.getElementById("subAngleButton2");
    subAngleButton2.addEventListener("click", subAngle2);
    // Adjust Power with Mousedown
    const addPowerButton1 = document.getElementById("addPowerButton1");
    addPowerButton1.addEventListener("mousedown", addPower);
    const subPowerButton1 = document.getElementById("subPowerButton1");
    subPowerButton1.addEventListener("mousedown", subPower);
    // Adjust Power with Keydown
    const addPowerButton2 = document.getElementById("addPowerButton2");
    addPowerButton2.addEventListener("click", addPower2);
    const subPowerButton2 = document.getElementById("subPowerButton2");
    subPowerButton2.addEventListener("click", subPower2);
    // Fire Cannons on Mousedown
    const fireButton1 = document.getElementById("fireButton1");
    fireButton1.addEventListener("click", () => fireCannon(degree1, power1, true));
    // Fire Cannons on Keydown
    const fireButton2 = document.getElementById("fireButton2");
    fireButton2.addEventListener("click", () => fireCannon(degree2, power2, false));
}
function addAngle() {
    if (degree1 < 90) {
        degree1 += 1;
        angleOne.textContent = degree1.toString();
        drawCannons(ctx);
    }
}
function subAngle() {
    if (degree1 > 0) {
        degree1 -= 1;
        angleOne.textContent = degree1.toString();
        drawCannons(ctx);
    }
}
function addAngle2() {
    degree2 += 1;
    angleTwo.textContent = degree2.toString();
    console.log("q");
    drawCannons(ctx);
}
function subAngle2() {
    degree2 -= 1;
    angleTwo.textContent = degree2.toString();
    console.log("e");
    drawCannons(ctx);
}
function addPower() {
    if (power1 < 20) {
        power1 += 1;
        powerOne.textContent = power1.toString();
    }
}
function subPower() {
    if (power1 > 0) {
        power1 -= 1;
        powerOne.textContent = power1.toString();
    }
}
function addPower2() {
    if (power2 < 20) {
        power2 += 1;
        powerTwo.textContent = power2.toString();
    }
}
function subPower2() {
    if (power2 > 0) {
        power2 -= 1;
        powerTwo.textContent = power2.toString();
    }
}
function fireCannon(_angle, _power, _isPlayer1) {
    const radianAngle = _angle * (Math.PI / 180);
    ball.x = _isPlayer1 ? 100 : 1820;
    ball.y = _isPlayer1 ? playerOnePosition - 50 : playerTwoPosition - 50;
    _power = _isPlayer1 ? 20 + power1 : 20 + power2;
    ball.velocityX = _power * Math.cos(radianAngle);
    ball.velocityY = _power * Math.sin(radianAngle) * -1;
    ball.flying = true;
    moveBall();
}
function restartGame() {
}
//# sourceMappingURL=bb.js.map