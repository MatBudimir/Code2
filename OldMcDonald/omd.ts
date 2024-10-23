// Hello
namespace OldMcDonald
{
    // Classes
    class Animal
    {
        public name: string;
        public type: string;
        public food: string;
        public appetite: number;
        public sound: string;

        public constructor(_name: string, _type: string, _food: string, _appetite: number, _sound: string)
        {
            this.set(_name, _type, _food, _appetite, _sound);
        }

        public set(_name: string, _type: string, _food: string, _appetite: number, _sound: string): void
        {
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.appetite = _appetite;
            this.sound = _sound;
        }

        public sing(): void
        {
            const nameplate: HTMLDivElement = document.querySelector("#name")!;
            nameplate.innerHTML = `${this.name}`;

            const lyrics: HTMLDivElement = document.querySelector("#lyrics")!;
            lyrics.innerHTML = `Old MacDonald had a farm. E-I-E-I-O. <br>
            And on that farm he had a ${this.type}. E-I-E-I-O. <br>
            With an ${this.sound} ${this.sound} here. <br>
            And an ${this.sound} ${this.sound} there. <br>
            Here an ${this.sound}. <br>
            There an ${this.sound}. <br>
            Everywhere an ${this.sound} ${this.sound}. <br>
            Old MacDonald had a farm. E-I-E-I-O.`;
        }

        public eat(_stockpile: Array<Food>): void
        {
            for (let i: number = 0; i < stockpile.length; i++)
            {
                if (stockpile[i].type === this.food && stockpile[i].amount >= this.appetite)
                {
                    stockpile[i].amount -= this.appetite;
                    const foodtext: HTMLDivElement = document.querySelector(`#food`)!;
                    foodtext.innerHTML = `${this.name} the ${this.type} ate ${this.appetite} ${this.food}.`;
                    document.querySelector(`#f${i}`)!.innerHTML = stockpile[i].consumption();

                } else if (stockpile[i].type === this.food && stockpile[i].amount < this.appetite)
                {
                    const foodtext: HTMLDivElement = document.querySelector(`#food`)!;
                    foodtext.innerHTML = `Not enough ${this.food} left for ${this.name} to eat!`;
                    document.querySelector(`#f${i}`)!.innerHTML = `${stockpile[i].type}: 0`;
                }
            }
        }

        public update(_stockpile: Array<Food>): void
        {
            this.eat(_stockpile);
            this.sing();
        } 
    }

    class Food
    {
        type: string;
        amount: number;

        public constructor(_type: string, _amount: number)
        {
            this.set(_type, _amount);
        }

        public set(_type: string, _amount: number): void
        {
            this.type = _type;
            this.amount = _amount;
        }

        consumption(): string
        {
            return `${this.type}: ${this.amount}`;
        }
    }

    // Game Initial Setup
    const animals: Array<Animal> = [];
    animals.push(new Animal("Barky", "Dog", "Bones", 2, "woof"));
    animals.push(new Animal("Snowball", "Cat", "Fish", 1, "meow"));
    animals.push(new Animal("Kong", "Monkey", "Bananas", 7, "u-u a-a"));
    animals.push(new Animal("Stripey", "Zebra", "Apples", 5, "hiyah"));
    animals.push(new Animal("Schnitzel", "Pig", "Cabbages", 3, "oink"));

    const stockpile: Array<Food> = [];
    stockpile.push(new Food("Bones", 24));
    stockpile.push(new Food("Fish", 10));
    stockpile.push(new Food("Bananas", 38));
    stockpile.push(new Food("Apples", 89));
    stockpile.push(new Food("Cabbages", 19));

    let i: number = 0;
    let j: number = 1;

    document.querySelector('#clock')!.innerHTML = "Day " + j;

    for (let i:number = 0; i < stockpile.length; i++)
    {
        document.querySelector(`#f${i}`)!.innerHTML = stockpile[i].consumption();
    }

    // Game Loop
    const nextButton: HTMLButtonElement = document.querySelector("#nextButton")!;
    nextButton.addEventListener("click", () =>
    {
        i++;
        if (i > animals.length)
        {
            i = 0;
            j++;
        }
        animals[i].update(stockpile);
        document.querySelector('#clock')!.innerHTML = "Day " + j;
    });
    animals[i].update(stockpile);


}