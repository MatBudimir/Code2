"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    class Dog extends OldMcDonald.Animal {
        constructor(_name, _type, _food, _appetite, _sound) {
            super(_name, _type, _food, _appetite, _sound);
        }
        doSpecialAction() {
            console.log("Woof! Woof!");
        }
    }
    OldMcDonald.Dog = Dog;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=Dog.js.map