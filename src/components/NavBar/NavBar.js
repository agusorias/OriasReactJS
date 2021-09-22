import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import "./NavBar.css";


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Link to ="/" style={{ textDecoration: 'none' }}>        
                <Navbar.Brand href="/" id="brandName">
                    <img
                    alt=""
                    src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/13189.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    />{' '}
                    ECOrdoba
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                    <NavDropdown title="Tienda" id="collasible-nav-dropdown">
                        <Link to="/"><NavDropdown.Item href="#action/3.1">Ir a la tienda</NavDropdown.Item></Link>
                        <NavDropdown.Divider />
                        <Link to="/category/Limpieza"><NavDropdown.Item href="#action/3.2">Limpieza</NavDropdown.Item></Link>
                        <Link to="/category/Higiene"><NavDropdown.Item href="#action/3.3">Higiene</NavDropdown.Item></Link>
                        <Link to="/category/Reciclaje"><NavDropdown.Item href="#action/3.4">Reciclaje</NavDropdown.Item></Link>
                    </NavDropdown>
                </Nav>
                <Link to='/cart' >
                    <CartWidget/>
                </Link >
            </Navbar.Collapse>
            </Container>
        </Navbar>
       
    )
}
export default NavBar