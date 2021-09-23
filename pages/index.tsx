import Head from 'next/head'
import Link from 'next/link'
import FontAdjust from '../components/head/head'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  const test: String = 'hello';

  return (
    <div className="container">
      <FontAdjust></FontAdjust>
      <main>
        <img src="/images/CookieClonerLogo_Smaller.png" />

        <div className="grid">
          <Link href="/cookie-cloner/game">
            <a className="card">
              <h3>Game &rarr;</h3>
              <p>Click here to begin your cookie clicking journey!</p>
            </a>
          </Link>

          <Link href="/cookie-cloner/about">
            <a className="card">
              <h3>About &rarr;</h3>
              <p>Learn more about this project and its creators!</p>
            </a>
          </Link>

          <Link href="/cookie-cloner/recipes">
            <a className="card">
              <h3>Recipes &rarr;</h3>
              <p>Discover new types of cookies and how to make them!</p>
            </a>
          </Link>

          <Link href="/cookie-cloner/support-us">
            <a className="card">
              <h3>Support Us &rarr;</h3>
              <p>Learn more about how you can help to support this project!</p>
            </a>
          </Link>
        </div>
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
    </div>
  )
}
