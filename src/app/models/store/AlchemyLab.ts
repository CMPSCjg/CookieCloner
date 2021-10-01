export class AlchemyLab {
    id: number = 9;
    name: string = 'Alchemy Lab';
    icon: string = '../../../public/images/alchemy-lab.png'
    amountOwned: number = 0;
    buyCost: number = 75000000000;
    cookiesPerSecond: number = 1600000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}