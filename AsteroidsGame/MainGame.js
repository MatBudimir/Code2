"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    window.addEventListener("load", handleLoad);
    const moveables = [];
    let score = 0;
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
        for (let i = 0; i < 5; i++) {
            createAsteroids();
        }
        canvas.addEventListener("click", fire);
        // canvas.addEventListener("mousedown", shootLaser);
        window.setInterval(update, 20);
        window.setInterval(shootProjectile, 1200);
        window.setInterval(createUfos, 3000);
        window.setInterval(createAsteroids, 4800);
    }
    function createAsteroids() {
        //console.log("Create Asteroids");
        const asteroid = new AsteroidsGame.Asteroid(1.0);
        moveables.push(asteroid);
    }
    function createUfos() {
        const ufo = new AsteroidsGame.Ufo((Math.ceil(Math.random() * 2) / 2));
        moveables.push(ufo);
    }
    function fire(_event) {
        //console.log("Fire!");
        const pointer = new AsteroidsGame.Vector(_event.clientX - AsteroidsGame.crc2.canvas.offsetLeft, _event.clientY - AsteroidsGame.crc2.canvas.offsetTop);
        const asteroidHit = getAsteroidHit(pointer);
        const ufoHit = getUfoHit(pointer);
        if (asteroidHit) {
            //console.log("Hit!")
            breakAsteroid(asteroidHit);
        }
        else if (ufoHit) {
            destroyUfo(ufoHit);
        }
    }
    function shootProjectile(_event) {
        //console.log("Projectile!");
        for (const ufo of moveables) {
            if (ufo instanceof AsteroidsGame.Ufo && ufo.size === 1) {
                const origin = new AsteroidsGame.Vector(ufo.pos.x - AsteroidsGame.crc2.canvas.offsetLeft - 34, ufo.pos.y - AsteroidsGame.crc2.canvas.offsetTop - 19);
                console.log(ufo.pos.x);
                const vel = new AsteroidsGame.Vector(0, 0);
                vel.random(100, 100);
                moveables.push(new AsteroidsGame.Projectile(origin, vel));
            }
        }
    }
    function getAsteroidHit(_pointer) {
        for (const asteroid of moveables) {
            if (asteroid instanceof AsteroidsGame.Asteroid && asteroid.isHit(_pointer)) {
                return asteroid;
            }
        }
        return null;
    }
    function getUfoHit(_pointer) {
        for (const ufo of moveables) {
            if (ufo instanceof AsteroidsGame.Ufo && ufo.isHit(_pointer)) {
                return ufo;
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
        score += 5 / _asteroid.size;
    }
    function destroyUfo(_ufo) {
        const index = moveables.indexOf(_ufo);
        moveables.splice(index, 1);
        score += 25;
    }
    function update() {
        //console.log("Update");
        AsteroidsGame.crc2.fillRect(0, 0, AsteroidsGame.crc2.canvas.width, AsteroidsGame.crc2.canvas.height);
        score += 0.1;
        document.querySelector("#score").innerHTML = "0000" + Math.floor(score);
        for (const moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=MainGame.js.map