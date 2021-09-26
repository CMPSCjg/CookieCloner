import Link from "next/link";
import FontAdjust from '../components/head/head'

export default function PageNotFound() {
    return (
        <div className="container">
            <FontAdjust></FontAdjust>

            <main>
                <img style={{width: '40%'}} src="images/404.jpg" />
                <h1 className="title">
                    Oooops. . .
                </h1>

                <p className="description">
                    That page cannot be found.
                </p>

                <Link href="/">
                    <a>Click here to return to the homepage</a>
                </Link>
            </main>

            <footer>
                <span>Powered by{' '}
                <img src="/favicon.ico" alt="cookie" className="logo" />
                s and users like you.
                </span>
            </footer>

            <style jsx>{`
            
                * {
                    font-family: gluten;
                }

                .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
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
                font-size: 1.5rem;
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



                .logo {
                height: 1em;
                }
            `}
            </style>
        </div>
    )
}