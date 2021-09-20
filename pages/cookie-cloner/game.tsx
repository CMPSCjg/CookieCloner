import Head from 'next/head'
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GameProgress } from '../../models/GameProgress';
import { Cursor } from '../../models/store/Cursor';
import { Grandma } from '../../models/store/Grandma';
import { Factory } from '../../models/store/Factory';
import { Farm } from '../../models/store/Farm';
import { Mine } from '../../models/store/Mine';
import { Bank } from '../../models/store/Bank';

import 'bootstrap/dist/css/bootstrap.min.css';

var WINDOW;

export default function game() {

    let cookieTotalAmount;
    let cookiesPerSecond;

    // Define store buildings as classes that can be used across the scope of the game.
    let cursor = new Cursor(0, 15);
    let grandma = new Grandma(0, 100);
    let farm = new Farm(0, 1100);
    let mine = new Mine(0, 12000);
    let factory = new Factory(0, 130000);
    let bank = new Bank(0, 1400000);

    useEffect(() => { 
        WINDOW = window;
        const gameProgressFromBrowser: GameProgress = getCurrentGameProgressFromBrowser(WINDOW); 

        cookieTotalAmount = gameProgressFromBrowser.cookieTotalAmount;

        cursor = new Cursor(gameProgressFromBrowser.store.cursor.amountOwned, gameProgressFromBrowser.store.cursor.buyCost);
        document.getElementById('cursor-buy-cost').innerHTML = gameProgressFromBrowser.store.cursor.buyCost + '';
        document.getElementById('cursor-amount-owned').innerHTML = gameProgressFromBrowser.store.cursor.amountOwned + '';
        
        grandma = new Grandma(gameProgressFromBrowser.store.grandma.amountOwned, gameProgressFromBrowser.store.grandma.buyCost);
        document.getElementById('grandma-buy-cost').innerHTML = gameProgressFromBrowser.store.grandma.buyCost + '';
        document.getElementById('grandma-amount-owned').innerHTML = gameProgressFromBrowser.store.grandma.amountOwned + '';

        farm = new Farm(gameProgressFromBrowser.store.farm.amountOwned, gameProgressFromBrowser.store.farm.buyCost);
        document.getElementById('farm-buy-cost').innerHTML = gameProgressFromBrowser.store.farm.buyCost + '';
        document.getElementById('farm-amount-owned').innerHTML = gameProgressFromBrowser.store.farm.amountOwned + '';

        mine = new Mine(gameProgressFromBrowser.store.mine.amountOwned, gameProgressFromBrowser.store.mine.buyCost);
        document.getElementById('mine-buy-cost').innerHTML = gameProgressFromBrowser.store.mine.buyCost + '';
        document.getElementById('mine-amount-owned').innerHTML = gameProgressFromBrowser.store.mine.amountOwned + '';

        factory = new Factory(gameProgressFromBrowser.store.factory.amountOwned, gameProgressFromBrowser.store.factory.buyCost);
        document.getElementById('factory-buy-cost').innerHTML = gameProgressFromBrowser.store.factory.buyCost + '';
        document.getElementById('factory-amount-owned').innerHTML = gameProgressFromBrowser.store.factory.amountOwned + '';

        bank = new Bank(gameProgressFromBrowser.store.bank.amountOwned, gameProgressFromBrowser.store.bank.buyCost);
        document.getElementById('bank-buy-cost').innerHTML = gameProgressFromBrowser.store.bank.buyCost + '';
        document.getElementById('bank-amount-owned').innerHTML = gameProgressFromBrowser.store.bank.amountOwned + '';

        renderUpdatedCookieValues(cookieTotalAmount, cookiesPerSecond);
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
                        className="the-cookie"
                        src="../images/CookieClonerLogo_Smaller.png" 
                        onClick={() => manualCookeClick()}
                    />
                </div>
                <p><strong>Game progress will automatically save every 60 seconds!</strong></p>

                <p id="game-saved-message" className="game-saved" style={ { opacity: '0', height: '0' } }>Your game progress has been saved!</p>

                <Container>
                    <Row>
                        <Col style={{ cursor: 'pointer', border: '2px black solid', background: '#9c8354', margin: '1px' }} onClick={() => purchaseStoreBuilding(cursor.id)}>
                            <img className="building-icon" src={cursor.icon} />
                            <h3 className="building-name">{cursor.name}</h3>
                            <div>
                                <h4 className="building-buy-cost" id="cursor-buy-cost">{cursor.buyCost}</h4>
                                <h4 className="building-amount-owned" id="cursor-amount-owned">{cursor.amountOwned}</h4>
                            </div>
                        </Col>

                        <Col style={{ cursor: 'pointer', border: '2px black solid', background: '#9c8354', margin: '1px' }} onClick={() => purchaseStoreBuilding(grandma.id)}>
                            <img className="building-icon" src={grandma.icon} />
                            <h3 className="building-name">{grandma.name}</h3>
                            <div>
                                <h4 className="building-buy-cost" id="grandma-buy-cost">{grandma.buyCost}</h4>
                                <h4 className="building-amount-owned" id="grandma-amount-owned">{grandma.amountOwned}</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col style={{ cursor: 'pointer', border: '2px black solid', background: '#9c8354', margin: '1px' }} onClick={() => purchaseStoreBuilding(farm.id)}>
                            <img className="building-icon" src={farm.icon} />
                            <h3 className="building-name">{farm.name}</h3>
                            <div>
                                <h4 className="building-buy-cost" id="farm-buy-cost">{farm.buyCost}</h4>
                                <h4 className="building-amount-owned" id="farm-amount-owned">{farm.amountOwned}</h4>
                            </div>
                        </Col>

                        <Col style={{ cursor: 'pointer', border: '2px black solid', background: '#9c8354', margin: '1px' }} onClick={() => purchaseStoreBuilding(mine.id)}>
                            <img className="building-icon" src={mine.icon} />
                            <h3 className="building-name">{mine.name}</h3>
                            <div>
                                <h4 className="building-buy-cost" id="mine-buy-cost">{mine.buyCost}</h4>
                                <h4 className="building-amount-owned" id="mine-amount-owned">{mine.amountOwned}</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col style={{ cursor: 'pointer', border: '2px black solid', background: '#9c8354', margin: '1px' }} onClick={() => purchaseStoreBuilding(factory.id)}>
                            <img className="building-icon" src={factory.icon} />
                            <h3 className="building-name">{factory.name}</h3>
                            <div>
                                <h4 className="building-buy-cost" id="factory-buy-cost">{factory.buyCost}</h4>
                                <h4 className="building-amount-owned" id="factory-amount-owned">{factory.amountOwned}</h4>
                            </div>
                        </Col>

                        <Col style={{ cursor: 'pointer', border: '2px black solid', background: '#9c8354', margin: '1px' }} onClick={() => purchaseStoreBuilding(bank.id)}>
                            <img className="building-icon" src={bank.icon} />
                            <h3 className="building-name">{bank.name}</h3>
                            <div>
                                <h4 className="building-buy-cost" id="bank-buy-cost">{bank.buyCost}</h4>
                                <h4 className="building-amount-owned" id="bank-amount-owned">{bank.amountOwned}</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
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

                .the-cookie {
                    margin-bottom: 8px;
                    cursor: pointer;
                    transition: scale 2s ease;
                }

                .the-cookie:hover {
                    transform: scale(1.1);
                }

                .the-cookie:active {
                    transform: scale(1);
                }

                #cookie-total-amount {
                    margin: 0;
                    line-height: 1.15;
                    font-size: 2rem;
                    text-align: center;
                }

                .game-saved {
                    border: 2px black solid;
                    padding: 8px;
                    color: white;
                    font-weight: 600;
                    background: green;
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
                    color: #76ff03;
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
                width: 150%;
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
        const clickAudio = new Audio();
        clickAudio.src = "../audio/click.mp3";
        clickAudio.load();
        clickAudio.play();
        cookieTotalAmount += 1;
        renderUpdatedCookieValues(cookieTotalAmount, cookiesPerSecond);
    }

    function getCurrentGameProgressFromBrowser(window): any {
        try {
            const serializedGameProgress = window.localStorage.getItem('CookieClonerGameProgress');
            const derializedGameProgress = (serializedGameProgress && atob(serializedGameProgress)) || '0;0;15;0;100;0;1100;0;12000;0;130000;0;1400000';
            const separatedGameProgress = derializedGameProgress && derializedGameProgress.split(';')
            const gameProgress = {
                cookieTotalAmount: separatedGameProgress[0] ? Number(separatedGameProgress[0]) : 0,
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
                    }
                }
            }
            return gameProgress;

        } catch(error) {
            console.error('Unable to get current game progress from browser: ' + error);
        }
    }

    function purchaseStoreBuilding(id: number) {
        switch (id) {
            case 0:
                if (cookieTotalAmount >= cursor.buyCost) {
                    cookieTotalAmount -= cursor.buyCost;
                    cursor.amountOwned++;
                    cursor.buyCost = calculateStoreBuildingCost(id);
                    document.getElementById('cursor-buy-cost').innerHTML = cursor.buyCost + '';
                    document.getElementById('cursor-amount-owned').innerHTML = cursor.amountOwned + '';
                }
                break
            case 1:
                if (cookieTotalAmount >= grandma.buyCost) {
                    cookieTotalAmount -= grandma.buyCost;
                    grandma.amountOwned++;
                    grandma.buyCost = calculateStoreBuildingCost(id);
                    document.getElementById('grandma-buy-cost').innerHTML = grandma.buyCost + '';
                    document.getElementById('grandma-amount-owned').innerHTML = grandma.amountOwned + '';
                }
                break
            case 2:
                if (cookieTotalAmount >= farm.buyCost) {
                    cookieTotalAmount -= farm.buyCost;
                    farm.amountOwned++;
                    farm.buyCost = calculateStoreBuildingCost(id);
                    document.getElementById('farm-buy-cost').innerHTML = farm.buyCost + '';
                    document.getElementById('farm-amount-owned').innerHTML = farm.amountOwned + '';
                }
                break
            case 3:
                if (cookieTotalAmount >= mine.buyCost) {
                    cookieTotalAmount -= mine.buyCost;
                    mine.amountOwned++;
                    mine.buyCost = calculateStoreBuildingCost(id);
                    document.getElementById('mine-buy-cost').innerHTML = mine.buyCost + '';
                    document.getElementById('mine-amount-owned').innerHTML = mine.amountOwned + '';
                }
                break
            case 4:
                if (cookieTotalAmount >= factory.buyCost) {
                    cookieTotalAmount -= factory.buyCost;
                    factory.amountOwned++;
                    factory.buyCost = calculateStoreBuildingCost(id);
                    document.getElementById('factory-buy-cost').innerHTML = factory.buyCost + '';
                    document.getElementById('factory-amount-owned').innerHTML = factory.amountOwned + '';
                }
                break
            case 5:
                if (cookieTotalAmount >= bank.buyCost) {
                    cookieTotalAmount -= bank.buyCost;
                    bank.amountOwned++;
                    bank.buyCost = calculateStoreBuildingCost(id);
                    document.getElementById('bank-buy-cost').innerHTML = bank.buyCost + '';
                    document.getElementById('bank-amount-owned').innerHTML = bank.amountOwned + '';
                }
                break
        }

        cookiesPerSecond =
            (cursor.amountOwned * cursor.cookiesPerSecond) +
            (grandma.amountOwned * grandma.cookiesPerSecond) +
            (farm.amountOwned * farm.cookiesPerSecond) +
            (mine.amountOwned * mine.cookiesPerSecond) +
            (factory.amountOwned * factory.cookiesPerSecond) +
            (bank.amountOwned * bank.cookiesPerSecond)

        renderUpdatedCookieValues(cookieTotalAmount, cookiesPerSecond);
    }

    function calculateStoreBuildingCost(id: number) {
        switch (id) {
            case 0:
                return Math.floor(cursor.buyCost * 1.15);
            case 1:
                return Math.floor(grandma.buyCost * 1.15);
            case 2:
                return Math.floor(farm.buyCost * 1.15);
            case 3:
                return Math.floor(mine.buyCost * 1.15);
            case 4:
                return Math.floor(factory.buyCost * 1.15);
            case 5:
                return Math.floor(bank.buyCost * 1.15);
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
            (grandma.amountOwned * grandma.cookiesPerSecond) +
            (farm.amountOwned * farm.cookiesPerSecond) +
            (mine.amountOwned * mine.cookiesPerSecond) +
            (factory.amountOwned * factory.cookiesPerSecond) +
            (bank.amountOwned * bank.cookiesPerSecond)

        cookieTotalAmount += cookiesPerSecond;
        renderUpdatedCookieValues(cookieTotalAmount, cookiesPerSecond);

        setInterval(() => {
            cookiesPerSecond =
                (cursor.amountOwned * cursor.cookiesPerSecond) +
                (grandma.amountOwned * grandma.cookiesPerSecond) +
                (farm.amountOwned * farm.cookiesPerSecond) +
                (mine.amountOwned * mine.cookiesPerSecond) +
                (factory.amountOwned * factory.cookiesPerSecond) +
                (bank.amountOwned * bank.cookiesPerSecond)

            cookieTotalAmount += cookiesPerSecond;
            renderUpdatedCookieValues(cookieTotalAmount, cookiesPerSecond);
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
                gameProgress.store.grandma.gameProgressToString() + ';' +
                gameProgress.store.farm.gameProgressToString() + ';' +
                gameProgress.store.mine.gameProgressToString() + ';' +
                gameProgress.store.factory.gameProgressToString() + ';' +
                gameProgress.store.bank.gameProgressToString() + ';'
            );
            WINDOW.localStorage.setItem('CookieClonerGameProgress', serializedGameProgress);
            document.getElementById("game-saved-message").style.opacity = '100%';
            document.getElementById("game-saved-message").style.height = 'auto';
            setTimeout(() => {
                document.getElementById("game-saved-message").style.opacity = '0';
                document.getElementById("game-saved-message").style.height = '0';
            }, 5000)
        }, 60000)
    }

    async function renderUpdatedCookieValues(cookieTotalAmount: number, cookiesPerSecond: number) {
        document.getElementById('cookie-total-amount').innerHTML = cookieTotalAmount + "<br>cookies<br>per second : " + cookiesPerSecond;

        if (document.querySelector('title')) {
            document.querySelector('title').innerHTML = cookieTotalAmount + ' cookies - Cookie Cloner';
        }
    }

    function getCurrentGameProgress(): GameProgress {
        const gameProgress: GameProgress = {
            cookieTotalAmount,
            store: {
                cursor,
                grandma,
                farm,
                mine,
                factory,
                bank
            }
        }
        return gameProgress;
    }
}

