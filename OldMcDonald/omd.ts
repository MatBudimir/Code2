namespace OldMcDonald {
    
    class Animal {
        public name: string;
        public type: string;
        public food: string;
        public appetite: number;
        public sound: string;

        public constructor(_name: string, _type: string, _food: string, _appetite: number, _sound: string) {
            this.set(_name, _type, _food, _appetite, _sound);
        }
    
        public set(_name: string, _type: string, _food: string, _appetite: number, _sound: string): void {
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.appetite = _appetite;
            this.sound = _sound;
        }

        public eat(_type: string, _food: string, _appetite: number): void {

        }

        public sing(_name: string, _sound: string): void {

        }
    }


    class Food {
        type: string;
        amount: number;

        consumtion(_type: string, _amount: number): void {

        }
    }
    
    const animals: Array<Animal> = [];
    animals.push(new Animal("Barky", "Dog", "Bones", 2, "Woof"));
    animals.push(new Animal("Snowball", "Cat", "Fish", 1, "Meow"));
    animals.push(new Animal("Kong", "Monkey", "Bananas", 7, "U-u A-a"));
    animals.push(new Animal("Stripey", "Zebra", "Apples", 5, "Hiyah"));
    animals.push(new Animal("Schnitzel", "Pig", "Cabbage", 3, "Oink"))
}