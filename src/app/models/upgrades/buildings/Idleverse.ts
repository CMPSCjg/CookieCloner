export class IdleverseUpgrades {
    id: number = 17;
    name: string = 'Idleverse'
    icon: string = '../images/idleverse.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    buyCost: number[] = 
        [0, 120000000000000000000000, 600000000000000000000000, 6000000000000000000000000, 600000000000000000000000000, 60000000000000000000000000000, 6000000000000000000000000000000, 6000000000000000000000000000000000, 6000000000000000000000000000000000000, 6000000000000000000000000000000000000000, 
            6000000000000000000000000000000000000000000, 60000000000000000000000000000000000000000000000, 600000000000000000000000000000000000000000000000000, 6000000000000000000000000000000000000000000000000000000];
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