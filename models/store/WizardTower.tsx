export class WizardTower {
    id: number = 7;
    name: string = 'Wizard Tower';
    icon: string = '../images/wizard-tower.png'
    amountOwned: number = 0;
    buyCost: number = 330000000;
    cookiesPerSecond: number = 44000;

    constructor(amountOwned: number, buyCost: number) {
        this.amountOwned = amountOwned;
        this.buyCost = buyCost;
    }

    gameProgressToString(): string {
        return this.amountOwned + ';' + this.buyCost 
    }
}