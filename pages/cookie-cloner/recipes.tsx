import Head from 'next/head';
import Navbar from '../../components/nav/nav';

import { Row, Col, Container } from 'react-bootstrap';

export default function recipes() {

    // let recipesData = MOCK_COOKIE_RECIPES_RESPONSE;

    // const nutritionalInformation: NutritionalInformation[] = [
    //     {
    //         servingSize: 12,
    //         calories: 1000,
    //         protein: 50,
    //         fat: 40,
    //         carb: 100,
    //         cholestrol: 1,
    //         sodium: 2,
    //         calcium: 3,
    //         magnesium: 4,
    //         potassium: 5,
    //         iron: 6
    //     }
    // ]

    // useEffect(() => {
    //      fetch('http://localhost:3000/api/recipes').then(data => recipesData = data);
    //     console.log('Recipes data: ' + JSON.stringify(recipesData))
    // })

    // fetch('http://localhost:3000/api/recipes').then(data => {
    //     recipesData = data.body
    //     console.log('data: ' + JSON.stringify(data))
    // });


    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Head>
                    <title>Cookie Cloner</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Row>
                    <Col></Col>
                    <Col xs={12}>
                        <h1 className="title">Recipes</h1>

                        <p className="description">I am a demon. I live and breathe hot fire like Bill Clinton.</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <style jsx>{`
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
                    margin-top: 4rem;
                    font-weight: 600;
                    font-size: 1rem;
                    width: 50%
                }
            `}</style>
        </>
    )
}

