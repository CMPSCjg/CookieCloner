import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { iOSDeviceCheck } from '../../helpers/iOSDeviceCheck';

import { GameProgress } from '../../models/GameProgress';
import { Cursor } from '../../models/store/Cursor';
import { Grandma } from '../../models/store/Grandma';
import { Factory } from '../../models/store/Factory';
import { Farm } from '../../models/store/Farm';
import { Mine } from '../../models/store/Mine';
import { Bank } from '../../models/store/Bank';
import { Temple } from '../../models/store/Temple';
import { WizardTower } from '../../models/store/WizardTower';
import { Shipment } from '../../models/store/Shipment';
import { AlchemyLab } from '../../models/store/AlchemyLab';
import { Portal } from '../../models/store/Portal';
import { TimeMachine } from '../../models/store/TimeMachine';
import { AntimatterCondenser } from '../../models/store/AntimatterCondenser';
import { Prism } from '../../models/store/Prism';
import { Chancemaker } from '../../models/store/Chancemaker';
import { FractalEngine } from '../../models/store/FractalEngine';
import { JavascriptConsole } from '../../models/store/JavascriptConsole';
import { Idleverse } from '../../models/store/Idleverse';
import { CursorUpgrades } from '../../models/upgrades/buildings/Cursor';
import { GrandmaUpgrades } from '../../models/upgrades/buildings/Grandma';
import { FarmUpgrades } from '../../models/upgrades/buildings/Farm';
import { MineUpgrades } from '../../models/upgrades/buildings/Mine';
import { FactoryUpgrades } from '../../models/upgrades/buildings/Factory';
import { BankUpgrades } from '../../models/upgrades/buildings/Bank';
import { TempleUpgrades } from '../../models/upgrades/buildings/Temple';
import { WizardTowerUpgrades } from '../../models/upgrades/buildings/WizardTower';
import { ShipmentUpgrades } from '../../models/upgrades/buildings/Shipment';
import { AlchemyLabUpgrades } from '../../models/upgrades/buildings/AlchemyLab';
import { PortalUpgrades } from '../../models/upgrades/buildings/Portal';
import { TimeMachineUpgrades } from '../../models/upgrades/buildings/TimeMachine';
import { AntimatterCondenserUpgrades } from '../../models/upgrades/buildings/AntimatterCondenser';
import { PrismUpgrades } from '../../models/upgrades/buildings/Prism';
import { ChancemakerUpgrades } from '../../models/upgrades/buildings/Chancemaker';
import { FractalEngineUpgrades } from '../../models/upgrades/buildings/FractalEngine';
import { JavascriptConsoleUpgrades } from '../../models/upgrades/buildings/JavascriptConsole';
import { IdleverseUpgrades } from '../../models/upgrades/buildings/Idleverse';
import { NumberFormatType } from '../../models/NumberFormatType';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

    NumberFormatType = NumberFormatType;

    // Maintain an array of interval IDs in order to stop these when the user navigates off this page.
    runningIntervalProcesses: Array<any> = [];
    iOSDevice = false;
    isMobile = false;

    // Define cookie amount variables that can be used across the scope of the game.
    cookieTotalAmount = 0;
    cookiesPerSecond = 0;

    cookiesInBank = 0;
    cookiesBakedThisPrestige = 0;
    cookiesBakedAllTime = 0;
    cookiesForfeitedByMostRecentPrestige = 0;
    startDate = 0;
    totalTimePlayed = 0;
    timePlayedThisPrestige = 0;
    numberOfBuildingsOwned = 0;
    rawCookiesPerSecond = 0;
    cookiesPerClick = 0;
    cookieClicks = 0;
    handMadeCookies = 0;
    goldenCookieClicks = 0;
    goldenCookieClicksAllTime = 0;
    numberOfTimesPrestiged = 0;

    formattedStartDate;

    // Define store buildings as classes that can be used across the scope of the game.
    cursor = new Cursor(0, 15);
    grandma = new Grandma(0, 100);
    farm = new Farm(0, 1100);
    mine = new Mine(0, 12000);
    factory = new Factory(0, 130000);
    bank = new Bank(0, 1400000);
    temple = new Temple(0, 20000000);
    wizardTower = new WizardTower(0, 330000000);
    shipment = new Shipment(0, 5100000000);
    alchemyLab = new AlchemyLab(0, 75000000000);
    portal = new Portal(0, 1000000000000);
    timeMachine = new TimeMachine(0, 14000000000000);
    antimatterCondenser = new AntimatterCondenser(0, 170000000000000);
    prism = new Prism(0, 2100000000000000);
    chancemaker = new Chancemaker(0, 26000000000000000);
    fractalEngine = new FractalEngine(0, 310000000000000000);
    javascriptConsole = new JavascriptConsole(0, 71000000000000000000);
    idleverse = new Idleverse(0, 12000000000000000000000);
    buildings:
        Array<Cursor | Grandma | Farm | Mine | Factory | Bank | Temple | WizardTower | Shipment | AlchemyLab |
            Portal | TimeMachine | AntimatterCondenser | Prism | Chancemaker | FractalEngine | JavascriptConsole | Idleverse> = [];

    // Define building upgrades as classes that can be used across the scope of the game.
    cursorUpgrades = new CursorUpgrades(0);
    grandmaUpgrades = new GrandmaUpgrades(0);
    farmUpgrades = new FarmUpgrades(0);
    mineUpgrades = new MineUpgrades(0);
    factoryUpgrades = new FactoryUpgrades(0);
    bankUpgrades = new BankUpgrades(0);
    templeUpgrades = new TempleUpgrades(0);
    wizardTowerUpgrades = new WizardTowerUpgrades(0);
    shipmentUpgrades = new ShipmentUpgrades(0);
    alchemyLabUpgrades = new AlchemyLabUpgrades(0);
    portalUpgrades = new PortalUpgrades(0);
    timeMachineUpgrades = new TimeMachineUpgrades(0);
    antimatterCondenserUpgrades = new AntimatterCondenserUpgrades(0);
    prismUpgrades = new PrismUpgrades(0);
    chancemakerUpgrades = new ChancemakerUpgrades(0);
    fractalEngineUpgrades = new FractalEngineUpgrades(0);
    javascriptConsoleUpgrades = new JavascriptConsoleUpgrades(0);
    idleverseUpgrades = new IdleverseUpgrades(0);
    buildingUpgrades:
        Array<CursorUpgrades | GrandmaUpgrades | FarmUpgrades | MineUpgrades | FactoryUpgrades | BankUpgrades | WizardTowerUpgrades
        | ShipmentUpgrades | AlchemyLabUpgrades | PortalUpgrades | AntimatterCondenserUpgrades | PrismUpgrades | ChancemakerUpgrades
        | FractalEngineUpgrades | JavascriptConsoleUpgrades | IdleverseUpgrades> = [];

    constructor() {

        // Store these buildings in an array that can be looped over and reduce redundant code.
        this.buildings.push(this.cursor);
        this.buildings.push(this.grandma);
        this.buildings.push(this.farm);
        this.buildings.push(this.mine);
        this.buildings.push(this.factory);
        this.buildings.push(this.bank);
        this.buildings.push(this.temple);
        this.buildings.push(this.wizardTower);
        this.buildings.push(this.shipment);
        this.buildings.push(this.alchemyLab);
        this.buildings.push(this.portal);
        this.buildings.push(this.timeMachine);
        this.buildings.push(this.antimatterCondenser);
        this.buildings.push(this.prism);
        this.buildings.push(this.chancemaker);
        this.buildings.push(this.fractalEngine);
        this.buildings.push(this.javascriptConsole);
        this.buildings.push(this.idleverse)

        // Store these building upgrades in an array that can be looped over and reduce redundant code.
        this.buildingUpgrades.push(this.cursorUpgrades)
        this.buildingUpgrades.push(this.grandmaUpgrades)
        this.buildingUpgrades.push(this.farmUpgrades)
        this.buildingUpgrades.push(this.mineUpgrades)
        this.buildingUpgrades.push(this.factoryUpgrades)
        this.buildingUpgrades.push(this.bankUpgrades)
        this.buildingUpgrades.push(this.templeUpgrades)
        this.buildingUpgrades.push(this.wizardTowerUpgrades)
        this.buildingUpgrades.push(this.shipmentUpgrades)
        this.buildingUpgrades.push(this.alchemyLabUpgrades)
        this.buildingUpgrades.push(this.portalUpgrades)
        this.buildingUpgrades.push(this.timeMachineUpgrades)
        this.buildingUpgrades.push(this.antimatterCondenserUpgrades)
        this.buildingUpgrades.push(this.prismUpgrades)
        this.buildingUpgrades.push(this.chancemakerUpgrades)
        this.buildingUpgrades.push(this.fractalEngineUpgrades)
        this.buildingUpgrades.push(this.javascriptConsoleUpgrades)
        this.buildingUpgrades.push(this.idleverseUpgrades)

        /* Retrieve the current game progress from their browser's local storage. */

        // The method has fallback code for default values if they either don't have progress or haven't unlocked buildings yet.
        const gameProgressFromBrowser: GameProgress = this.getCurrentGameProgressFromBrowser();

        // Determine whether or not the device hitting the application is a iOS device.
        this.iOSDevice = iOSDeviceCheck();

        // Store their cookie total in memory and update the UI to reflect the value stored.
        this.cookieTotalAmount = gameProgressFromBrowser.cookieTotalAmount;

        // Update the Cursor class with their total amount owned and the price for their next purchase.
        this.cursor.amountOwned = gameProgressFromBrowser.store.cursor.amountOwned
        this.cursor.buyCost = gameProgressFromBrowser.store.cursor.buyCost

        // Update the Grandma class with their total amount owned and the price for their next purchase.
        this.grandma.amountOwned = gameProgressFromBrowser.store.grandma.amountOwned
        this.grandma.buyCost = gameProgressFromBrowser.store.grandma.buyCost

        // Update the Farm class with their total amount owned and the price for their next purchase.
        this.farm.amountOwned = gameProgressFromBrowser.store.farm.amountOwned
        this.farm.buyCost = gameProgressFromBrowser.store.farm.buyCost

        // Update the Mine class with their total amount owned and the price for their next purchase.
        this.mine.amountOwned = gameProgressFromBrowser.store.mine.amountOwned
        this.mine.buyCost = gameProgressFromBrowser.store.mine.buyCost

        // Update the Factory class with their total amount owned and the price for their next purchase.
        this.factory.amountOwned = gameProgressFromBrowser.store.factory.amountOwned
        this.factory.buyCost = gameProgressFromBrowser.store.factory.buyCost

        // Update the Bank class with their total amount owned and the price for their next purchase.
        this.bank.amountOwned = gameProgressFromBrowser.store.bank.amountOwned
        this.bank.buyCost = gameProgressFromBrowser.store.bank.buyCost

        // Update the Temple class with their total amount owned and the price for their next purchase.
        this.temple.amountOwned = gameProgressFromBrowser.store.temple.amountOwned
        this.temple.buyCost = gameProgressFromBrowser.store.temple.buyCost

        // Update the WizardTower class with their total amount owned and the price for their next purchase.
        this.wizardTower.amountOwned = gameProgressFromBrowser.store.wizardTower.amountOwned
        this.wizardTower.buyCost = gameProgressFromBrowser.store.wizardTower.buyCost

        // Update the Shipment class with their total amount owned and the price for their next purchase.
        this.shipment.amountOwned = gameProgressFromBrowser.store.shipment.amountOwned
        this.shipment.buyCost = gameProgressFromBrowser.store.shipment.buyCost

        // Update the AlchemyLab class with their total amount owned and the price for their next purchase.
        this.alchemyLab.amountOwned = gameProgressFromBrowser.store.alchemyLab.amountOwned
        this.alchemyLab.buyCost = gameProgressFromBrowser.store.alchemyLab.buyCost

        // Update the Portal class with their total amount owned and the price for their next purchase.
        this.portal.amountOwned = gameProgressFromBrowser.store.portal.amountOwned
        this.portal.buyCost = gameProgressFromBrowser.store.portal.buyCost

        // Update the TimeMachine class with their total amount owned and the price for their next purchase.
        this.timeMachine.amountOwned = gameProgressFromBrowser.store.timeMachine.amountOwned
        this.timeMachine.buyCost = gameProgressFromBrowser.store.timeMachine.buyCost

        // Update the AntimatterCondenser class with their total amount owned and the price for their next purchase.
        this.antimatterCondenser.amountOwned = gameProgressFromBrowser.store.antimatterCondenser.amountOwned
        this.antimatterCondenser.buyCost = gameProgressFromBrowser.store.antimatterCondenser.buyCost

        // Update the Prism class with their total amount owned and the price for their next purchase.
        this.prism.amountOwned = gameProgressFromBrowser.store.prism.amountOwned
        this.prism.buyCost = gameProgressFromBrowser.store.prism.buyCost

        // Update the Chancemaker class with their total amount owned and the price for their next purchase.
        this.chancemaker.amountOwned = gameProgressFromBrowser.store.chancemaker.amountOwned
        this.chancemaker.buyCost = gameProgressFromBrowser.store.chancemaker.buyCost

        // Update the FractalEngine class with their total amount owned and the price for their next purchase.
        this.fractalEngine.amountOwned = gameProgressFromBrowser.store.fractalEngine.amountOwned
        this.fractalEngine.buyCost = gameProgressFromBrowser.store.fractalEngine.buyCost

        // Update the JavascriptConsole class with their total amount owned and the price for their next purchase.
        this.javascriptConsole.amountOwned = gameProgressFromBrowser.store.javascriptConsole.amountOwned
        this.javascriptConsole.buyCost = gameProgressFromBrowser.store.javascriptConsole.buyCost

        // Update the Idleverse class with their total amount owned and the price for their next purchase.
        this.idleverse.amountOwned = gameProgressFromBrowser.store.idleverse.amountOwned
        this.idleverse.buyCost = gameProgressFromBrowser.store.idleverse.buyCost

        this.cookiesInBank = gameProgressFromBrowser.stats.cookiesInBank;
        this.cookiesBakedThisPrestige = gameProgressFromBrowser.stats.cookiesBakedThisPrestige;
        this.cookiesBakedAllTime = gameProgressFromBrowser.stats.cookiesBakedAllTime;
        this.cookiesForfeitedByMostRecentPrestige = gameProgressFromBrowser.stats.cookiesForfeitedByMostRecentPrestige;
        this.startDate = gameProgressFromBrowser.stats.startDate
        this.totalTimePlayed = gameProgressFromBrowser.stats.totalTimePlayed;
        this.timePlayedThisPrestige = gameProgressFromBrowser.stats.timePlayedThisPrestige;
        this.numberOfBuildingsOwned = gameProgressFromBrowser.stats.numberOfBuildingsOwned;
        this.rawCookiesPerSecond = gameProgressFromBrowser.stats.rawCookiesPerSecond;
        this.cookiesPerClick = gameProgressFromBrowser.stats.cookiesPerClick;
        this.cookieClicks = gameProgressFromBrowser.stats.cookieClicks;
        this.handMadeCookies = gameProgressFromBrowser.stats.handMadeCookies;
        this.goldenCookieClicks = gameProgressFromBrowser.stats.goldenCookieClicks;
        this.goldenCookieClicksAllTime = gameProgressFromBrowser.stats.goldenCookieClicksAllTime;
        this.numberOfTimesPrestiged = gameProgressFromBrowser.stats.numberOfTimesPrestiged;

        this.cursorUpgrades.level = gameProgressFromBrowser.buildingUpgrades.cursor.level
        this.grandmaUpgrades.level = gameProgressFromBrowser.buildingUpgrades.grandma.level
        this.farmUpgrades.level = gameProgressFromBrowser.buildingUpgrades.farm.level
        this.mineUpgrades.level = gameProgressFromBrowser.buildingUpgrades.mine.level
        this.factoryUpgrades.level = gameProgressFromBrowser.buildingUpgrades.factory.level
        this.bankUpgrades.level = gameProgressFromBrowser.buildingUpgrades.bank.level
        this.templeUpgrades.level = gameProgressFromBrowser.buildingUpgrades.temple.level
        this.wizardTowerUpgrades.level = gameProgressFromBrowser.buildingUpgrades.wizardTower.level
        this.shipmentUpgrades.level = gameProgressFromBrowser.buildingUpgrades.shipment.level
        this.alchemyLabUpgrades.level = gameProgressFromBrowser.buildingUpgrades.alchemyLab.level
        this.portalUpgrades.level = gameProgressFromBrowser.buildingUpgrades.portal.level
        this.timeMachineUpgrades.level = gameProgressFromBrowser.buildingUpgrades.timeMachine.level
        this.antimatterCondenserUpgrades.level = gameProgressFromBrowser.buildingUpgrades.antimatterCondenser.level
        this.prismUpgrades.level = gameProgressFromBrowser.buildingUpgrades.prism.level
        this.chancemakerUpgrades.level = gameProgressFromBrowser.buildingUpgrades.chancemaker.level
        this.fractalEngineUpgrades.level = gameProgressFromBrowser.buildingUpgrades.fractalEngine.level
        this.javascriptConsoleUpgrades.level = gameProgressFromBrowser.buildingUpgrades.javascriptConsole.level
        this.idleverseUpgrades.level = gameProgressFromBrowser.buildingUpgrades.idleverse.level

        // Format and display the correct start date and time
        this.formattedStartDate = new Date(this.startDate).toLocaleDateString() + ' ' + new Date(this.startDate).toLocaleTimeString();

        // Kick off the repeated, setInterval code to have the player gain cookies every second and save their progress to Local Storage every 60 seconds.
        this.beginCookieGeneratingEngine();
        this.beginGameProgressSavingEngine();

    }


    // Listen for any window re-size events, if fired, check current screen size.
    @HostListener("window:resize", [])
    private onResize() {
        this.detectScreenSize();
    }

    ngAfterViewInit() {
        // Card array
        var cards = document.querySelectorAll('.card3d');

        cards.forEach((card) => {
            card.addEventListener('mousemove', (ev) => {
                this.Card3D(card, ev);
            });

            card.addEventListener('mouseleave', (ev) => {
                let img = card.querySelector('img');

                img.style.transform = 'rotateX(0deg) rotateY(0deg)';
                img.style.filter = 'brightness(1)';
            });
        });
    }

    ngAfterContentInit() {
        this.detectScreenSize();
    }

    private detectScreenSize() {
        this.isMobile = (window.screen.width < 992)
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        // When the user navigates off the Game page, we will end each setInterval process.
        this.runningIntervalProcesses.forEach(intervalId => clearInterval(intervalId))
        this.runningIntervalProcesses = [];

        // Update the browser tab title back to the default 'Cookie Cloner'
        const titleElement: HTMLTitleElement = document.querySelector('title');
        if (titleElement) {
            titleElement.innerHTML = 'Cookie Cloner';
        }
    }

    // Card animation
    map(val, minA, maxA, minB, maxB) {
        return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
    }

    Card3D(card, ev) {
        let img = card.querySelector('img');
        let mouseX = ev.offsetX;
        let mouseY = ev.offsetY;
        let rotateY = this.map(mouseX, 0, 180, -50, 50);
        let rotateX = this.map(mouseY, 0, 250, 50, -50);
        let brightness = this.map(mouseY, 0, 250, 1.5, 0.5);

        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        img.style.filter = `brightness(${brightness})`;
    }

    manualCookieClick(event: any) {

        // As we build out the 'upgrades' portion of the game, this manualCookieClickAmount should increase based off of what upgrades the player has purchased.
        const manualCookieClickAmount = this.calculateManualCookieClickAmount(this.buildings, this.buildingUpgrades);

        // Retrieve the cursor position where the user clicked the big cookie.
        let { pageX, pageY } = event;
        let startingOpacity = 100;

        // Create manual cookie click amount element on the page.
        // TODO: Would love to refactor this into a CSS class and not do inline styling here.
        //       I tried to do a CSS class, but the styles did not apply.
        const cookieClickElement: HTMLElement = document.createElement('p')
        cookieClickElement.id = 'manual-cookie-click-amount'
        cookieClickElement.style.position = 'absolute'
        cookieClickElement.style.left = (pageX - 25) + 'px'
        cookieClickElement.style.top = (pageY - 25) + 'px'
        cookieClickElement.style.fontWeight = '800'
        cookieClickElement.style.fontSize = '2rem';
        cookieClickElement.style.color = 'white';
        cookieClickElement.style.textShadow = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
        cookieClickElement.style.pointerEvents = 'none'
        cookieClickElement.style.opacity = startingOpacity + '%';
        cookieClickElement.innerHTML = '+' + this.formatLargerNumber(manualCookieClickAmount, NumberFormatType.WORD) + (manualCookieClickAmount === 1 ? ' cookie' : ' cookies');

        // Add the manual cookie click amount element to the page.
        document.getElementsByTagName('main')[0].appendChild(cookieClickElement)

        // Every 10ms, move the element towards the top of the page and decrease the opacity to give a fading out effect.
        const animationInterval = setInterval(() => {
            pageY--;
            startingOpacity -= 1;
            cookieClickElement.style.top = (pageY - 25) + 'px'
            cookieClickElement.style.opacity = startingOpacity + '%';
        }, 10);

        // After 2 seconds, remove the element from the page and clean up the setInterval process.
        setTimeout(() => {
            cookieClickElement.remove();
            clearInterval(animationInterval)
        }, 1000)

        // Play the 'click' sound effect if the device is not an iOS device.
        if (!this.iOSDevice) {
            const clickAudio = new Audio();
            clickAudio.src = "../../../public/audio/click.mp3";
            clickAudio.load();
            clickAudio.play();
        }

        // Update their total cookie amount by 1 and render this updated value on the UI.
        this.cookieTotalAmount += manualCookieClickAmount;

        // Update stats
        this.cookiesBakedThisPrestige += manualCookieClickAmount;
        this.cookiesBakedAllTime += manualCookieClickAmount;
        this.cookieClicks++;
        this.handMadeCookies += manualCookieClickAmount;
    }

    getCurrentGameProgressFromBrowser(): GameProgress {
        try {
            const serializedGameProgress = window.localStorage.getItem('CookieClonerGameProgress');
            const deserializedGameProgress = serializedGameProgress && atob(serializedGameProgress)
            const separatedGameProgress = (deserializedGameProgress && deserializedGameProgress.split(';').map(Number)) ?? [];

            const gameProgress = {
                cookieTotalAmount: separatedGameProgress[0] ?? 0,
                store: {
                    cursor: {
                        amountOwned: separatedGameProgress[1] ?? 0,
                        buyCost: separatedGameProgress[2] ?? 15
                    },
                    grandma: {
                        amountOwned: separatedGameProgress[3] ?? 0,
                        buyCost: separatedGameProgress[4] ?? 100
                    },
                    farm: {
                        amountOwned: separatedGameProgress[5] ?? 0,
                        buyCost: separatedGameProgress[6] ?? 1100
                    },
                    mine: {
                        amountOwned: separatedGameProgress[7] ?? 0,
                        buyCost: separatedGameProgress[8] ?? 12000
                    },
                    factory: {
                        amountOwned: separatedGameProgress[9] ?? 0,
                        buyCost: separatedGameProgress[10] ?? 130000
                    },
                    bank: {
                        amountOwned: separatedGameProgress[11] ?? 0,
                        buyCost: separatedGameProgress[12] ?? 1400000
                    },
                    temple: {
                        amountOwned: separatedGameProgress[13] ?? 0,
                        buyCost: separatedGameProgress[14] ?? 20000000
                    },
                    wizardTower: {
                        amountOwned: separatedGameProgress[15] ?? 0,
                        buyCost: separatedGameProgress[16] ?? 330000000
                    },
                    shipment: {
                        amountOwned: separatedGameProgress[17] ?? 0,
                        buyCost: separatedGameProgress[18] ?? 5100000000
                    },
                    alchemyLab: {
                        amountOwned: separatedGameProgress[19] ?? 0,
                        buyCost: separatedGameProgress[20] ?? 75000000000
                    },
                    portal: {
                        amountOwned: separatedGameProgress[21] ?? 0,
                        buyCost: separatedGameProgress[22] ?? 1000000000000
                    },
                    timeMachine: {
                        amountOwned: separatedGameProgress[23] ?? 0,
                        buyCost: separatedGameProgress[24] ?? 14000000000000
                    },
                    antimatterCondenser: {
                        amountOwned: separatedGameProgress[25] ?? 0,
                        buyCost: separatedGameProgress[26] ?? 170000000000000
                    },
                    prism: {
                        amountOwned: separatedGameProgress[27] ?? 0,
                        buyCost: separatedGameProgress[28] ?? 2100000000000000
                    },
                    chancemaker: {
                        amountOwned: separatedGameProgress[29] ?? 0,
                        buyCost: separatedGameProgress[30] ?? 26000000000000000
                    },
                    fractalEngine: {
                        amountOwned: separatedGameProgress[31] ?? 0,
                        buyCost: separatedGameProgress[32] ?? 310000000000000000
                    },
                    javascriptConsole: {
                        amountOwned: separatedGameProgress[33] ?? 0,
                        buyCost: separatedGameProgress[34] ?? 71000000000000000000
                    },
                    idleverse: {
                        amountOwned: separatedGameProgress[35] ?? 0,
                        buyCost: separatedGameProgress[36] ?? 12000000000000000000000
                    }
                },
                stats: {
                    cookiesInBank: separatedGameProgress[37] ?? 0,
                    cookiesBakedThisPrestige: separatedGameProgress[38] ?? 0,
                    cookiesBakedAllTime: separatedGameProgress[39] ?? 0,
                    cookiesForfeitedByMostRecentPrestige: separatedGameProgress[40] ?? 0,
                    startDate: separatedGameProgress[41] ?? Date.now(),
                    totalTimePlayed: separatedGameProgress[42] ?? 0,
                    timePlayedThisPrestige: separatedGameProgress[43] ?? 0,
                    numberOfBuildingsOwned: separatedGameProgress[44] ?? 0,
                    cookiesPerSecond: separatedGameProgress[45] ?? 0,
                    rawCookiesPerSecond: separatedGameProgress[46] ?? 0,
                    cookiesPerClick: separatedGameProgress[47] ?? 0,
                    cookieClicks: separatedGameProgress[48] ?? 0,
                    handMadeCookies: separatedGameProgress[49] ?? 0,
                    goldenCookieClicks: separatedGameProgress[50] ?? 0,
                    goldenCookieClicksAllTime: separatedGameProgress[51] ?? 0,
                    numberOfTimesPrestiged: separatedGameProgress[52] ?? 0
                },
                buildingUpgrades: {
                    cursor: {
                        level: separatedGameProgress[53] ?? 0
                    },
                    grandma: {
                        level: separatedGameProgress[54] ?? 0
                    },
                    farm: {
                        level: separatedGameProgress[55] ?? 0
                    },
                    mine: {
                        level: separatedGameProgress[56] ?? 0
                    },
                    factory: {
                        level: separatedGameProgress[57] ?? 0
                    },
                    bank: {
                        level: separatedGameProgress[58] ?? 0
                    },
                    temple: {
                        level: separatedGameProgress[59] ?? 0
                    },
                    wizardTower: {
                        level: separatedGameProgress[60] ?? 0
                    },
                    shipment: {
                        level: separatedGameProgress[61] ?? 0
                    },
                    alchemyLab: {
                        level: separatedGameProgress[62] ?? 0
                    },
                    portal: {
                        level: separatedGameProgress[63] ?? 0
                    },
                    timeMachine: {
                        level: separatedGameProgress[64] ?? 0
                    },
                    antimatterCondenser: {
                        level: separatedGameProgress[65] ?? 0
                    },
                    prism: {
                        level: separatedGameProgress[66] ?? 0
                    },
                    chancemaker: {
                        level: separatedGameProgress[67] ?? 0
                    },
                    fractalEngine: {
                        level: separatedGameProgress[68] ?? 0
                    },
                    javascriptConsole: {
                        level: separatedGameProgress[69] ?? 0
                    },
                    idleverse: {
                        level: separatedGameProgress[70] ?? 0
                    }
                }
            }
            return gameProgress;
        } catch (error) {
            console.error('Unable to get current game progress from browser: ' + error);
            return null;
        }
    }

    purchaseStoreBuilding(id: number) {
        if (this.cookieTotalAmount >= this.buildings[id].buyCost) {
            this.cookieTotalAmount -= this.buildings[id].buyCost;
            this.buildings[id].amountOwned++;
            this.buildings[id].buyCost = this.calculateStoreBuildingCost(id);
        }

        this.cookiesPerSecond = this.calculateCookiesPerSecond(this.buildings, this.buildingUpgrades);
    }

    purchaseBuildingUpgrade(id: number) {
        const nextUpgradeLevel = this.buildingUpgrades[id]?.level + 1;

        // If the upgrade level has been maxed out, stop this function.
        if (!this.buildingUpgrades[id].buyCost[nextUpgradeLevel]) {
            return;
        }
        
        const currentAmountOwned = this.buildings[id].amountOwned;
        if (this.cookieTotalAmount >= this.buildingUpgrades[id].buyCost[nextUpgradeLevel] && currentAmountOwned >= this.buildingUpgrades[id].unlockAmount[nextUpgradeLevel]) {
            this.cookieTotalAmount -= this.buildingUpgrades[id].buyCost[nextUpgradeLevel];
            this.buildingUpgrades[id].level = nextUpgradeLevel;
        }

        this.cookiesPerSecond = this.calculateCookiesPerSecond(this.buildings, this.buildingUpgrades);
    }

    calculateStoreBuildingCost(id: number) {
        return Math.floor(this.buildings[id].buyCost * 1.15)
    }

    beginCookieGeneratingEngine() {

        // When user first hits the page, render these values rather than waiting 1 second.
        this.cookiesPerSecond = this.calculateCookiesPerSecond(this.buildings, this.buildingUpgrades)
        this.cookieTotalAmount += this.cookiesPerSecond;

        // Update stats
        this.cookiesBakedThisPrestige += this.cookiesPerSecond;
        this.cookiesBakedAllTime += this.cookiesPerSecond;

        // Every TIME_TO_UPDATE_IN_MS add their cookiesPerSecond to their cookie total amount and stats.
        const ONE_SECOND_IN_MS = 1000;
        const TIME_TO_UPDATE_IN_MS = 100;
        const NUMBER_TO_DIVIDE_COOKIES_PER_SECOND_BY = ONE_SECOND_IN_MS / TIME_TO_UPDATE_IN_MS;
        this.runningIntervalProcesses.push(
            setInterval(() => {
                this.cookiesPerSecond = this.calculateCookiesPerSecond(this.buildings, this.buildingUpgrades)
                this.cookieTotalAmount += this.cookiesPerSecond / NUMBER_TO_DIVIDE_COOKIES_PER_SECOND_BY

                // Update stats
                this.cookiesBakedThisPrestige += this.cookiesPerSecond / NUMBER_TO_DIVIDE_COOKIES_PER_SECOND_BY;
                this.cookiesBakedAllTime += this.cookiesPerSecond / NUMBER_TO_DIVIDE_COOKIES_PER_SECOND_BY;
                this.renderUpdatedBrowserTitle(this.cookieTotalAmount);
            }, TIME_TO_UPDATE_IN_MS)
        )
    }

    /*
    * Every 60 seconds, an automatic save should be made to store player progress
    *   Progress includes
    *     total # of cookies, # of store buildings owned, achievements,
    *     stats, upgrades, etc.
    */
    beginGameProgressSavingEngine() {
        const SIXTY_SECONDS_IN_MILLISECONDS = 60 * 1000;
        this.runningIntervalProcesses.push(
            setInterval(() => {

                // Save the player's progress to their browser Local Storage.
                this.saveGameProgress();

            }, SIXTY_SECONDS_IN_MILLISECONDS)
        )
    }

    async importSavedGameProgress(event: any) {

        if (!this.isMobile) {

            // Retrieve the data from the text file uploaded by the player.
            const incomingFile = event?.target?.files?.item(0);
            const incomingFileText = await incomingFile?.text();
            window.localStorage.setItem('CookieClonerGameProgress', incomingFileText);

        } else {

            // Prompt user to enter their saved game progress text string.
            // Added error handling to prevent random text from overwriting actual game progress.
            let incomingTextString = window.prompt('Please enter your saved game progress text!');
            try {
                if(!atob(incomingTextString).includes(';')) {
                    incomingTextString = '';
                }
            } catch (error) {
                incomingTextString = '';
            }

            while (!incomingTextString) {
                incomingTextString = window.prompt('Please enter your saved game progress text!');
                try {
                    if(!atob(incomingTextString).includes(';')) {
                        incomingTextString = '';
                    }
                } catch (error) {
                    incomingTextString = '';
                }
            }

            // Store saved game progress text string into local storage.
            window.localStorage.setItem('CookieClonerGameProgress', incomingTextString);
        }

        // Refresh the page to pull in the updated game progress from their browser Local Storage.
        window.location.reload();
    }

    saveGameProgress() {
        const gameSavedMessageElement: HTMLElement = document.getElementById("game-saved-message");
        const gameProgress = this.getCurrentGameProgress()
        const serializedGameProgress = btoa(
            gameProgress.cookieTotalAmount + ';' +
            gameProgress.store.cursor.gameProgressToString() + ';' +
            gameProgress.store.grandma.gameProgressToString() + ';' +
            gameProgress.store.farm.gameProgressToString() + ';' +
            gameProgress.store.mine.gameProgressToString() + ';' +
            gameProgress.store.factory.gameProgressToString() + ';' +
            gameProgress.store.bank.gameProgressToString() + ';' +
            gameProgress.store.temple.gameProgressToString() + ';' +
            gameProgress.store.wizardTower.gameProgressToString() + ';' +
            gameProgress.store.shipment.gameProgressToString() + ';' +
            gameProgress.store.alchemyLab.gameProgressToString() + ';' +
            gameProgress.store.portal.gameProgressToString() + ';' +
            gameProgress.store.timeMachine.gameProgressToString() + ';' +
            gameProgress.store.antimatterCondenser.gameProgressToString() + ';' +
            gameProgress.store.prism.gameProgressToString() + ';' +
            gameProgress.store.chancemaker.gameProgressToString() + ';' +
            gameProgress.store.fractalEngine.gameProgressToString() + ';' +
            gameProgress.store.javascriptConsole.gameProgressToString() + ';' +
            gameProgress.store.idleverse.gameProgressToString() + ';' +
            gameProgress.stats.cookiesInBank + ';' +
            gameProgress.stats.cookiesBakedThisPrestige + ';' +
            gameProgress.stats.cookiesBakedAllTime + ';' +
            gameProgress.stats.cookiesForfeitedByMostRecentPrestige + ';' +
            gameProgress.stats.startDate + ';' +
            gameProgress.stats.totalTimePlayed + ';' +
            gameProgress.stats.timePlayedThisPrestige + ';' +
            gameProgress.stats.numberOfBuildingsOwned + ';' +
            gameProgress.stats.cookiesPerSecond + ';' +
            gameProgress.stats.rawCookiesPerSecond + ';' +
            gameProgress.stats.cookiesPerClick + ';' +
            gameProgress.stats.cookieClicks + ';' +
            gameProgress.stats.handMadeCookies + ';' +
            gameProgress.stats.goldenCookieClicks + ';' +
            gameProgress.stats.goldenCookieClicksAllTime + ';' +
            gameProgress.stats.numberOfTimesPrestiged + ';' +
            gameProgress.buildingUpgrades.cursor.level + ';' +
            gameProgress.buildingUpgrades.grandma.level + ';' +
            gameProgress.buildingUpgrades.farm.level + ';' +
            gameProgress.buildingUpgrades.mine.level + ';' +
            gameProgress.buildingUpgrades.factory.level + ';' +
            gameProgress.buildingUpgrades.bank.level + ';' +
            gameProgress.buildingUpgrades.temple.level + ';' +
            gameProgress.buildingUpgrades.wizardTower.level + ';' +
            gameProgress.buildingUpgrades.shipment.level + ';' +
            gameProgress.buildingUpgrades.alchemyLab.level + ';' +
            gameProgress.buildingUpgrades.portal.level + ';' +
            gameProgress.buildingUpgrades.timeMachine.level + ';' +
            gameProgress.buildingUpgrades.antimatterCondenser.level + ';' +
            gameProgress.buildingUpgrades.prism.level + ';' +
            gameProgress.buildingUpgrades.chancemaker.level + ';' +
            gameProgress.buildingUpgrades.fractalEngine.level + ';' +
            gameProgress.buildingUpgrades.javascriptConsole.level + ';' +
            gameProgress.buildingUpgrades.idleverse.level + ';'
        );
        window.localStorage.setItem('CookieClonerGameProgress', serializedGameProgress);

        // Display the 'game progress has been saved' message and hide it again after 5 seconds.
        if (gameSavedMessageElement) {
            gameSavedMessageElement.style.opacity = '100%';
            gameSavedMessageElement.classList.add('game-saved-animation')
            setTimeout(() => {
                gameSavedMessageElement.style.opacity = '0';
                gameSavedMessageElement.classList.remove('game-saved-animation')
            }, 5000)
        }
    }

    exportSavedGameProgress() {
        const gameProgress = window.localStorage.getItem('CookieClonerGameProgress');
        if (gameProgress) {
            const savedGameProgressFile = !this.isMobile ? new Blob([gameProgress], { type: 'text/plain' }) : new Blob([gameProgress, '\n\nCopy the text above to backup your game progress!'], { type: 'text/plain' });
            const downloadUrl = URL.createObjectURL(savedGameProgressFile);
            const anchor = document.createElement('a')

            anchor.href = downloadUrl
            anchor.download = 'cookie-cloner-game-save.txt'
            anchor.click()
            URL.revokeObjectURL(downloadUrl);
        }
    }

    renderUpdatedBrowserTitle(cookieTotalAmount: number) {
        const titleElement: HTMLTitleElement = document.querySelector('title');
        const formattedCookieTotalAmount = this.formatLargerNumber(cookieTotalAmount, NumberFormatType.WORD);
        if (titleElement) {
            titleElement.innerHTML = formattedCookieTotalAmount + ' cookies - Cookie Cloner';
        }
    }

    getCurrentGameProgress(): GameProgress {
        if (this.startDate === 0) this.startDate = Date.now()

        const gameProgress: GameProgress = {
            cookieTotalAmount: this.cookieTotalAmount,
            store: {
                cursor: this.cursor,
                grandma: this.grandma,
                farm: this.farm,
                mine: this.mine,
                factory: this.factory,
                bank: this.bank,
                temple: this.temple,
                wizardTower: this.wizardTower,
                shipment: this.shipment,
                alchemyLab: this.alchemyLab,
                portal: this.portal,
                timeMachine: this.timeMachine,
                antimatterCondenser: this.antimatterCondenser,
                prism: this.prism,
                chancemaker: this.chancemaker,
                fractalEngine: this.fractalEngine,
                javascriptConsole: this.javascriptConsole,
                idleverse: this.idleverse
            },
            stats: {
                cookiesInBank: this.cookieTotalAmount,
                cookiesBakedThisPrestige: this.cookiesBakedThisPrestige,
                cookiesBakedAllTime: this.cookiesBakedAllTime,
                cookiesForfeitedByMostRecentPrestige: this.cookiesForfeitedByMostRecentPrestige,
                startDate: this.startDate,
                totalTimePlayed: this.totalTimePlayed,
                timePlayedThisPrestige: this.timePlayedThisPrestige,
                numberOfBuildingsOwned: this.calculateNumberOfBuildingsOwned(this.buildings),
                cookiesPerSecond: this.cookiesPerSecond,
                rawCookiesPerSecond: this.rawCookiesPerSecond,
                cookiesPerClick: this.cookiesPerClick,
                cookieClicks: this.cookieClicks,
                handMadeCookies: this.handMadeCookies,
                goldenCookieClicks: this.goldenCookieClicks,
                goldenCookieClicksAllTime: this.goldenCookieClicksAllTime,
                numberOfTimesPrestiged: this.numberOfTimesPrestiged
            },
            buildingUpgrades: {
                cursor: this.cursorUpgrades,
                grandma: this.grandmaUpgrades,
                farm: this.farmUpgrades,
                mine: this.mineUpgrades,
                factory: this.factoryUpgrades,
                bank: this.bankUpgrades,
                temple: this.templeUpgrades,
                wizardTower: this.wizardTowerUpgrades,
                shipment: this.shipmentUpgrades,
                alchemyLab: this.alchemyLabUpgrades,
                portal: this.portalUpgrades,
                timeMachine: this.timeMachineUpgrades,
                antimatterCondenser: this.antimatterCondenserUpgrades,
                prism: this.prismUpgrades,
                chancemaker: this.chancemakerUpgrades,
                fractalEngine: this.fractalEngineUpgrades,
                javascriptConsole: this.javascriptConsoleUpgrades,
                idleverse: this.idleverseUpgrades
            }
        }
        return gameProgress;
    }

    calculateCookiesPerSecond(buildings: Array<Cursor | Grandma | Farm | Mine | Factory | Bank | Temple | WizardTower | Shipment | AlchemyLab |
        Portal | TimeMachine | AntimatterCondenser | Prism | Chancemaker | FractalEngine | JavascriptConsole | Idleverse>, buildingUpgrades: Array<CursorUpgrades>) {
        let cookiesPerSecond = 0;
        buildings.forEach((building, index) => {

            // For 'Cursor upgrades', the bonuses to cookiesPerSecond are different from the 'twice as efficient' effect for all the other store buildings.
            if (index === 0) {
                let rawCursorCookiesPerSecond = building.cookiesPerSecond
                for (let level = 0; level <= buildingUpgrades[index].level; level++) {
                    switch (level) {
                        case 0:
                            rawCursorCookiesPerSecond *= 1
                            break
                        case 1:
                            rawCursorCookiesPerSecond *= 2
                            break
                        case 2:
                            rawCursorCookiesPerSecond *= 2
                            break
                        case 3:
                            rawCursorCookiesPerSecond *= 2
                            break
                        case 4:
                            rawCursorCookiesPerSecond += (0.1 * this.calculateNumberOfBuildingsOwnedExcludingCursors(buildings))
                            break
                        case 5:
                            rawCursorCookiesPerSecond *= 5
                            break
                        case 6:
                            rawCursorCookiesPerSecond *= 10
                            break
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:    
                            rawCursorCookiesPerSecond *= 20
                            break
                    }
                }
                cookiesPerSecond += (rawCursorCookiesPerSecond * building.amountOwned)
            } else {
            cookiesPerSecond += (
                (Math.pow(2, buildingUpgrades[index] ? buildingUpgrades[index].level : 0)) * (building.amountOwned * building.cookiesPerSecond)
            )}
        })
        return cookiesPerSecond;
    }

    calculateManualCookieClickAmount(buildings: Array<Cursor | Grandma | Farm | Mine | Factory | Bank | Temple | WizardTower | Shipment | AlchemyLab |
        Portal | TimeMachine | AntimatterCondenser | Prism | Chancemaker | FractalEngine | JavascriptConsole | Idleverse>, buildingUpgrades: Array<CursorUpgrades>) {
        let manualCookieClickAmount = 1;

        // For 'Cursor upgrades', the bonuses to cookiesPerSecond are different from the 'twice as efficient' effect for all the other store buildings.
        // These effects also impact the manual cookie click value.
        for (let level = 0; level <= buildingUpgrades[0].level; level++) {
            switch (level) {
                case 0:
                    manualCookieClickAmount *= 1
                    break
                case 1:
                    manualCookieClickAmount *= 2
                    break
                case 2:
                    manualCookieClickAmount *= 2
                    break
                case 3:
                    manualCookieClickAmount *= 2
                    break
                case 4:
                    manualCookieClickAmount += (0.1 * this.calculateNumberOfBuildingsOwnedExcludingCursors(buildings))
                    break
                case 5:
                    manualCookieClickAmount *= 5
                    break
                case 6:
                    manualCookieClickAmount *= 10
                    break
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:    
                    manualCookieClickAmount *= 20
                    break
            }
        }

        return Math.floor(manualCookieClickAmount);
    }    

    calculateNumberOfBuildingsOwned(buildings: Array<Cursor | Grandma | Farm | Mine | Factory | Bank | Temple | WizardTower | Shipment | AlchemyLab |
        Portal | TimeMachine | AntimatterCondenser | Prism | Chancemaker | FractalEngine | JavascriptConsole | Idleverse>) {
        let numberOfBuildingsOwned = 0;
        buildings.forEach(building => numberOfBuildingsOwned += building.amountOwned);
        return numberOfBuildingsOwned;
    }

    calculateNumberOfBuildingsOwnedExcludingCursors(buildings: Array<Cursor | Grandma | Farm | Mine | Factory | Bank | Temple | WizardTower | Shipment | AlchemyLab |
        Portal | TimeMachine | AntimatterCondenser | Prism | Chancemaker | FractalEngine | JavascriptConsole | Idleverse>) {
        let numberOfBuildingsOwned = 0;
        buildings.forEach((building, index) => {
            if (index !== 0)
                numberOfBuildingsOwned += building.amountOwned
        });
        return numberOfBuildingsOwned;
    }


    formatLargerNumber(numberToFormat: number, format?: NumberFormatType): string {
        switch (format) {
            case NumberFormatType.COMMA:
                return Math.floor(numberToFormat)?.toLocaleString();
            case NumberFormatType.WORD:
                return this.getNumberUnit(numberToFormat)
            default:
                return Math.floor(numberToFormat)?.toLocaleString();
        }
    }

    getNumberUnit(number: number) {
        const units = ['million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 
        'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion',
        'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion']
        let base = 0
        let unitValue = '';
    
        // Check if the number is not finite.
        if (!isFinite(number)) return 'Infinity';
    
        // Increment the base counter for every 3 zeroes found in the number until there are no longer more than 3 zeroes left.
        if (number >= 1000000)
        {
            number /= 1000;
            while(Math.round(number) >= 1000)
            {
                number /= 1000;
                base++;
            }
            if (base >= units.length) {
                return 'Infinity';
            } else {
                unitValue = units[base - 1];
            }
        }
        return (Math.round(number*1000) / 1000) + ' ' + unitValue;
    }
}
