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
            for (let i = 0; i < _stockpile.length; i++) {
                if (_stockpile[i].type === this.food && _stockpile[i].amount >= this.appetite) {
                    _stockpile[i].amount -= this.appetite;
                    const foodtext = document.querySelector(`#food`);
                    foodtext.innerHTML = `${this.name} the ${this.type} ate ${this.appetite} ${this.food}.`;
                    document.querySelector(`#f${i}`).innerHTML = _stockpile[i].consumption();
                }
                else if (_stockpile[i].type === this.food && _stockpile[i].amount < this.appetite) {
                    const foodtext = document.querySelector(`#food`);
                    foodtext.innerHTML = `Not enough ${this.food} left for ${this.name} to eat!`;
                    document.querySelector(`#f${i}`).innerHTML = `${_stockpile[i].type}: 0`;
                }
            }
        }
    }
    OldMcDonald.Animal = Animal;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=Animal.js.map