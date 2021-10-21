export class JavascriptConsoleUpgrades {
    id: number = 16;
    name: string = 'Javascript Console'
    icon: string = '../images/javascript-console.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    buyCost: number[] = 
        [0, 710000000000000000000, 3550000000000000000000, 35500000000000000000000, 3550000000000000000000000, 355000000000000000000000000, 35500000000000000000000000000, 35500000000000000000000000000000, 35500000000000000000000000000000000, 35500000000000000000000000000000000000, 
            35500000000000000000000000000000000000000, 355000000000000000000000000000000000000000000, 3550000000000000000000000000000000000000000000000, 35500000000000000000000000000000000000000000000000000];
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