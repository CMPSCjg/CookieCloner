import { Navbar, Container, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
    return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand className="nav-logo" href="/">
                        <img
                            alt=""
                            src="/images/cookie-logo-big.png"
                            width="135"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="/">Home</Nav.Link> */}
                            <Nav.Link className="nav-link-cc" href="/cookie-cloner/about">About</Nav.Link>
                            <Nav.Link className="nav-link-cc" href="/cookie-cloner/game">Game</Nav.Link>
                            <Nav.Link className="nav-link-cc" href="/cookie-cloner/recipes">Recipes</Nav.Link>
                            <Nav.Link className="nav-link-cc" href="/cookie-cloner/support-us">Support Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <style type="text/css">{`
                .nav-link-cc {
                    font-family: gluten;
                    font-weight: 800;
                    font-size: 18px;
                }
                .nav-link-cc:hover{ 
                    animation: shake 200ms infinite;
                    animation-timing-function: linear;
                    color: black;   
                }
                  @keyframes shake {
                    0% { transform: rotate(2deg); }
                    50% { transform: rotate(-2deg); }
                    100% { transform: rotate(2deg); }
                }

                .nav-logo:hover{ 
                    animation: pulse 1s infinite;
                    animation-timing-function: linear;   
                }
                  
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                @media screen and (max-width: 992px) {
                    .nav-link-cc:hover {
                      animation: none;
                    }
                    .nav-logo:hover {
                        animation: none;
                    }
                }
                `}</style>
            </Navbar>
    )
}