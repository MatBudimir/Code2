"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        AsteroidsGame.crc2 = canvas.getContext("2d");
        AsteroidsGame.crc2.fillStyle = "black";
        AsteroidsGame.crc2.strokeStyle = "white";
        AsteroidsGame.createPaths();
        console.log("AsteroidPaths: ", AsteroidsGame.asteroidPaths);
        const asteroid = new AsteroidsGame.Asteroid(1);
        asteroid.draw();
    }
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Game.js.map