export class Mine {
    id: number = 3;
    name: string = 'Mine';
    icon: string = '../images/mine.png'
    amountOwned: number = 0;
    buyCost: number = 12000;
    cookiesPerSecond: number = 47;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}