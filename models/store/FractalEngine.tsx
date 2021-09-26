export class FractalEngine {
    id: number = 15;
    name: string = 'Fractal Engine';
    icon: string = '../images/fractal-engine.png'
    amountOwned: number = 0;
    buyCost: number = 310000000000000000;
    cookiesPerSecond: number = 150000000000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}