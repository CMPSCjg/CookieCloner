export class AntimatterCondenserUpgrades {
    id: number = 12;
    name: string = 'Antimatter Condenser'
    icon: string = '../images/antimatter-condenser.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    buyCost: number[] = 
        [0, 1700000000000000, 8500000000000000, 85000000000000000, 8500000000000000000, 850000000000000000000, 85000000000000000000000, 85000000000000000000000000, 85000000000000000000000000000, 85000000000000000000000000000000, 
            85000000000000000000000000000000, 850000000000000000000000000000000000, 8500000000000000000000000000000000000000, 85000000000000000000000000000000000000000000];
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