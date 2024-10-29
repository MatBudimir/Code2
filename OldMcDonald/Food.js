"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    class Food {
        constructor(_type, _amount) {
            this.set(_type, _amount);
        }
        set(_type, _amount) {
            this.type = _type;
            this.amount = _amount;
        }
        consumption() {
            return `${this.type}: ${this.amount}`;
        }
    }
    OldMcDonald.Food = Food;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=Food.js.map