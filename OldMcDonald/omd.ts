namespace OldMcDonald {
    // Game Initial Setup
    window.addEventListener("load", handleLoad);

    const animals: Animal[] = [];
    const stockpile: Food[] = [];

    let i: number = 0;
    let j: number = 1;

    function handleLoad(_event: Event): void {
        animals.push(new Dog("Barky", "Dog", "Bones", 2, "woof"));
        animals.push(new Cat("Snowball", "Cat", "Fish", 1, "meow"));
        animals.push(new Monkey("Kong", "Monkey", "Bananas", 7, "u-u a-a"));
        animals.push(new Zebra("Stripey", "Zebra", "Apples", 5, "hiyah"));
        animals.push(new Pig("Schnitzel", "Pig", "Cabbages", 3, "oink"));

        stockpile.push(new Food("Bones", 24));
        stockpile.push(new Food("Fish", 10));
        stockpile.push(new Food("Bananas", 38));
        stockpile.push(new Food("Apples", 89));
        stockpile.push(new Food("Cabbages", 19));


        document.querySelector('#clock')!.innerHTML = "Day " + j;
        animals[i].eat(stockpile);
        animals[i].sing();

        for (let i: number = 0; i < stockpile.length; i++) {
            document.querySelector(`#f${i}`)!.innerHTML = stockpile[i].consumption();
        }
    }

    // Game Loop
    const nextButton: HTMLButtonElement = document.querySelector("#nextButton")!;
    nextButton.addEventListener("click", handleNextButton);

    function handleNextButton(): void {
        i++;
        if (i >= animals.length) {
            i = 0;
            j++;
        }
        animals[i].eat(stockpile);
        animals[i].sing();

        const animal: Animal = animals[i];
        if (animal instanceof Dog || animal instanceof Cat || animal instanceof Monkey || animal instanceof Zebra || animal instanceof Pig) {
            animal.doSpecialAction();
        }
        
        document.querySelector('#clock')!.innerHTML = "Day " + j;
    }
}