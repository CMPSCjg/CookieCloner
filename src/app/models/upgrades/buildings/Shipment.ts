export class ShipmentUpgrades {
    id: number = 8;
    name: string = 'Shipment'
    icon: string = '../images/shipment.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    buyCost: number[] = 
        [0, 51000000000, 255000000000, 2550000000000, 255000000000000, 25500000000000000, 2550000000000000000, 2550000000000000000000, 2550000000000000000000000, 2550000000000000000000000000, 
            2550000000000000000000000000000, 25500000000000000000000000000000000, 255000000000000000000000000000000000000, 2550000000000000000000000000000000000000000];
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