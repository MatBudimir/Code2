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
        console.log(`Old MacDonald had a farm. E-I-E-I-O.
            And on that farm he had a ${this.type}. E-I-E-I-O.
            With an ${this.noise} ${this.noise} here.
            And an ${this.noise} ${this.noise} there.
            Here an ${this.noise}.
            There an ${this.noise}.
            Everywhere an ${this.noise} ${this.noise}.
            Old MacDonald had a farm. E-I-E-I-O.`);
        return this.noise;

    }

    eat(): number {
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

const days: number = 7;
let load: boolean = false;

const food: number[] = [10, 15, 17, 22, 32];

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
        for (let i: number = 0; i < days; i++) {
            const day: number = i + 1;
            console.log("Day:" + day)
            for (let j: number = 0; j < stable.length; j++) {

                stable[j].alert();
                stable[j].eat();
            }
            if (food[i] === 0) {
                return;
            }
        }
    }
}