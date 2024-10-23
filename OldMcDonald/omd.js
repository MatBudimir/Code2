"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    // Classes
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
        sing() {
            const nameplate = document.querySelector("#name");
            nameplate.innerHTML = `${this.name}`;
            const lyrics = document.querySelector("#lyrics");
            lyrics.innerHTML = `Old MacDonald had a farm. E-I-E-I-O. <br>
            And on that farm he had a ${this.type}. E-I-E-I-O. <br>
            With an ${this.sound} ${this.sound} here. <br>
            And an ${this.sound} ${this.sound} there. <br>
            Here an ${this.sound}. <br>
            There an ${this.sound}. <br>
            Everywhere an ${this.sound} ${this.sound}. <br>
            Old MacDonald had a farm. E-I-E-I-O.`;
        }
        eat(_stockpile) {
            for (let i = 0; i < stockpile.length; i++) {
                if (stockpile[i].type === this.food && stockpile[i].amount >= this.appetite) {
                    stockpile[i].amount -= this.appetite;
                    const foodtext = document.querySelector(`#food`);
                    foodtext.innerHTML = `${this.name} the ${this.type} ate ${this.appetite} ${this.food}.`;
                    document.querySelector(`#f${i}`).innerHTML = stockpile[i].consumption();
                }
                else if (stockpile[i].type === this.food && stockpile[i].amount < this.appetite) {
                    const foodtext = document.querySelector(`#food`);
                    foodtext.innerHTML = `Not enough ${this.food} left for ${this.name} to eat!`;
                    document.querySelector(`#f${i}`).innerHTML = stockpile[i].consumption();
                }
            }
        }
        update(_stockpile) {
            this.eat(_stockpile);
            this.sing();
        }
    }
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
    // Game Initial Setup
    const animals = [];
    animals.push(new Animal("Barky", "Dog", "Bones", 2, "woof"));
    animals.push(new Animal("Snowball", "Cat", "Fish", 1, "meow"));
    animals.push(new Animal("Kong", "Monkey", "Bananas", 7, "u-u a-a"));
    animals.push(new Animal("Stripey", "Zebra", "Apples", 5, "hiyah"));
    animals.push(new Animal("Schnitzel", "Pig", "Cabbages", 3, "oink"));
    const stockpile = [];
    stockpile.push(new Food("Bones", 24));
    stockpile.push(new Food("Fish", 10));
    stockpile.push(new Food("Bananas", 38));
    stockpile.push(new Food("Apples", 89));
    stockpile.push(new Food("Cabbage", 19));
    let i = 0;
    let j = 1;
    document.querySelector('#clock').innerHTML = "Day " + j;
    for (let i = 0; i < stockpile.length; i++) {
        document.querySelector(`#f${i}`).innerHTML = stockpile[i].consumption();
    }
    // Game Loop
    const nextButton = document.querySelector("#nextButton");
    nextButton.addEventListener("click", () => {
        i++;
        if (i >= animals.length) {
            i = 0;
            j++;
        }
        animals[i].update(stockpile);
        document.querySelector('#clock').innerHTML = "Day " + j;
    });
    animals[i].update(stockpile);
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=omd.js.map