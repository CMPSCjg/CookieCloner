import Head from 'next/head'
import { useEffect } from 'react';

var WINDOW;

export default function game() {

    let cookieTotalAmount = 0;
    useEffect(() => { 
        WINDOW = window; 
        cookieTotalAmount = getCurrentGameProgressFromBrowser(WINDOW) || 0; 
        document.getElementById('cookie-total-amount').innerHTML = cookieTotalAmount + " cookies";
    })

    return (
        <div className="container">
            <Head>
            <title>Cookie Cloner</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">Game</h1>

                <div className="game">
                    <h3 id="cookie-total-amount">{cookieTotalAmount} cookies</h3>
                    <img 
                        src="/images/CookieClonerLogo_Smaller.png" 
                        onClick={() => manualCookeClick()}
                    />
                </div>
            </main>

            <footer>
                <span>Powered by{' '}
                <img src="/favicon.ico" alt="Vercel" className="logo" />
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

                .title a {
                color: #0070f3;
                text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                text-decoration: underline;
                }

                .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
                }

                .title,
                .description {
                text-align: center;
                }

                .description {
                line-height: 1.5;
                font-size: 1.5rem;
                }

                code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }

                .grid {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                max-width: 800px;
                margin-top: 3rem;
                }

                .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
                }

                .card:hover,
                .card:focus,
                .card:active {
                color: #0070f3;
                border-color: #0070f3;
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

                .logo {
                height: 1em;
                }

                @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }
                }
            `}
            </style>
        </div>
    )

    function manualCookeClick() {
        cookieTotalAmount += 1;
        document.getElementById('cookie-total-amount').innerHTML = cookieTotalAmount + " cookies";
        setCurrentGameProgressToBrowser(cookieTotalAmount);
    }

    function setCurrentGameProgressToBrowser(cookieTotalAmount: number) {
        const serializedGameProgress = btoa(cookieTotalAmount + ';');
        WINDOW.localStorage.setItem('CookieClonerGameProgress', serializedGameProgress);
    }

    function getCurrentGameProgressFromBrowser(window): any {
        try {
            const serializedGameProgress = window.localStorage.getItem('CookieClonerGameProgress');
            const derializedGameProgress = atob(serializedGameProgress);
            const separatedGameProgress = derializedGameProgress.split(';')
            return Number(separatedGameProgress[0]);

        } catch(error) {
            console.error('Unable to get current game progress from browser: ' + error);
        }
    }
}

