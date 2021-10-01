export class Idleverse {
    id: number = 17;
    name: string = 'Idleverse';
    icon: string = '../../../public/images/idleverse.png'
    amountOwned: number = 0;
    buyCost: number = 12000000000000000000000;
    cookiesPerSecond: number = 8300000000000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}