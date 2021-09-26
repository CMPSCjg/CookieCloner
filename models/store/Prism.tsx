export class Prism {
    id: number = 13;
    name: string = 'Prism';
    icon: string = '../images/prism.png'
    amountOwned: number = 0;
    buyCost: number = 2100000000000000;
    cookiesPerSecond: number = 2900000000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}