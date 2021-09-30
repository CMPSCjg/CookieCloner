export class Factory {
    id: number = 4;
    name: string = 'Factory';
    icon: string = '../images/factory.png'
    amountOwned: number = 0;
    buyCost: number = 130000;
    cookiesPerSecond: number = 260;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}