export class AntimatterCondenser {
    id: number = 12;
    name: string = 'AntimatterCondenser';
    icon: string = '../images/antimatter-condenser.png'
    amountOwned: number = 0;
    buyCost: number = 170000000000000;
    cookiesPerSecond: number = 430000000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}