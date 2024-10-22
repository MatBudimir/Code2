"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
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
// Draw Cannons (Test)
function drawCannons(_ctx) {
    const pathCannonOne = new Path2D();
    const posX = (Math.random() * 50 + 100);
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
function fireCannon() {
}
function functionA(_event) {
    fireCannon();
}
function functionB(_event) {
    fireCannon();
}
