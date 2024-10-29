"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
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
    AsteroidsGame.Vector = Vector;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Vector.js.map