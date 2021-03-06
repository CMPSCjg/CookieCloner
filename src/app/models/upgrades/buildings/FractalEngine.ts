export class FractalEngineUpgrades {
    id: number = 15;
    name: string = 'Fractal Engine'
    icon: string = '../images/fractal-engine.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    buyCost: number[] = 
        [0, 3100000000000000000, 15500000000000000000, 155000000000000000000, 15500000000000000000000, 1550000000000000000000000, 155000000000000000000000000, 155000000000000000000000000000, 155000000000000000000000000000000, 155000000000000000000000000000000000, 
            155000000000000000000000000000000000000, 1550000000000000000000000000000000000000000, 15500000000000000000000000000000000000000000000, 155000000000000000000000000000000000000000000000000];
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