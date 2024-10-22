"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
// Starting Angle
let degree1 = 45;
const angle1 = document.getElementById('angle-player1');
angle1.innerText = "" + degree1;
const playerOnePosition = 1080 - Math.random() * 215 - 35;
const playerTwoPosition = 1080 - Math.random() * 215 - 35;
function drawMap(_ctx) {
    // Draw Mountains
    _ctx.beginPath();
    _ctx.moveTo(0, 1080);
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
    const pathCannonTwo = new Path2D();
    pathCannonTwo.ellipse(Math.random() * 50 + 1800, playerTwoPosition - 50, 50, 50, Math.PI / 4, 0, 2 * Math.PI);
    _ctx.fillStyle = "white";
    _ctx.fill(pathCannonTwo);
}
drawMap(ctx);
const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
// Draw Cannons (Test)
function drawCannons(_ctx) {
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
}
function fireCannon() {
}
window.addEventListener("load", loadHandler);
function loadHandler(_event) {
    const restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", restartGame);
    const addAngleButton1 = document.getElementById("addAngleButton1");
    addAngleButton1.addEventListener("mousedown", addAngle);
    const subAngleButton1 = document.getElementById("subAngleButton1");
    subAngleButton1.addEventListener("mousedown", subAngle);
}
function addAngle(_event) {
    if (degree1 < 90) {
        degree1 += 1; // Increase the value by 1
        angle1.textContent = degree1.toString();
        drawCannons(ctx);
    }
}
function subAngle(_event) {
    if (degree1 > 0) {
        degree1 -= 1; // Increase the value by 1
        angle1.textContent = degree1.toString();
        drawCannons(ctx);
    }
}
function functionA(_event) {
    fireCannon();
}
function functionB(_event) {
    fireCannon();
}
function restartGame(_event) {
}
