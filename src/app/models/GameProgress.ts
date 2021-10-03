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
import { AlchemyLabUpgrades } from "./upgrades/buildings/AlchemyLab";
import { AntimatterCondenserUpgrades } from "./upgrades/buildings/AntimatterCondenser";
import { BankUpgrades } from "./upgrades/buildings/Bank";
import { ChancemakerUpgrades } from "./upgrades/buildings/Chancemaker";
import { CursorUpgrades } from "./upgrades/buildings/Cursor";
import { FactoryUpgrades } from "./upgrades/buildings/Factory";
import { FarmUpgrades } from "./upgrades/buildings/Farm";
import { FractalEngineUpgrades } from "./upgrades/buildings/FractalEngine";
import { GrandmaUpgrades } from "./upgrades/buildings/Grandma";
import { IdleverseUpgrades } from "./upgrades/buildings/Idleverse";
import { JavascriptConsoleUpgrades } from "./upgrades/buildings/JavascriptConsole";
import { MineUpgrades } from "./upgrades/buildings/Mine";
import { PortalUpgrades } from "./upgrades/buildings/Portal";
import { PrismUpgrades } from "./upgrades/buildings/Prism";
import { ShipmentUpgrades } from "./upgrades/buildings/Shipment";
import { TempleUpgrades } from "./upgrades/buildings/Temple";
import { TimeMachineUpgrades } from "./upgrades/buildings/TimeMachine";
import { WizardTowerUpgrades } from "./upgrades/buildings/WizardTower";

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
    },
    buildingUpgrades: {
        cursor: Partial<CursorUpgrades>
        grandma: Partial<GrandmaUpgrades>
        farm: Partial<FarmUpgrades>
        mine: Partial<MineUpgrades>
        factory: Partial<FactoryUpgrades>
        bank: Partial<BankUpgrades>
        temple: Partial<TempleUpgrades>
        wizardTower: Partial<WizardTowerUpgrades>
        shipment: Partial<ShipmentUpgrades>
        alchemyLab: Partial<AlchemyLabUpgrades>
        portal: Partial<PortalUpgrades>
        timeMachine: Partial<TimeMachineUpgrades>
        antimatterCondenser: Partial<AntimatterCondenserUpgrades>
        prism: Partial<PrismUpgrades>
        chancemaker: Partial<ChancemakerUpgrades>
        fractalEngine: Partial<FractalEngineUpgrades>
        javascriptConsole: Partial<JavascriptConsoleUpgrades>
        idleverse: Partial<IdleverseUpgrades>
    }
}