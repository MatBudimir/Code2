namespace OldMcDonald {

    export class Food {
        type: string;
        amount: number;

        constructor(_type: string, _amount: number) {
            this.set(_type, _amount);
        }

        set(_type: string, _amount: number): void {
            this.type = _type;
            this.amount = _amount;
        }

        consumption(): string {
            return `${this.type}: ${this.amount}`;
        }
    }
}