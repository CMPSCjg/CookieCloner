import { Navbar, Container, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
    return (
        <Navbar bg="light" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src="/images/cookie-logo.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cookie-cloner/about">About</Nav.Link>
                    <Nav.Link href="/cookie-cloner/game">Game</Nav.Link>
                    <Nav.Link href="/cookie-cloner/recipes">Recipes</Nav.Link>
                    <Nav.Link href="/cookie-cloner/support-us">Support Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}