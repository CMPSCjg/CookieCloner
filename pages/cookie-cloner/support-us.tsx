import Head from 'next/head'
import { Row, Col, Container } from 'react-bootstrap'
import * as kanyeQuotes from '../../public/mocks/kanye-quotes.json';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function supportUs() {

    const randomKanyeQuoteIndex = Math.floor(Math.random() * kanyeQuotes.length);

    return (
        <Container>
            <Head>
            <title>Cookie Cloner</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <Row>
                <Col></Col>
                <Col xs={12}>
                    <h1 className="title">Support Us</h1>

                    <p className="description">There are 2 options available for how you can help support Cookie Cloner!</p>

                    <Row>
                        <Col>
                            <div className="card">
                                <h3 className="card-title">Stream DONDA</h3>
                                <p className="card-description">Listen to DONDA on any streaming platform on repeat.</p>
                                <Row>
                                    <Col><img className="card-image clickable" src="/images/spotify.png" onClick={() => openDondaLink('spotify')}/></Col>
                                    <Col><img className="card-image clickable" src="/images/apple.png" onClick={() => openDondaLink('apple')}/></Col>
                                    <Col><img className="card-image clickable" src="/images/tidal.png" onClick={() => openDondaLink('tidal')} /></Col>
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
                    </Row>
                </Col>
                <Col></Col>
            </Row>

            <Row>
                <div className="kanye-quote">
                    {`"`}{kanyeQuotes[randomKanyeQuoteIndex]}{`"`}{`\t\t`}{' -- Kanye West'}
                </div>
            </Row>

            <style jsx>{`
                .title {
                    font-size: 4rem;
                    font-weight: 800;
                    text-align: center;
                }

                .description {
                    font-size: 1.5rem;
                    text-align: center;
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

    function openDondaLink(website: string) {
        let albumUrl;

        switch (website) {
            case 'spotify': {
                albumUrl = 'https://open.spotify.com/album/340MjPcVdiQRnMigrPybZA';
                break;
            }
            case 'apple': {
                albumUrl = 'https://music.apple.com/us/album/donda/1583449420';
                break;
            }
            case 'tidal': {
                albumUrl = 'https://tidal.com/browse/album/195728118';
                break;
            }
            default: {
                albumUrl = 'https://www.youtube.com/playlist?list=PL8czsbhQP4tvew4t_V2PL-wUMbxIUdz4o'
            }
        }

        window.open(albumUrl, '_blank');
    }
}

