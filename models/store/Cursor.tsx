export class Cursor {
    id: number = 0;
    name: string = 'Cursor';
    icon: string = '../images/cursor.png'
    amountOwned: number = 0;
    buyCost: number = 15;
    cookiesPerSecond: number = 1;
    sellPrice: number = 5;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}