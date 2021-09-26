export class CursorUpgrades {
    id: number = 0;
    name: string = 'Cursor'
    icon: string = '../images/cursor.png'
    level: number = 0;
    unlockAmount: number[] = [0, 1, 1, 10, 25, 50, 100, 150, 200, 250, 300, 350, 400, 450];
    buyCost: number[] = 
        [0, 100, 500, 10000, 100000, 10000000, 100000000, 1000000000, 10000000000, 10000000000000, 
            10000000000000000, 10000000000000000000, 10000000000000000000000, 10000000000000000000000000];

    constructor(level: number) {
        this.level = level;
    }

    gameProgressToString(): string {
        return this.level + '';
    }
}