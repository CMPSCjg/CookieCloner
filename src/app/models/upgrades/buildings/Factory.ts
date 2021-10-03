export class FactoryUpgrades {
    id: number = 4;
    name: string = 'Factory'
    icon: string = '../images/factory.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    buyCost: number[] = 
        [0, 1300000, 6500000, 65000000, 6500000000, 650000000000, 65000000000000, 65000000000000000, 65000000000000000000, 65000000000000000000000, 
            65000000000000000000000000, 650000000000000000000000000000, 6500000000000000000000000000000000, 6000000000000000000000000000000000000];

    constructor(level: number) {
        this.level = level;
    }
} 