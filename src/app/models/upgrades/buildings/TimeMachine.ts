export class TimeMachineUpgrades {
    id: number = 11;
    name: string = 'Time Machine'
    icon: string = '../images/time-machine.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    buyCost: number[] = 
        [0, 140000000000000, 700000000000000, 7000000000000000, 700000000000000000, 70000000000000000000, 7000000000000000000000, 7000000000000000000000000, 7000000000000000000000000000, 7000000000000000000000000000000, 
            7000000000000000000000000000000000, 70000000000000000000000000000000000000, 700000000000000000000000000000000000000000, 7000000000000000000000000000000000000000000000];
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