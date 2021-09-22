import { Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <Nav style={{justifyContent: 'center'}}>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/cookie-cloner/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/cookie-cloner/game">Game</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/cookie-cloner/recipes">Recipes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/cookie-cloner/support-us">Support Us</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}