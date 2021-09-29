import { Row, Col, Container } from 'react-bootstrap';

import NavbarComp from '../../components/nav/nav';
import HeaderComp from '../../components/head/head';
import FooterComp from '../../components/footer/footer';
import { RecipesApiResponse } from '../../models/recipes/RecipesApiResponse';

export default function recipes() {

    return (
        <>
            <NavbarComp />
            <Container>
                <HeaderComp />
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

                        <br />
                        <p className="description">TODO: REMOVE THIS WITH RECIPE CARDS.</p>
                        <br />
                        <p style={{ overflowWrap: 'break-word'}} id="response-data"></p>
                    </Col>
                    <Col></Col>
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

    async function searchForRecipe(event) {
        // Cancel the submit request from the browser side.
        if (event) event.preventDefault();

        // Parse the entered recipe name from the search bar input field, making sure to remove any additional whitespace.
        let recipeToSearchFor = event?.target?.children[0]?.value;
        recipeToSearchFor = recipeToSearchFor.trim();

        // If the search bar input field is empty, do not execute the API request.
        if (!recipeToSearchFor) 
            return;

        // Execute API request with recipeToSearchFor as query parameter.
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ recipeToSearchFor }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const responseData: RecipesApiResponse = await response.json();
        document.getElementById('response-data').innerHTML = JSON.stringify(responseData);
    }
}

