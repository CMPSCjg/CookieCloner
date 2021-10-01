import { Component, OnInit } from '@angular/core';

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

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    // Maintain an array of interval IDs in order to stop these when the user navigates off this page.
    runningIntervalProcesses: Array<any> = [];
    iOSDevice = false;

    // Define cookie amount variables that can be used across the scope of the game.
    cookieTotalAmount = 0;
    cookiesPerSecond = 0;

    cookiesInBank = 0;
    cookiesBakedThisPrestige = 0;
    cookiesBakedAllTime = 0;
    cookiesForfeitedByMostRecentPrestige = 0;
    startDate = Date.now();
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

    // Define store this.buildings as classes that can be used across the scope of the game.
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

        // Format and display the correct start date and time
        this.formattedStartDate = new Date(this.startDate).toLocaleDateString() + ' ' + new Date(this.startDate).toLocaleTimeString();

        // Kick off the repeated, setInterval code to have the player gain cookies every second and save their progress to Local Storage every 60 seconds.
        this.beginCookieGeneratingEngine();
        this.beginGameProgressSavingEngine();

    }

    ngOnInit(): void {
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

    // Card animation
    map(val, minA, maxA, minB, maxB) {
        return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
    }

    Card3D(card, ev) {
        let img = card.querySelector('img');
        let mouseX = ev.offsetX;
        let mouseY = ev.offsetY;
        let rotateY = this.map(mouseX, 0, 180, -25, 25);
        let rotateX = this.map(mouseY, 0, 250, 25, -25);
        let brightness = this.map(mouseY, 0, 250, 1.5, 0.5);

        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        img.style.filter = `brightness(${brightness})`;
    }

    manualCookieClick(event: any) {

        // TODO: As we build out the 'upgrades' portion of the game, this manualCookieClickAmount should increase based off of what upgrades the player has purchased.
        const manualCookieClickAmount = 1;

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
        cookieClickElement.innerHTML = '+' + manualCookieClickAmount + (manualCookieClickAmount === 1 ? ' cookie' : ' cookies');

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
                    startDate: separatedGameProgress[41] ?? 0,
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

        this.cookiesPerSecond = this.calculateCookiesPerSecond(this.buildings);
    }

    calculateStoreBuildingCost(id: number) {
        return Math.floor(this.buildings[id].buyCost * 1.15)
    }

    beginCookieGeneratingEngine() {

        // When user first hits the page, render these values rather than waiting 1 second.
        this.cookiesPerSecond = this.calculateCookiesPerSecond(this.buildings)
        this.cookieTotalAmount += this.cookiesPerSecond;

        // Update stats
        this.cookiesBakedThisPrestige += this.cookiesPerSecond;
        this.cookiesBakedAllTime += this.cookiesPerSecond;

        // Every second, execute this code to add to their cookie total amount.
        this.runningIntervalProcesses.push(
            setInterval(() => {
                this.cookiesPerSecond = this.calculateCookiesPerSecond(this.buildings)
                this.cookieTotalAmount += this.cookiesPerSecond;
                this.renderUpdatedBrowserTitle(this.cookieTotalAmount);

                // Update stats
                this.cookiesBakedThisPrestige += this.cookiesPerSecond;
                this.cookiesBakedAllTime += this.cookiesPerSecond;
            }, 1000))
    }

    /*
    * Every 60 seconds, an automatic save should be made to store player progress
    *   Progress includes
    *     total # of cookies, # of store buildings owned, achievements,
    *     stats, upgrades, etc.
    */
    beginGameProgressSavingEngine() {
        this.runningIntervalProcesses.push(
            setInterval(() => {

                // Save the player's progress to their browser Local Storage.
                this.saveGameProgress();

            }, 60000)
        )
    }

    async importSavedGameProgress(event: any) {
        // Retrieve the data from the text file uploaded by the player.
        const incomingFile = event?.target?.files?.item(0);
        const incomingFileText = await incomingFile?.text();
        window.localStorage.setItem('CookieClonerGameProgress', incomingFileText);

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
            gameProgress.stats.numberOfTimesPrestiged + ';'
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
            const savedGameProgressFile = new Blob([gameProgress], { type: 'text/plain' });
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
        const formattedCookieTotalAmount = this.formatLargerNumber(cookieTotalAmount);
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
            }
        }
        return gameProgress;
    }

    calculateCookiesPerSecond(buildings: Array<Cursor | Grandma | Farm | Mine | Factory | Bank | Temple | WizardTower | Shipment | AlchemyLab |
        Portal | TimeMachine | AntimatterCondenser | Prism | Chancemaker | FractalEngine | JavascriptConsole | Idleverse>) {
        let cookiesPerSecond = 0;
        buildings.forEach(building => cookiesPerSecond += (building.amountOwned * building.cookiesPerSecond));

        return cookiesPerSecond;
    }

    calculateNumberOfBuildingsOwned(buildings: Array<Cursor | Grandma | Farm | Mine | Factory | Bank | Temple | WizardTower | Shipment | AlchemyLab |
        Portal | TimeMachine | AntimatterCondenser | Prism | Chancemaker | FractalEngine | JavascriptConsole | Idleverse>) {
        let numberOfBuildingsOwned = 0;
        buildings.forEach(building => numberOfBuildingsOwned += building.amountOwned);
        return numberOfBuildingsOwned;
    }

    formatLargerNumber(numberToFormat: number): string {
        return numberToFormat?.toLocaleString();
    }

}
