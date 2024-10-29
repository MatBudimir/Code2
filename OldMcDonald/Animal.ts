namespace OldMcDonald {

    export class Animal {
        name: string;
        type: string;
        food: string;
        appetite: number;
        sound: string;

        constructor(_name: string, _type: string, _food: string, _appetite: number, _sound: string) {
            this.set(_name, _type, _food, _appetite, _sound);
        }

        set(_name: string, _type: string, _food: string, _appetite: number, _sound: string): void {
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.appetite = _appetite;
            this.sound = _sound;
        }

        sing(): void {
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

        eat(_stockpile: Food[]): void {
            for (let i: number = 0; i < _stockpile.length; i++) {
                if (_stockpile[i].type === this.food && _stockpile[i].amount >= this.appetite) {
                    _stockpile[i].amount -= this.appetite;
                    const foodtext: HTMLDivElement = document.querySelector(`#food`)!;
                    foodtext.innerHTML = `${this.name} the ${this.type} ate ${this.appetite} ${this.food}.`;
                    document.querySelector(`#f${i}`)!.innerHTML = _stockpile[i].consumption();

                } else if (_stockpile[i].type === this.food && _stockpile[i].amount < this.appetite) {
                    const foodtext: HTMLDivElement = document.querySelector(`#food`)!;
                    foodtext.innerHTML = `Not enough ${this.food} left for ${this.name} to eat!`;
                    document.querySelector(`#f${i}`)!.innerHTML = `${_stockpile[i].type}: 0`;
                }
            }
        }
    }
}