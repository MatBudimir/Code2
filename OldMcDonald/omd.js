"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    // Game Initial Setup
    window.addEventListener("load", handleLoad);
    const animals = [];
    const stockpile = [];
    let i = 0;
    let j = 1;
    function handleLoad(_event) {
        animals.push(new OldMcDonald.Animal("Barky", "Dog", "Bones", 2, "woof"));
        animals.push(new OldMcDonald.Animal("Snowball", "Cat", "Fish", 1, "meow"));
        animals.push(new OldMcDonald.Animal("Kong", "Monkey", "Bananas", 7, "u-u a-a"));
        animals.push(new OldMcDonald.Animal("Stripey", "Zebra", "Apples", 5, "hiyah"));
        animals.push(new OldMcDonald.Animal("Schnitzel", "Pig", "Cabbages", 3, "oink"));
        stockpile.push(new OldMcDonald.Food("Bones", 24));
        stockpile.push(new OldMcDonald.Food("Fish", 10));
        stockpile.push(new OldMcDonald.Food("Bananas", 38));
        stockpile.push(new OldMcDonald.Food("Apples", 89));
        stockpile.push(new OldMcDonald.Food("Cabbages", 19));
        document.querySelector('#clock').innerHTML = "Day " + j;
        animals[i].eat(stockpile);
        animals[i].sing();
        for (let i = 0; i < stockpile.length; i++) {
            document.querySelector(`#f${i}`).innerHTML = stockpile[i].consumption();
        }
    }
    // Game Loop
    const nextButton = document.querySelector("#nextButton");
    nextButton.addEventListener("click", handleNextButton);
    function handleNextButton() {
        i++;
        if (i >= animals.length) {
            i = 0;
            j++;
        }
        animals[i].eat(stockpile);
        animals[i].sing();
        document.querySelector('#clock').innerHTML = "Day " + j;
    }
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=omd.js.map