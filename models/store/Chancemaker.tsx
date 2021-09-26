export class Chancemaker {
    id: number = 14;
    name: string = 'Chancemaker';
    icon: string = '../images/chancemaker.png'
    amountOwned: number = 0;
    buyCost: number = 26000000000000000;
    cookiesPerSecond: number = 21000000000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}