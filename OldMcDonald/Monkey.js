"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    class Monkey extends OldMcDonald.Animal {
        doSpecialAction() {
            console.log("Throws a rock!");
        }
    }
    OldMcDonald.Monkey = Monkey;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=Monkey.js.map