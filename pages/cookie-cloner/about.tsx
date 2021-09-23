import Head from 'next/head';
import Navbar from '../../components/nav/nav';
import FontAdjust from '../../components/head/head'
import { Row, Col, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function about() {

    return (
        <Container>
            <FontAdjust></FontAdjust>
            <Navbar></Navbar>
            <Row>
                <Col></Col>
                <Col xs={12}>
                    <h1 className="title">About</h1>

                    <Row>
                        <Col>
                            <div className="card">
                                <h3 className="card-title">Summary</h3>
                                <p className="card-description">
                                    <img className="card-image" src="/images/oknic.jfif" />
                                    <img className="card-image" src="/images/cmpscjg.PNG" />
                                    This project was created as a side project by {' '}
                                    <a href="https://github.com/CMPSCjg" target="_blank">CMPSCjg</a> and {' '}
                                    <a href="https://github.com/okni-c" target="_blank">okni-c</a>.
                                    
                                    <br />
                                    <br />
                                    We had played Cookie Clicker previously and thought it would be an interesting challenge to re-create the popular 
                                    idle game. We will not by any means attempt to monetize this project in the future. This was only meant
                                    as a website that we could use as a playground to practice our web development skills. But seriously, if you could send us one of the DONDA
                                    long-sleeved shirts that would greatly appreciated.

                                    <br />
                                    <br />
                                    All jokes aside, we hope you enjoy our Cookie Clicker clone. Please feel free to leave any feedback or report any and all bugs and/or issues
                                    on our Github repository. Since this isn't a full-time thing for us, our response times may not be the fastest.
                                </p>

                                <br />
                                <br />
                                <hr />

                                <h3 className="card-title">Version History</h3>
                                <h4 className="card-sub-title">v0.1.0 - September 2021</h4>
                                <p className="card-description">
                                    Cookie Cloner is born! Using NextJS and Vercel, we bring to you our Cookie Clicker inspired website.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>

            <style jsx>{`
            
                * {
                    font-family: gluten;
                }
                .title {
                    font-size: 4rem;
                    font-weight: 800;
                    text-align: center;
                }

                .description {
                    font-size: 1.5rem;
                    text-align: center;
                }

                .donda-square {
                    color: white;
                    width: 100px;
                    height: 100px;
                    background-color: black;
                    margin: auto auto 16px auto;
                    cursor: pointer;
                }

                .donda-square-text {
                    text-align: center;
                    line-height: 100px;
                    font-weight: 600;                    
                }

                .card {
                    padding: 1.5rem;
                    border: 2px #eaeaea solid;
                    height: auto;
                    border-radius: 10px;
                }

                .card-title {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }

                .card-sub-title {
                    margin: 0 0 1rem 0;
                    font-size: 1.25rem;
                }

                .card-description {
                    margin: 0;
                    font-size: 1rem;
                    line-height: 1.5;
                }

                .card-image {
                    width: 20%;
                    float: right;
                    // margin: auto;
                    margin-left: 16px;

                }

                .card-image:hover {
                    transform: scale(1.1);
                }

                .clickable {
                    cursor: pointer;
                }

                .kanye-quote {
                    text-align: center;
                    margin: auto;
                    margin-top: 4rem;
                    font-weight: 600;
                    font-size: 1rem;
                    width: 50%
                }
            `}</style>
        </Container>
    )

    return (
        <div className="container">
            <Head>
            <title>Cookie Cloner</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
            <main>
                <h1 className="title">
                    About
                </h1>

                <p className="description">
                    This is a blank description.
                </p>
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
}

