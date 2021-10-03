export class FarmUpgrades {
    id: number = 2;
    name: string = 'Farm'
    icon: string = '../images/farm.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    buyCost: number[] = 
        [0, 11000, 55000, 550000, 55000000, 5500000000, 550000000000, 550000000000000, 550000000000000000, 550000000000000000000, 
            550000000000000000000000, 5500000000000000000000000000, 55000000000000000000000000000000, 550000000000000000000000000000000000];

    constructor(level: number) {
        this.level = level;
    }
} 