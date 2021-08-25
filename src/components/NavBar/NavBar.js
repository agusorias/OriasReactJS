import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Widget from '../Widget/Widget';

function NavBar() {
    return (
        <Navbar bg="light" expand="xxl">
            <Container>
                <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/13189.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        />{' '}
                    ECOrdoba
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Nosotros</Nav.Link>
                    <Nav.Link href="#link">Tienda</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Widget/>
            </Container>
        </Navbar> 
    )
}
export default NavBar
