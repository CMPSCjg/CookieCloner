import NavbarComp from '../../components/nav/nav';
import HeaderComp from '../../components/head/head'
import FooterComp from '../../components/footer/footer';

import { Row, Col, Container } from 'react-bootstrap'
import * as kanyeQuotes from '../../public/mocks/kanye-quotes.json';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function supportUs() {

    const randomKanyeQuoteIndex = Math.floor(Math.random() * kanyeQuotes.length);

    return (
        <>
            <NavbarComp />
            <Container>
                <HeaderComp />
                <Row>
                    <Col></Col>
                    <Col xs={12}>
                        <h1 className="title">Support Us</h1>

                        <p className="description">There are 3 options available for how you can help support Cookie Cloner!</p>

                        <div className="donda-square" onClick={() => playDondaSound()} tabIndex={0}>
                            <p className="donda-square-text">DONDA</p>
                        </div>

                        <Row>
                            <Col>
                                <div className="card">
                                    <h3 className="card-title">Stream DONDA</h3>
                                    <p className="card-description">Listen to DONDA on any streaming platform on repeat.</p>
                                    <Row>
                                        <Col><img className="card-image clickable" src="/images/spotify.png" onClick={() => openLink('spotify')} tabIndex={0} /></Col>
                                        <Col><img className="card-image clickable" src="/images/apple.png" onClick={() => openLink('apple')} tabIndex={0} /></Col>
                                        <Col><img className="card-image clickable" src="/images/tidal.png" onClick={() => openLink('tidal')} tabIndex={0} /></Col>
                                    </Row>

                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <h3 className="card-title">Send us merch from Kanye's DONDA release</h3>
                                    <p className="card-description">Looking specifically for these two long-sleeve shirts that were a limited release.</p>
                                    <img className="card-image" src="/images/donda-merch-main.png" />
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <h3 className="card-title">Become a contributor</h3>
                                    <p className="card-description">Check out the repo on GitHub.</p>
                                    <img className="card-image clickable" src="/images/git-logo.png" onClick={() => openLink('github')} tabIndex={0} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>

                <Row>
                    <div className="kanye-quote">
                        {`"`}{kanyeQuotes[randomKanyeQuoteIndex]}{`"`}<br />{' -- Kanye West'}
                    </div>
                </Row>
            </Container>
            <FooterComp />
            <style jsx>{`
            
                * {
                    font-family: gluten;
                }

                .title {
                    margin-top: 120px;
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
                    height: 480px;
                    border-radius: 10px;
                }

                .card-title {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }

                .card-description {
                    margin: 0;
                    font-size: 1rem;
                    line-height: 1.5;
                }

                .card-image {
                    width: 95%;
                    margin: auto;
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
                    margin-top: 2.5rem;
                    font-weight: 600;
                    font-size: 1rem;
                    width: 50%
                }
            `}</style>
        </>
    )

    function playDondaSound() {
        const audio = new Audio();
        audio.src = "../audio/donda.mp3";
        audio.load();
        audio.play();
    }

    function openLink(website: string) {
        let url;

        switch (website) {
            case 'spotify': {
                url = 'https://open.spotify.com/album/340MjPcVdiQRnMigrPybZA';
                break;
            }
            case 'apple': {
                url = 'https://music.apple.com/us/album/donda/1583449420';
                break;
            }
            case 'tidal': {
                url = 'https://tidal.com/browse/album/195728118';
                break;
            }
            case 'github': {
                url = 'https://github.com/CMPSCjg/CookieCloner';
                break;
            }
            default: {
                url = 'https://www.youtube.com/playlist?list=PL8czsbhQP4tvew4t_V2PL-wUMbxIUdz4o'
            }
        }

        window.open(url, '_blank');
    }
}

