import Head from 'next/head';
import Navbar from '../../components/nav/nav';
import FontAdjust from '../../components/head/head'

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
        <div className="container">
            <FontAdjust></FontAdjust>
            <Navbar></Navbar>
            <main>
                <h1 className="title">
                    Recipes
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

