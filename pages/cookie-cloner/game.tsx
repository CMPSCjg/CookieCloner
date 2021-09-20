import Head from 'next/head'
import { useEffect } from 'react';
import { GameProgress } from '../../models/GameProgress';
import { Cursor } from '../../models/store/Cursor';
import { Grandma } from '../../models/store/Grandma';

var WINDOW;

export default function game() {

    let cookieTotalAmount;
    let cookiesPerSecond;

    // Define store buildings as classes that can be used across the scope of the game.
    let cursor = new Cursor(0, 15);
    let grandma = new Grandma(0, 100);

    useEffect(() => { 
        WINDOW = window;
        const gameProgressFromBrowser: GameProgress = getCurrentGameProgressFromBrowser(WINDOW); 

        cookieTotalAmount = gameProgressFromBrowser.cookieTotalAmount;
        document.getElementById('cookie-total-amount').innerHTML = cookieTotalAmount + "<br>cookies<br>per second : " + cookiesPerSecond;

        cursor = new Cursor(gameProgressFromBrowser.store.cursor.amountOwned, gameProgressFromBrowser.store.cursor.buyCost);
        document.getElementById('cursor-buy-cost').innerHTML = gameProgressFromBrowser.store.cursor.buyCost + '';
        document.getElementById('cursor-amount-owned').innerHTML = gameProgressFromBrowser.store.cursor.amountOwned + '';
        
        grandma = new Grandma(gameProgressFromBrowser.store.grandma.amountOwned, gameProgressFromBrowser.store.grandma.buyCost);
        document.getElementById('grandma-buy-cost').innerHTML = gameProgressFromBrowser.store.grandma.buyCost + '';
        document.getElementById('grandma-amount-owned').innerHTML = gameProgressFromBrowser.store.grandma.amountOwned + '';

        beginCookieGeneratingEngine();
        beginGameProgressSavingEngine();
    })

    return (
        <div className="container">
            <Head>
            <title>Cookie Cloner</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="game">
                    <h3 id="cookie-total-amount">{cookieTotalAmount} cookies</h3>
                    <img 
                        src="../images/CookieClonerLogo_Smaller.png" 
                        onClick={() => manualCookeClick()}
                    />
                </div>

                <div className="building-container" onClick={() => purchaseStoreBuilding(cursor.id)}>
                    <img className="building-icon" src={cursor.icon} />
                    <h3 className="building-name">{cursor.name}</h3>
                    <div>
                        <h4 className="building-buy-cost" id="cursor-buy-cost">{cursor.buyCost}</h4>
                        <h4 className="building-amount-owned" id="cursor-amount-owned">{cursor.amountOwned}</h4>
                    </div>
                </div>

                <div className="building-container" onClick={() => purchaseStoreBuilding(grandma.id)}>
                    <img className="building-icon" src={grandma.icon} />
                    <h3 className="building-name">{grandma.name}</h3>
                    <div>
                        <h4 className="building-buy-cost" id="grandma-buy-cost">{grandma.buyCost}</h4>
                        <h4 className="building-amount-owned" id="grandma-amount-owned">{grandma.amountOwned}</h4>
                    </div>
                </div>
            </main>

            <footer>
                <span>Powered by{' '}
                <img src="/favicon.ico" alt="cookie" className="logo" />
                s and users like you.
                </span>
            </footer>

            <style jsx>{`
                .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }

                #cookie-total-amount {
                    margin: 0;
                    line-height: 1.15;
                    font-size: 2rem;
                    text-align: center;
                }

                .building-container {
                    grid-template-columns: [first] 200px [line2] 50px;
                    grid-template-rows: [row1-start] 25% [row1-end] 100px;
                }

                .building-icon {
                    float: left;
                    width: 33%;
                }

                .building-name {
                    font-weight: 800;
                    font-size: 2rem;
                }

                .building-buy-cost {
                    font-size: 1.5rem;
                    color: green;
                    float: left;
                }

                .building-amount-owned {
                    font-size: 1.5rem;
                    float: right;
                }

                main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }

                footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
                }

                footer a {
                display: flex;
                justify-content: center;
                align-items: center;
                }

                a {
                color: inherit;
                text-decoration: none;
                }
                
                code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }

                .logo {
                height: 1em;
                }
            `}
            </style>
        </div>
    )

    function manualCookeClick() {
        cookieTotalAmount += 1;
        document.getElementById('cookie-total-amount').innerHTML = cookieTotalAmount + "<br>cookies<br>per second : " + cookiesPerSecond;
    }

    function getCurrentGameProgressFromBrowser(window): any {
        try {
            const serializedGameProgress = window.localStorage.getItem('CookieClonerGameProgress');
            const derializedGameProgress = (serializedGameProgress && atob(serializedGameProgress)) || '0;0;15;0;100';
            const separatedGameProgress = derializedGameProgress && derializedGameProgress.split(';')
            const gameProgress = {
                cookieTotalAmount: Number(separatedGameProgress[0]),
                store: {
                    cursor: {
                        amountOwned: separatedGameProgress[1],
                        buyCost: separatedGameProgress[2]
                    },
                    grandma: {
                        amountOwned: separatedGameProgress[3],
                        buyCost: separatedGameProgress[4]                    
                    }
                }
            }
            return gameProgress;

        } catch(error) {
            console.error('Unable to get current game progress from browser: ' + error);
        }
    }

    function purchaseStoreBuilding(id: number) {
        let cost;
        let cookiesPerSecond;
        switch (id) {
            case 0:
                cost = calculateStoreBuildingCost(id);
                if (cookieTotalAmount >= cost) {
                    cursor.amountOwned++;
                    cursor.buyCost = cost;
                    cookieTotalAmount -= cost;
                    document.getElementById('cursor-buy-cost').innerHTML = calculateStoreBuildingCost(id) + '';
                    document.getElementById('cursor-amount-owned').innerHTML = cursor.amountOwned + '';
                }
                break
            case 1:
                cost = calculateStoreBuildingCost(id);
                if (cookieTotalAmount >= cost) {
                    grandma.amountOwned++;
                    grandma.buyCost = cost;
                    cookieTotalAmount -= cost;
                    document.getElementById('grandma-buy-cost').innerHTML = calculateStoreBuildingCost(id) + '';
                    document.getElementById('grandma-amount-owned').innerHTML = grandma.amountOwned + '';
                }
                break
        }

        cookiesPerSecond =
            (cursor.amountOwned * cursor.cookiesPerSecond) +
            (grandma.amountOwned * grandma.cookiesPerSecond)
        document.getElementById('cookie-total-amount').innerHTML = cookieTotalAmount + "<br>cookies<br>per second : " + cookiesPerSecond;
    }

    function calculateStoreBuildingCost(id: number) {
        switch (id) {
            case 0:
                return Math.floor(cursor.buyCost * 1.15);
            case 1:
                return Math.floor(grandma.buyCost * 1.15);
        }
    }

    function beginCookieGeneratingEngine() {

        // Each store item should have it's own class.
        /*
            class Entity {
                name: string,
                icon: string,
                amountOwned: number
                buyCost: number[]
                    With each increasing index, the cost to purchase the entity should increase.
                cookiesPerSecond: number
                sellPrice:
                    Need to research, but seems like a flat number...
            } 
        */

        cookiesPerSecond =
            (cursor.amountOwned * cursor.cookiesPerSecond) +
            (grandma.amountOwned * grandma.cookiesPerSecond)

        cookieTotalAmount += cookiesPerSecond;
        document.getElementById('cookie-total-amount').innerHTML = cookieTotalAmount + "<br>cookies<br>per second : " + cookiesPerSecond;

        setInterval(() => {
            cookiesPerSecond =
                (cursor.amountOwned * cursor.cookiesPerSecond) +
                (grandma.amountOwned * grandma.cookiesPerSecond)

            cookieTotalAmount += cookiesPerSecond;
            document.getElementById('cookie-total-amount').innerHTML = cookieTotalAmount + "<br>cookies<br>per second : " + cookiesPerSecond;
        }, 1000)
    }

    
    function beginGameProgressSavingEngine() {


        // Every 60 seconds, an automatic save should be made to store player progress
        /* 
            total # of cookies,
            store buildings owned,
            achievements,
            upgrades, etc.
        */

        setInterval(() => {
            const gameProgress = getCurrentGameProgress()
            const serializedGameProgress = btoa(
                gameProgress.cookieTotalAmount + ';' +
                gameProgress.store.cursor.gameProgressToString() + ';' +
                gameProgress.store.grandma.gameProgressToString() + ';'
            );
            WINDOW.localStorage.setItem('CookieClonerGameProgress', serializedGameProgress);
        }, 60000)
    }

    function getCurrentGameProgress(): GameProgress {
        const gameProgress: GameProgress = {
            cookieTotalAmount,
            store: {
                cursor,
                grandma
            }
        }
        return gameProgress;
    }
}

