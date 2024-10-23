"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    class Animal {
        constructor(_name, _type, _food, _sound, _appetite) {
            this.set(_name, _type, _food, _sound, _appetite);
        }
        set(_name, _type, _food, _sound, _appetite) {
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.sound = _sound;
            this.appetite = _appetite;
        }
        eat(_type, _food, _sound, _appetite) {
        }
        sing(_name, _sound) {
        }
    }
})(OldMacDonald || (OldMacDonald = {}));
//# sourceMappingURL=OldMacDonald.js.map