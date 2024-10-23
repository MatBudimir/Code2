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
    animals.push(new Animal("Snowball", "Cat", "Fish", 1, "Meow"));
    animals.push(new Animal("Kong", "Monkey", "Bananas", 7, "U-u A-a"));
    animals.push(new Animal("Stripey", "Zebra", "Apples", 5, "Hiyah"));
    animals.push(new Animal("Schnitzel", "Pig", "Cabbage", 3, "Oink"));
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=omd.js.map