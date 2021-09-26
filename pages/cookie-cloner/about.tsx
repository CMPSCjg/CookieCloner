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
}

