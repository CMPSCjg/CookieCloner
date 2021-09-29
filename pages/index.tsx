import Link from 'next/link'
import HeaderComp from '../components/head/head'
import FooterComp from '../components/footer/footer';

import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  return (
    <Container>
      <HeaderComp />
      <main>
        <div className="hero">
          <img src="/images/cookie-logo.png" />
          <h1 className="cc-hero">Cookie Cloner <span className="cc">℠</span></h1>
        </div>

        <br/><br/>

        <Row>
          <Col lg={6}>
            <Link href="/cookie-cloner/game">
              <a className="card">
                <h3>Game 🎮</h3>
                <p>Click here to begin your cookie clicking journey!</p>
              </a>
            </Link>
          </Col>

          <Col lg={6}>
            <Link href="/cookie-cloner/about">
              <a className="card">
                <h3>About 🛈</h3>
                <p>Learn more about this project and its creators!</p>
              </a>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Link href="/cookie-cloner/recipes">
              <a className="card">
                <h3>Recipes 🍪</h3>
                <p>Discover new types of cookies and how to make them!</p>
              </a>
            </Link>
          </Col>

          <Col lg={6}>
            <Link href="/cookie-cloner/support-us">
              <a className="card">
                <h3>Support Us ❤️</h3>
                <p>Learn more about how you can help to support this project!</p>
              </a>
            </Link>
          </Col>
        </Row>
        <br/><br/><br/>
      </main>
      <FooterComp />
      <style jsx>{`

        * {
          font-family: gluten;
        }

        .hero {
          text-align: center;
          padding-top: 8%;
        }

        .cc-hero {
          font-weight: 800;
          font-size: 4rem;
        }

        .cc {
          font-size: 20px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .card {
          margin: 0.5rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 4px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.2s ease, border-color 0.2s ease;
          height: 176px;
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
          .cc-hero {
            font-weight: 800;
            font-size: 4rem;
          }
          .cc {
           display: none;
          }
          .hero img {
            width: 220px;
            height: auto;
          }
        }
      `}</style><style jsx global>{`
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
