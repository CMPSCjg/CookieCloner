export class ChancemakerUpgrades {
    id: number = 14;
    name: string = 'Chancemaker'
    icon: string = '../images/chancemaker.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    buyCost: number[] = 
        [0, 260000000000000000, 1300000000000000000, 13000000000000000000, 1300000000000000000000, 130000000000000000000000, 13000000000000000000000000, 13000000000000000000000000000, 13000000000000000000000000000000, 13000000000000000000000000000000000, 
            13000000000000000000000000000000000000, 130000000000000000000000000000000000000000, 1300000000000000000000000000000000000000000000, 13000000000000000000000000000000000000000000000000];
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