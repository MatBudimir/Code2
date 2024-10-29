namespace OldMcDonald {

    export class Dog extends Animal {


        constructor(_name: string, _type: string, _food: string, _appetite: number, _sound: string) {
            super(_name, _type, _food, _appetite, _sound);
        }

        doSpecialAction(): void {
                console.log("Woof! Woof!")
        }

    }

}