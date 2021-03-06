export class Bank {
    id: number = 5;
    name: string = 'Bank';
    icon: string = '../../../public/images/bank.png'
    amountOwned: number = 0;
    buyCost: number = 1400000;
    cookiesPerSecond: number = 1400;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}