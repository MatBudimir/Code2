class Animal {
    type: string;
    food: number[];
    noise: string;
    hunger: number;

    constructor(_type: string, _food: number[], _noise: string, _hunger: number) {
        this.set(_type, _food, _noise, _hunger);
    }

    public set(_type: string, _food: number[], _noise: string, _hunger: number): void {
        this.type = _type;
        this.food = _food;
        this.noise = _noise;
        this.hunger = _hunger;
    }

    alert(): string {
        return stable[i].noise.toString();
    }

    eat(_food: number[]): number[] {
        stable[i].food[i] -= this.hunger;
        return stable[i].food;
    }
}

const days: number = 1;
let i: number = 0;
let load: boolean = false;

const food: number[] = [10, 15, 17, 23, 32];

const stable: Animal[] = [];
stable.push(new Animal("Dog", food, "woof", 2));
stable.push(new Animal("Cow", food, "moo", 5));
stable.push(new Animal("Sheep", food, "mäh", 4));
stable.push(new Animal("Horse", food, "neigh", 6));
stable.push(new Animal("Pig", food, "oink", 9));


// Load
document.addEventListener('DOMContentLoaded', handleLoad);

function handleLoad(): void {
    load = true;
}

function simulate(): void {
    if (load === true) {
        for (let j: number = 0; j < days; j++) {
            for (let j: number = 0; j < stable.length; j++) {
                i++
                stable[i].alert();
                stable[i].eat(food);
                if (food[i] === 0) {
                    load = false;
                }
            }
        }
    }
}