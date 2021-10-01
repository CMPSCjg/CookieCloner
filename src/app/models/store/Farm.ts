export class Farm {
    id: number = 2;
    name: string = 'Farm';
    icon: string = '../../../public/images/farm.png'
    amountOwned: number = 0;
    buyCost: number = 1100;
    cookiesPerSecond: number = 8;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}