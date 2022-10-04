import {Container, Nav, Navbar} from 'react-bootstrap';
import CartWidget from "./CartWidget/CartWidget";
import './CartWidget/CartWidget.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Compras Gamers
          </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/' > Inicio </Nav.Link>
          <Nav.Link as={Link} to='/category/Proce' > Procesadores </Nav.Link>
          <Nav.Link as={Link} to='/category/GPU'> Placas de video </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;