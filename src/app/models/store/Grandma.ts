export class Grandma {
    id: number = 1;
    name: string = 'Grandma';
    icon: string = '../images/grandma.png'
    amountOwned: number = 0;
    buyCost: number = 100;
    cookiesPerSecond: number = 3;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}