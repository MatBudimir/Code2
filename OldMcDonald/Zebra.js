"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    class Zebra extends OldMcDonald.Animal {
        doSpecialAction() {
            console.log("The Zebra runs in circles");
        }
    }
    OldMcDonald.Zebra = Zebra;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=Zebra.js.map