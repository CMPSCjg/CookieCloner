export class TimeMachine {
    id: number = 11;
    name: string = 'TimeMachine';
    icon: string = '../images/time-machine.png'
    amountOwned: number = 0;
    buyCost: number = 14000000000000;
    cookiesPerSecond: number = 65000000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}