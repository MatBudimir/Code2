"use strict";
var AsteroidGame;
(function (AsteroidGame) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        AsteroidGame.crc2 = canvas.getContext("2D");
        AsteroidGame.crc2.fillStyle = "black";
        AsteroidGame.crc2.strokeStyle = "white";
        AsteroidGame.createPaths();
        let asteroid = new AsteroidGame.Asteroid(1);
        asteroid.draw();
    }
})(AsteroidGame || (AsteroidGame = {}));
//# sourceMappingURL=Game.js.map