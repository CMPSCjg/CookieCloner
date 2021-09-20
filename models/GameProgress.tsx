import { Cursor } from "./store/Cursor";
import { Grandma } from "./store/Grandma";

export interface GameProgress {
    cookieTotalAmount: number
    store: {
        cursor: Cursor
        grandma: Grandma
    }
}