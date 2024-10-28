"use strict";
var AsteroidGame;
(function (AsteroidGame) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_min, _max) {
            const length = _min + Math.random() * (_max - _min);
            const dir = Math.random() * 2 * Math.PI;
            this.set(Math.cos(dir), Math.sin(dir));
            this.scale(length);
        }
    }
    AsteroidGame.Vector = Vector;
})(AsteroidGame || (AsteroidGame = {}));
//# sourceMappingURL=Vector.js.map