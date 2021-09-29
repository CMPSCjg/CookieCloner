import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Navbar from '../../components/nav/nav';
import FontAdjust from '../../components/head/head'
import FooterComp from '../../components/footer/footer';

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

import 'bootstrap/dist/css/bootstrap.min.css';

var WINDOW;

export default function game() {

    // Maintain an array of interval IDs in order to stop these when the user navigates off this page.
    const router = useRouter();
    let runningIntervalProcesses = [];

    // Define cookie amount variables that can be used across the scope of the game.
    let cookieTotalAmount;
    let cookiesPerSecond;

    // Define store buildings as classes that can be used across the scope of the game.
    let cursor = new Cursor(0, 15);
    let grandma = new Grandma(0, 100);
    let farm = new Farm(0, 1100);
    let mine = new Mine(0, 12000);
    let factory = new Factory(0, 130000);
    let bank = new Bank(0, 1400000);
    let temple = new Temple(0, 20000000);
    let wizardTower = new WizardTower(0, 330000000);
    let shipment = new Shipment(0, 5100000000);
    let alchemyLab = new AlchemyLab(0, 75000000000);
    let portal = new Portal(0, 1000000000000);
    let timeMachine = new TimeMachine(0, 14000000000000);
    let antimatterCondenser = new AntimatterCondenser(0, 170000000000000);
    let prism = new Prism(0, 2100000000000000);
    let chancemaker = new Chancemaker(0, 26000000000000000);
    let fractalEngine = new FractalEngine(0, 310000000000000000);
    let javascriptConsole = new JavascriptConsole(0, 71000000000000000000);
    let idleverse = new Idleverse(0, 12000000000000000000000);

    // Store these buildings in an array that can be looped over and reduce redundant code.
    let buildings:
        Array<Cursor | Grandma | Farm | Mine | Factory | Bank | Temple | WizardTower | Shipment | AlchemyLab |
            Portal | TimeMachine | AntimatterCondenser | Prism | Chancemaker | FractalEngine | JavascriptConsole | Idleverse> = [];
    buildings.push(cursor);
    buildings.push(grandma);
    buildings.push(farm);
    buildings.push(mine);
    buildings.push(factory);
    buildings.push(bank);
    buildings.push(temple);
    buildings.push(wizardTower);
    buildings.push(shipment);
    buildings.push(alchemyLab);
    buildings.push(portal);
    buildings.push(timeMachine);
    buildings.push(antimatterCondenser);
    buildings.push(prism);
    buildings.push(chancemaker);
    buildings.push(fractalEngine);
    buildings.push(javascriptConsole);
    buildings.push(idleverse)

    useEffect(() => {

        // Retrieve the current game progress from their browser's local storage.
        // The method has fallback code for default values if they either don't have progress or haven't unlocked buildings yet.
        WINDOW = window;
        const gameProgressFromBrowser: GameProgress = getCurrentGameProgressFromBrowser(WINDOW);

        // Store their cookie total in memory and update the UI to reflect the value stored.
        cookieTotalAmount = gameProgressFromBrowser.cookieTotalAmount;
        renderUpdatedCookieValues(cookieTotalAmount, cookiesPerSecond);

        // Update the Cursor class with their total amount owned and the price for their next purchase.
        cursor.amountOwned = gameProgressFromBrowser.store.cursor.amountOwned
        cursor.buyCost = gameProgressFromBrowser.store.cursor.buyCost

        // Update the Grandma class with their total amount owned and the price for their next purchase.
        grandma.amountOwned = gameProgressFromBrowser.store.grandma.amountOwned
        grandma.buyCost = gameProgressFromBrowser.store.grandma.buyCost

        // Update the Farm class with their total amount owned and the price for their next purchase.
        farm.amountOwned = gameProgressFromBrowser.store.farm.amountOwned
        farm.buyCost = gameProgressFromBrowser.store.farm.buyCost

        // Update the Mine class with their total amount owned and the price for their next purchase.
        mine.amountOwned = gameProgressFromBrowser.store.mine.amountOwned
        mine.buyCost = gameProgressFromBrowser.store.mine.buyCost

        // Update the Factory class with their total amount owned and the price for their next purchase.
        factory.amountOwned = gameProgressFromBrowser.store.factory.amountOwned
        factory.buyCost = gameProgressFromBrowser.store.factory.buyCost

        // Update the Bank class with their total amount owned and the price for their next purchase.
        bank.amountOwned = gameProgressFromBrowser.store.bank.amountOwned
        bank.buyCost = gameProgressFromBrowser.store.bank.buyCost

        // Update the Temple class with their total amount owned and the price for their next purchase.
        temple.amountOwned = gameProgressFromBrowser.store.temple.amountOwned
        temple.buyCost = gameProgressFromBrowser.store.temple.buyCost

        // Update the WizardTower class with their total amount owned and the price for their next purchase.
        wizardTower.amountOwned = gameProgressFromBrowser.store.wizardTower.amountOwned
        wizardTower.buyCost = gameProgressFromBrowser.store.wizardTower.buyCost

        // Update the Shipment class with their total amount owned and the price for their next purchase.
        shipment.amountOwned = gameProgressFromBrowser.store.shipment.amountOwned
        shipment.buyCost = gameProgressFromBrowser.store.shipment.buyCost

        // Update the AlchemyLab class with their total amount owned and the price for their next purchase.
        alchemyLab.amountOwned = gameProgressFromBrowser.store.alchemyLab.amountOwned
        alchemyLab.buyCost = gameProgressFromBrowser.store.alchemyLab.buyCost

        // Update the Portal class with their total amount owned and the price for their next purchase.
        portal.amountOwned = gameProgressFromBrowser.store.portal.amountOwned
        portal.buyCost = gameProgressFromBrowser.store.portal.buyCost

        // Update the TimeMachine class with their total amount owned and the price for their next purchase.
        timeMachine.amountOwned = gameProgressFromBrowser.store.timeMachine.amountOwned
        timeMachine.buyCost = gameProgressFromBrowser.store.timeMachine.buyCost

        // Update the AntimatterCondenser class with their total amount owned and the price for their next purchase.
        antimatterCondenser.amountOwned = gameProgressFromBrowser.store.antimatterCondenser.amountOwned
        antimatterCondenser.buyCost = gameProgressFromBrowser.store.antimatterCondenser.buyCost

        // Update the Prism class with their total amount owned and the price for their next purchase.
        prism.amountOwned = gameProgressFromBrowser.store.prism.amountOwned
        prism.buyCost = gameProgressFromBrowser.store.prism.buyCost

        // Update the Chancemaker class with their total amount owned and the price for their next purchase.
        chancemaker.amountOwned = gameProgressFromBrowser.store.chancemaker.amountOwned
        chancemaker.buyCost = gameProgressFromBrowser.store.chancemaker.buyCost

        // Update the FractalEngine class with their total amount owned and the price for their next purchase.
        fractalEngine.amountOwned = gameProgressFromBrowser.store.fractalEngine.amountOwned
        fractalEngine.buyCost = gameProgressFromBrowser.store.fractalEngine.buyCost

        // Update the JavascriptConsole class with their total amount owned and the price for their next purchase.
        javascriptConsole.amountOwned = gameProgressFromBrowser.store.javascriptConsole.amountOwned
        javascriptConsole.buyCost = gameProgressFromBrowser.store.javascriptConsole.buyCost

        // Update the Idleverse class with their total amount owned and the price for their next purchase.
        idleverse.amountOwned = gameProgressFromBrowser.store.idleverse.amountOwned
        idleverse.buyCost = gameProgressFromBrowser.store.idleverse.buyCost

        // Update the UI to reflect these values.
        renderUpdatedStoreValues(buildings)

        // Kick off the repeated, setInterval code to have the player gain cookies every second and save their progress to Local Storage every 60 seconds.
        beginCookieGeneratingEngine();
        beginGameProgressSavingEngine();

        // When the user navigates off the Game page, we will end each setInterval process.
        //      beforePopState accounts for user hitting the 'back' button on their browser.
        //      beforeUnload accounts for user navigating off the page user by typing a different URL.
        router.beforePopState(() => {
            runningIntervalProcesses.forEach(intervalId => clearInterval(intervalId));
            runningIntervalProcesses = [];
            return true;
        })

        window.addEventListener('beforeunload', () => {
            runningIntervalProcesses.forEach(intervalId => clearInterval(intervalId));
            runningIntervalProcesses = [];
        })
    })

    return (
        <>
            <FontAdjust />
            <Navbar></Navbar>
            <Container>
                <main>
                    <p id="game-saved-message" className="game-saved" style={{ opacity: '0' }}>Your game progress has been saved!</p>
                    <div className="game">
                        <h3 id="cookie-total-amount"></h3>
                        <img
                            className="the-cookie"
                            src="../images/cookie-logo.png"
                            onClick={() => manualCookieClick()}
                        />
                    </div>
                    <p><strong>Game progress will automatically save every 60 seconds!</strong></p>
                    <Row>
                        <Col>
                            <label style={{ height: '30px', paddingTop: '1px', paddingLeft: '6px', paddingRight: '6px' }} className="game-save-button">
                                <input type="file" style={{ display: 'none' }} onChange={(event) => importSavedGameProgress(WINDOW, event)} />
                                IMPORT SAVE
                            </label>
                        </Col>
                        <Col>
                            <button className="game-save-button" onClick={() => saveGameProgress()}>SAVE</button>
                        </Col>
                        <Col>
                            <button className="game-save-button" onClick={() => exportSavedGameProgress(WINDOW)}>EXPORT SAVE</button>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(cursor.id)}>
                                <img className="building-icon" src={cursor.icon} />
                                <h3 className="building-name">{cursor.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="cursor-buy-cost">{cursor.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="cursor-amount-owned">{cursor.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(grandma.id)}>
                                <img className="building-icon" src={grandma.icon} />
                                <h3 className="building-name">{grandma.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="grandma-buy-cost">{grandma.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="grandma-amount-owned">{grandma.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(farm.id)}>
                                <img className="building-icon" src={farm.icon} />
                                <h3 className="building-name">{farm.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="farm-buy-cost">{farm.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="farm-amount-owned">{farm.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(mine.id)}>
                                <img className="building-icon" src={mine.icon} />
                                <h3 className="building-name">{mine.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="mine-buy-cost">{mine.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="mine-amount-owned">{mine.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(factory.id)}>
                                <img className="building-icon" src={factory.icon} />
                                <h3 className="building-name">{factory.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="factory-buy-cost">{factory.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="factory-amount-owned">{factory.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(temple.id)}>
                                <img className="building-icon" src={temple.icon} />
                                <h3 className="building-name">{temple.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="temple-buy-cost">{temple.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="temple-amount-owned">{temple.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(wizardTower.id)}>
                                <img className="building-icon" src={wizardTower.icon} />
                                <h3 className="building-name">{wizardTower.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="wizardtower-buy-cost">{wizardTower.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="wizardtower-amount-owned">{wizardTower.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(shipment.id)}>
                                <img className="building-icon" src={shipment.icon} />
                                <h3 className="building-name">{shipment.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="shipment-buy-cost">{shipment.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="shipment-amount-owned">{shipment.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(alchemyLab.id)}>
                                <img className="building-icon" src={alchemyLab.icon} />
                                <h3 className="building-name">{alchemyLab.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="alchemylab-buy-cost">{alchemyLab.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="alchemylab-amount-owned">{alchemyLab.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(portal.id)}>
                                <img className="building-icon" src={portal.icon} />
                                <h3 className="building-name">{portal.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="portal-buy-cost">{portal.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="portal-amount-owned">{portal.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(timeMachine.id)}>
                                <img className="building-icon" src={timeMachine.icon} />
                                <h3 className="building-name">{timeMachine.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="timemachine-buy-cost">{timeMachine.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="timemachine-amount-owned">{timeMachine.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(antimatterCondenser.id)}>
                                <img className="building-icon" src={antimatterCondenser.icon} />
                                <h3 className="building-name">{antimatterCondenser.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="antimattercondenser-buy-cost">{antimatterCondenser.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="antimattercondenser-amount-owned">{antimatterCondenser.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(prism.id)}>
                                <img className="building-icon" src={prism.icon} />
                                <h3 className="building-name">{prism.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="prism-buy-cost">{prism.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="prism-amount-owned">{prism.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(chancemaker.id)}>
                                <img className="building-icon" src={chancemaker.icon} />
                                <h3 className="building-name">{chancemaker.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="chancemaker-buy-cost">{chancemaker.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="chancemaker-amount-owned">{chancemaker.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(fractalEngine.id)}>
                                <img className="building-icon" src={fractalEngine.icon} />
                                <h3 className="building-name">{fractalEngine.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="fractalengine-buy-cost">{fractalEngine.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="fractalengine-amount-owned">{fractalEngine.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(javascriptConsole.id)}>
                                <img className="building-icon" src={javascriptConsole.icon} />
                                <h3 className="building-name">{javascriptConsole.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="javascriptconsole-buy-cost">{javascriptConsole.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="javascriptconsole-amount-owned">{javascriptConsole.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <a className="card" onClick={() => purchaseStoreBuilding(idleverse.id)}>
                                <img className="building-icon" src={idleverse.icon} />
                                <h3 className="building-name">{idleverse.name}</h3>
                                <div>
                                    <h4 className="building-buy-cost" id="idleverse-buy-cost">{idleverse.buyCost}</h4>
                                    <h4 className="building-amount-owned" id="idleverse-amount-owned">{idleverse.amountOwned}</h4>
                                </div>
                            </a>
                        </Col>
                    </Row>

                </main>

                <FooterComp></FooterComp>

                <style jsx>{`
            
                * {
                    font-family: gluten;
                }

                @media (max-width: 600px) {
                    .game-save-button {
                        display: none;
                    }
                }

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
                    transition: scale 1s ease;
                    display: block;
                    margin: auto;
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
                    font-weight: 600;
                    background: green;
                    cursor: default;
                    background: #00b31e;
                    color: white;
                    border: 4px solid black;
                    border-radius: 6px;
                    width: 40%;
                    text-align: center;
                }

                .game-saved-animation {
                    animation: fadeinout 5s linear;
                }

                @keyframes fadeinout {
                    0%,100% { opacity: 0; }
                    25% { opacity: 1; }
                    50% { opacity: 1; }
                    75% { opacity: 1; }
                }

                .game-save-button {
                    white-space: nowrap;
                    background: white;
                    margin-bottom: 16px;
                    color: #00b31e;
                    transition: 0.2s ease;
                    cursor: pointer;
                    border: 4px solid #eaeaea;
                    border-radius: 6px;
                }

                .game-save-button:hover {
                    background: #00b31e;
                    color: white;
                    border: 4px solid black;
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
                    color: #00b31e;
                    float: left;
                }

                .building-amount-owned {
                    font-size: 3.5rem;
                    float: right;
                }
                
                .card {
                    margin: 0.5rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 4px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.2s ease, border-color 0.2s ease;
                    cursor: pointer;
                  }
          
                .card:hover,
                .card:focus,
                .card:active {
                    background-color: #90e0ef;
                    border-color: #0096c7;
                }
        
                .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
                }
        
                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .building-cookies-per-second {
                    color: white;
                    font-size: 1rem;
                    font-weight: 600;
                    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
                }

                .logo {
                    height: 1em;
                }
            `}
                </style>
            </Container>
        </>
    )

    function manualCookieClick() {
        // Play the 'click' sound effect.
        const clickAudio = new Audio();
        clickAudio.src = "../audio/click.mp3";
        clickAudio.load();
        clickAudio.play();

        // Update their total cookie amount by 1 and render this updated value on the UI.
        cookieTotalAmount += 1;
        renderUpdatedCookieValues(cookieTotalAmount, cookiesPerSecond);
    }

    function getCurrentGameProgressFromBrowser(window): GameProgress {
        try {
            const serializedGameProgress = window.localStorage.getItem('CookieClonerGameProgress');
            const deserializedGameProgress = serializedGameProgress && atob(serializedGameProgress)
            const separatedGameProgress = (deserializedGameProgress && deserializedGameProgress.split(';').map(Number)) ?? [];

            const gameProgress: GameProgress = {
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
                }
            }
            return gameProgress;

        } catch (error) {
            console.error('Unable to get current game progress from browser: ' + error);
        }
    }

    function purchaseStoreBuilding(id: number) {
        if (cookieTotalAmount >= buildings[id].buyCost) {
            cookieTotalAmount -= buildings[id].buyCost;
            buildings[id].amountOwned++;
            buildings[id].buyCost = calculateStoreBuildingCost(id);
            renderUpdatedStoreValues(buildings);
        }

        cookiesPerSecond = calculateCookiesPerSecond(buildings);
        renderUpdatedCookieValues(cookieTotalAmount, cookiesPerSecond);
    }

    function calculateStoreBuildingCost(id: number) {
        return Math.floor(buildings[id].buyCost * 1.15)
    }

    function beginCookieGeneratingEngine() {

        // When user first hits the page, render these values rather than waiting 1 second.
        cookiesPerSecond = calculateCookiesPerSecond(buildings)
        cookieTotalAmount += cookiesPerSecond;
        renderUpdatedCookieValues(cookieTotalAmount, cookiesPerSecond);

        // Every second, execute this code to add to their cookie total amount.
        runningIntervalProcesses.push(
            setInterval(() => {
                cookiesPerSecond = calculateCookiesPerSecond(buildings)
                cookieTotalAmount += cookiesPerSecond;
                renderUpdatedCookieValues(cookieTotalAmount, cookiesPerSecond);
            }, 1000)
        );
    }


    function beginGameProgressSavingEngine() {


        // Every 60 seconds, an automatic save should be made to store player progress
        /* 
            total # of cookies,
            store buildings owned,
            achievements,
            upgrades, etc.
        */

        runningIntervalProcesses.push(
            setInterval(() => {

                // Save the player's progress to their browser Local Storage.
                saveGameProgress();

            }, 60000)
        )
    }

    async function importSavedGameProgress(window, event) {
        // Retrieve the data from the text file uploaded by the player.
        const incomingFile = event?.target?.files?.item(0);
        const incomingFileText = await incomingFile?.text();
        window.localStorage.setItem('CookieClonerGameProgress', incomingFileText);

        // Refresh the page to pull in the updated game progress from their browser Local Storage.
        window.location.reload();
    }

    function saveGameProgress() {
        const gameSavedMessageElement: HTMLElement = document.getElementById("game-saved-message");
        const gameProgress = getCurrentGameProgress()
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
            gameProgress.store.idleverse.gameProgressToString() + ';'
        );
        WINDOW.localStorage.setItem('CookieClonerGameProgress', serializedGameProgress);

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

    function exportSavedGameProgress(window) {
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

    function renderUpdatedCookieValues(cookieTotalAmount: number, cookiesPerSecond: number) {
        const cookieTotalAmountElement: HTMLElement = document.getElementById('cookie-total-amount');
        const titleElement: HTMLTitleElement = document.querySelector('title');
        const formattedCookieTotalAmount = formatLargerNumber(cookieTotalAmount);
        const formattedCookiesPerSecond = formatLargerNumber(cookiesPerSecond);

        if (cookieTotalAmountElement) {
            cookieTotalAmountElement.innerHTML = formattedCookieTotalAmount + "<br>cookies<br>per second : " + formattedCookiesPerSecond;
        }

        if (titleElement) {
            titleElement.innerHTML = formattedCookieTotalAmount + ' cookies - Cookie Cloner';
        }
    }


    function renderUpdatedStoreValues(buildings: Array<Cursor | Grandma | Farm | Mine | Factory | Bank | Temple | WizardTower | Shipment | AlchemyLab |
        Portal | TimeMachine | AntimatterCondenser | Prism | Chancemaker | FractalEngine | JavascriptConsole | Idleverse>) {
        buildings.forEach(building => {
            const formattedBuyCost = formatLargerNumber(building.buyCost);
            const formattedAmountOwned = formatLargerNumber(building.amountOwned);
            const buildingName = building.name.toLowerCase().replace(/ /g, '');
            const buyCostElement: HTMLElement = document.getElementById(buildingName + '-buy-cost');
            const amountOwnedElement: HTMLElement = document.getElementById(buildingName + '-amount-owned');

            if (buyCostElement)
                buyCostElement.innerHTML = formattedBuyCost;

            if (amountOwnedElement)
                amountOwnedElement.innerHTML = formattedAmountOwned;
        })
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
                bank,
                temple,
                wizardTower,
                shipment,
                alchemyLab,
                portal,
                timeMachine,
                antimatterCondenser,
                prism,
                chancemaker,
                fractalEngine,
                javascriptConsole,
                idleverse
            }
        }
        return gameProgress;
    }

    function calculateCookiesPerSecond(buildings: Array<Cursor | Grandma | Farm | Mine | Factory | Bank | Temple | WizardTower | Shipment | AlchemyLab |
        Portal | TimeMachine | AntimatterCondenser | Prism | Chancemaker | FractalEngine | JavascriptConsole | Idleverse>) {
        let cookiesPerSecond = 0;
        buildings.forEach(building => cookiesPerSecond += (building.amountOwned * building.cookiesPerSecond));

        return cookiesPerSecond;
    }

    function formatLargerNumber(numberToFormat: number): string {
        return numberToFormat?.toLocaleString();
    }
}

