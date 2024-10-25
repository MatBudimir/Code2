class Animal {
    type: string;
    food: number;
    noise: string;
    hunger: number;

    constructor(_type: string, _food: number, _noise: string, _hunger: number) {
        this.set(_type, _food, _noise, _hunger);
    }

    public set(_type: string, _food: number, _noise: string, _hunger: number): void {
        this.type = _type;
        this.food = _food;
        this.noise = _noise;
        this.hunger = _hunger;
    }

    alert(): string {
        console.log(this.noise);
        return this.noise;

    }

    eat(): number {
        food[stable[i].food] -= this.hunger;
        console.log(food[i]);
        return this.food;
    }
}

const days: number = 1;
let i: number = 0;
let load: boolean = false;

const food: number[] = [10, 15, 17, 23, 32];

const stable: Animal[] = [];
stable.push(new Animal("Dog", 0, "woof", 2));
stable.push(new Animal("Cow", 1, "moo", 5));
stable.push(new Animal("Sheep", 2, "mäh", 4));
stable.push(new Animal("Horse", 3, "neigh", 6));
stable.push(new Animal("Pig", 4, "oink", 9));


// Load
document.addEventListener('DOMContentLoaded', handleLoad);

function handleLoad(): void {
    load = true;
    simulate();
}

function simulate(): void {
    if (load === true) {
        for (let j: number = 0; j < days; j++) {
            for (let j: number = 0; j < stable.length; j++) {

                stable[i].alert();
                stable[i].eat();
                i++
                if (food[i] <= 0) {
                    load = false;
                }
            }
        }
    }
}