import { AlchemyLab } from "./store/AlchemyLab";
import { AntimatterCondenser } from "./store/AntimatterCondenser";
import { Bank } from "./store/Bank";
import { Chancemaker } from "./store/Chancemaker";
import { Cursor } from "./store/Cursor";
import { Factory } from "./store/Factory";
import { Farm } from "./store/Farm";
import { FractalEngine } from "./store/FractalEngine";
import { Grandma } from "./store/Grandma";
import { Idleverse } from "./store/Idleverse";
import { JavascriptConsole } from "./store/JavascriptConsole";
import { Mine } from "./store/Mine";
import { Portal } from "./store/Portal";
import { Prism } from "./store/Prism";
import { Shipment } from "./store/Shipment";
import { Temple } from "./store/Temple";
import { TimeMachine } from "./store/TimeMachine";
import { WizardTower } from "./store/WizardTower";

export interface GameProgress {
    cookieTotalAmount: number
    store: {
        cursor: Partial<Cursor>
        grandma: Partial<Grandma>
        farm: Partial<Farm>
        mine: Partial<Mine>
        factory: Partial<Factory>
        bank: Partial<Bank>
        temple: Partial<Temple>
        wizardTower: Partial<WizardTower>
        shipment: Partial<Shipment>
        alchemyLab: Partial<AlchemyLab>
        portal: Partial<Portal>
        timeMachine: Partial<TimeMachine>
        antimatterCondenser: Partial<AntimatterCondenser>
        prism: Partial<Prism>
        chancemaker: Partial<Chancemaker>
        fractalEngine: Partial<FractalEngine>
        javascriptConsole: Partial<JavascriptConsole>
        idleverse: Partial<Idleverse>
    },
    stats: {
        cookiesInBank: number
        cookiesBakedThisPrestige: number
        cookiesBakedAllTime: number
        cookiesForfeitedByMostRecentPrestige: number
        startDate: number
        totalTimePlayed: number
        timePlayedThisPrestige: number
        numberOfBuildingsOwned: number
        cookiesPerSecond: number
        rawCookiesPerSecond: number
        cookiesPerClick: number
        cookieClicks: number
        handMadeCookies: number
        goldenCookieClicks: number
        goldenCookieClicksAllTime: number
        numberOfTimesPrestiged: number
    }
}