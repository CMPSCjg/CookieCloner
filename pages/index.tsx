import Link from 'next/link'
import FontAdjust from '../components/head/head'
import FooterComp from '../components/footer/footer';

import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  return (
    <Container>
      <FontAdjust />
      <main>
        <img src="/images/cookie-logo.png" />
        <h1>Cookie Cloner <span className="cc">℠</span></h1> 
        <br /><br /><br /><br />
        <Col lg={6}>
          <Row>
            <Link href="/cookie-cloner/game">
              <a className="card">
                <h3>Game 🎮</h3>
                <p>Click here to begin your cookie clicking journey!</p>
              </a>
            </Link>

            <Link href="/cookie-cloner/about">
              <a className="card">
                <h3>About 🛈</h3>
                <p>Learn more about this project and its creators!</p>
              </a>
            </Link>
          </Row>
        </Col>

        <Col lg={6}>
          <Row>
            <Link href="/cookie-cloner/recipes">
              <a className="card">
                <h3>Recipes 🍪</h3>
                <p>Discover new types of cookies and how to make them!</p>
              </a>
            </Link>

            <Link href="/cookie-cloner/support-us">
              <a className="card">
                <h3>Support Us ❤️</h3>
                <p>Learn more about how you can help to support this project!</p>
              </a>
            </Link>
          </Row>
        </Col>
        
      </main>

      <FooterComp></FooterComp>

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

        .cc {
          font-size: 20px;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
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
          text-align: center;
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
          margin: 0.5rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 4px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          background-color: #E6CEA0;
          border-color: #9c8354;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-weight: 600;
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
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  )
}
