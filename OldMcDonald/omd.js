"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    class Animal {
        constructor(_name, _type, _food, _appetite, _sound) {
            this.set(_name, _type, _food, _appetite, _sound);
        }
        set(_name, _type, _food, _appetite, _sound) {
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.appetite = _appetite;
            this.sound = _sound;
        }
        eat(_type, _food, _appetite) {
        }
        sing(_name, _sound) {
        }
    }
    class Food {
        consumtion(_type, _amount) {
        }
    }
    const animals = [];
    animals.push(new Animal("Barky", "Dog", "Bones", 2, "Woof"));
    console.log(animals[0]);
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=omd.js.map