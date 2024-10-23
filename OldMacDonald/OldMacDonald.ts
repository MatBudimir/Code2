namespace OldMacDonald{

    class Animal {
        public name: string;
        public type: string;
        public food: string;
        public sound: string;
        public appetite: number;

        public constructor(_name: string, _type: string, _food: string, _sound: string, _appetite: number){
            this.set(_name, _type, _food, _sound, _appetite);
        }

        public set(_name: string, _type: string, _food: string, _sound: string, _appetite: number): void{
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.sound = _sound;
            this.appetite = _appetite;
        }

        public eat(_type: string, _food: string, _sound: string, _appetite: number): void{

        }
        public sing(_name: string,_sound: string): void{

        }

        
    }
}
