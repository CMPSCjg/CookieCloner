export class Temple {
    id: number = 6;
    name: string = 'Temple';
    icon: string = '../images/temple.png'
    amountOwned: number = 0;
    buyCost: number = 20000000;
    cookiesPerSecond: number = 7800;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}