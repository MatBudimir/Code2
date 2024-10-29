"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    class Pig extends OldMcDonald.Animal {
        doSpecialAction() {
            console.log("Eats all the leftovers.");
        }
    }
    OldMcDonald.Pig = Pig;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=Pig.js.map