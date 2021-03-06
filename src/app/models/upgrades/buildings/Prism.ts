export class PrismUpgrades {
    id: number = 13;
    name: string = 'Prism'
    icon: string = '../images/prism.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    buyCost: number[] = 
        [0, 21000000000000000, 105000000000000000, 1050000000000000000, 105000000000000000000, 10500000000000000000000, 1050000000000000000000000, 1050000000000000000000000000, 1050000000000000000000000000000, 1050000000000000000000000000000000, 
            1050000000000000000000000000000000000, 10500000000000000000000000000000000000000, 105000000000000000000000000000000000000000000, 1050000000000000000000000000000000000000000000000];
    upgradeDescription: string[] = [
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
        `${this.name} cookies per second are doubled.`,
    ]

    constructor(level: number) {
        this.level = level;
    }
} 