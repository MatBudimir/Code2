"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    class Cat extends OldMcDonald.Animal {
        doSpecialAction() {
            console.log("Purr...");
        }
    }
    OldMcDonald.Cat = Cat;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=Cat.js.map