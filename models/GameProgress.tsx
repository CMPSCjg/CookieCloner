import { Bank } from "./store/Bank";
import { Cursor } from "./store/Cursor";
import { Factory } from "./store/Factory";
import { Farm } from "./store/Farm";
import { Grandma } from "./store/Grandma";
import { Mine } from "./store/Mine";

export interface GameProgress {
    cookieTotalAmount: number
    store: {
        cursor: Cursor
        grandma: Grandma
        farm: Farm
        mine: Mine
        factory: Factory
        bank: Bank
    }
}