export class JavascriptConsole {
    id: number = 16;
    name: string = 'JavascriptConsole';
    icon: string = '../images/javascript-console.png'
    amountOwned: number = 0;
    buyCost: number = 71000000000000000000;
    cookiesPerSecond: number = 1100000000000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}