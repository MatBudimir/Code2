"use strict";
class Animal {
    constructor(_type, _food, _noise, _hunger) {
        this.set(_type, _food, _noise, _hunger);
    }
    set(_type, _food, _noise, _hunger) {
        this.type = _type;
        this.food = _food;
        this.noise = _noise;
        this.hunger = _hunger;
    }
    alert() {
        console.log(this.noise);
        return this.noise;
    }
    eat() {
        if (food[this.food] >= this.hunger) {
            food[this.food] -= this.hunger;
        }
        else {
            food[this.food] = 0;
        }
        console.log(food[this.food]);
        return this.food;
    }
}
const days = 7;
let load = false;
const food = [10, 15, 17, 23, 32];
const stable = [];
stable.push(new Animal("Dog", 0, "woof", 2));
stable.push(new Animal("Cow", 1, "moo", 5));
stable.push(new Animal("Sheep", 2, "mäh", 4));
stable.push(new Animal("Horse", 3, "neigh", 6));
stable.push(new Animal("Pig", 4, "oink", 9));
// Load
document.addEventListener('DOMContentLoaded', handleLoad);
function handleLoad() {
    load = true;
    simulate();
}
function simulate() {
    if (load === true) {
        for (let i = 0; i < days; i++) {
            const day = i + 1;
            console.log("Day:" + day);
            for (let j = 0; j < stable.length; j++) {
                stable[j].alert();
                stable[j].eat();
            }
            if (food[i] === 0) {
                return;
            }
        }
    }
}
//# sourceMappingURL=oldmacd.js.map