export class Portal {
    id: number = 10;
    name: string = 'Portal';
    icon: string = '../../../public/images/portal.png'
    amountOwned: number = 0;
    buyCost: number = 1000000000000;
    cookiesPerSecond: number = 10000000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}