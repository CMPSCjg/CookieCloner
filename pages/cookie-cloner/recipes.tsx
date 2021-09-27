import { Row, Col, Container } from 'react-bootstrap';

import Navbar from '../../components/nav/nav';
import FontAdjust from '../../components/head/head';
import FooterComp from '../../components/footer/footer';

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
                <FontAdjust />
                <Row>
                    <Col></Col>
                    <Col xs={12}>
                        <h1 className="title">Recipes</h1>
                        <p className="description">You can enter your search below to find new recipes!</p>

                        <form className="search-bar" onSubmit={(event) => searchForRecipe(event)}>
                            <input className="search-bar-input" placeholder="Enter your search here. . ." />
                            <button className="search-bar-button" type="submit">Search</button>
                        </form>
                        <p className="description">I am a demon. I live and breathe hot fire like Bill Clinton.</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <FooterComp></FooterComp>
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

                .search-bar {
                    text-align: center;
                    margin: 16px;
                }

                .search-bar-input {
                    width: 75%;
                    height: 45px;
                    border-radius: 32px;
                    border: 2px #eaeaea solid;
                    margin-right: 8px;
                    margin-bottom: 8px;
                    padding-left: 16px;
                    appearance: none;
                }

                .search-bar-input:hover {
                    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
                }

                .search-bar-button {
                    border: none;
                    padding: 8px;
                    background-color: rgb(239, 239, 239);
                }

                .search-bar-button:hover {
                    border: 2px #c7c5c5 solid;
                }
            `}</style>
        </>
    )

    function searchForRecipe(event) {
        // Cancel the submit request from the browser side.
        if (event) event.preventDefault();

        // Parse the entered recipe name from the search bar input field.
        const recipeToSearchFor = event?.target?.children[0]?.value;

        // TODO: Construct API request with recipeToSearchFor as query parameter.
    }
}

