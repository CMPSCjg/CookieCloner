export class Shipment {
    id: number = 8;
    name: string = 'Shipment';
    icon: string = '../images/shipment.png'
    amountOwned: number = 0;
    buyCost: number = 5100000000;
    cookiesPerSecond: number = 260000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}