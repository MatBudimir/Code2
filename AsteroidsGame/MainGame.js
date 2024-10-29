"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    window.addEventListener("load", handleLoad);
    const moveables = [];
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
        createAsteroids(7);
        canvas.addEventListener("click", fire);
        window.setInterval(update, 20);
    }
    function createAsteroids(_nAsteroids) {
        //console.log("Create Asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new AsteroidsGame.Moveable(1.0);
            moveables.push(asteroid);
        }
    }
    function fire(_event) {
        //console.log("Fire!");
        const pointer = new AsteroidsGame.Vector(_event.clientX - AsteroidsGame.crc2.canvas.offsetLeft, _event.clientY - AsteroidsGame.crc2.canvas.offsetTop);
        const detectHit = getAsteroidHit(pointer);
        if (detectHit) {
            //console.log("Hit!")
            breakAsteroid(detectHit);
        }
    }
    function getAsteroidHit(_pointer) {
        for (const asteroid of moveables) {
            if (asteroid.isHit(_pointer)) {
                return asteroid;
            }
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.5) {
            for (let i = 0; i < 2; i++) {
                const fragment = new AsteroidsGame.Moveable(_asteroid.size / 2, _asteroid.pos);
                fragment.vel.add(_asteroid.vel);
                moveables.push(fragment);
            }
        }
        const index = moveables.indexOf(_asteroid);
        moveables.splice(index, 1);
    }
    function update() {
        //console.log("Update");
        AsteroidsGame.crc2.fillRect(0, 0, AsteroidsGame.crc2.canvas.width, AsteroidsGame.crc2.canvas.height);
        for (const asteroid of moveables) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
    }
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=MainGame.js.map