import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import "./NavBar.css";


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Link to ="/" className="d-inline-block align-top" style={{ textDecoration: 'none',color:'white' }}>        
                    <img
                    alt=""
                    src="https://images.squarespace-cdn.com/content/v1/56719903a128e6f2ce15bc2a/1451316473318-HWO61TZQXER7SDOSKC4Z/BosqueVivo-logo-white-text-no-tagline.png"
                    width="40"
                    height="40"
                    />{' '}
                    BosqueVivo
                </Link>
                <Link to='/cart' className="d-inline-block align-top, cartWidget" style={{ textDecoration: 'none' }} >
                    <CartWidget/>
                </Link >
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    )
}
export default NavBar