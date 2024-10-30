"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    window.addEventListener("load", handleLoad);
    const moveables = [];
    let projectile;
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
        moveables.unshift(new AsteroidsGame.Player(1));
        createAsteroids(7);
        canvas.addEventListener("click", fire);
        canvas.addEventListener("mousedown", shootProjectile);
        window.setInterval(update, 20);
    }
    function createAsteroids(_nAsteroids) {
        //console.log("Create Asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new AsteroidsGame.Asteroid(1.0);
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
    function shootProjectile(_event) {
        //console.log("Projectile!");
        const origin = new AsteroidsGame.Vector(moveables[0].pos.x - AsteroidsGame.crc2.canvas.offsetLeft, moveables[0].pos.y - AsteroidsGame.crc2.canvas.offsetTop);
        console.log(moveables[0].pos.x);
        const vel = new AsteroidsGame.Vector(0, 0);
        vel.random(100, 100);
        moveables.push(new AsteroidsGame.Projectile(origin, vel));
    }
    function getAsteroidHit(_pointer) {
        for (const asteroid of moveables) {
            if (asteroid instanceof AsteroidsGame.Asteroid) {
                if (asteroid.isHit(_pointer)) {
                    return asteroid;
                }
            }
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.4) {
            for (let i = 0; i < 2; i++) {
                const fragment = new AsteroidsGame.Asteroid(_asteroid.size / 2, _asteroid.pos.copy());
                fragment.vel = _asteroid.vel.copy();
                if (i === 0) {
                    fragment.vel.x *= -1;
                }
                else {
                    fragment.vel.y *= -1;
                }
                moveables.push(fragment);
            }
        }
        const index = moveables.indexOf(_asteroid);
        moveables.splice(index, 1);
    }
    function update() {
        //console.log("Update");
        AsteroidsGame.crc2.fillRect(0, 0, AsteroidsGame.crc2.canvas.width, AsteroidsGame.crc2.canvas.height);
        for (const player of moveables) {
            if (player instanceof AsteroidsGame.Player) {
                player.move(1 / 50);
                player.draw();
            }
        }
        for (const asteroid of moveables) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        if (projectile != null) {
            projectile.move(1 / 50);
            projectile.draw();
        }
    }
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=MainGame.js.map