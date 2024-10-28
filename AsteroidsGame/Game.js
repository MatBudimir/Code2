"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        AsteroidsGame.crc2 = canvas.getContext("2d");
        AsteroidsGame.crc2.canvas.width = window.innerWidth;
        AsteroidsGame.crc2.canvas.height = window.innerHeight;
        AsteroidsGame.crc2.fillStyle = "black";
        AsteroidsGame.crc2.strokeStyle = "white";
        AsteroidsGame.crc2.fillRect(0, 0, AsteroidsGame.crc2.canvas.width, AsteroidsGame.crc2.canvas.height);
        AsteroidsGame.createPaths();
        console.log("AsteroidPaths: ", AsteroidsGame.asteroidPaths);
        const asteroid = new AsteroidsGame.Asteroid(1);
        for (let j = 0; j < 24; j++) {
            asteroid.draw();
            asteroid.move(0.1);
        }
    }
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Game.js.map