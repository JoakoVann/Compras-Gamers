import {Container, Nav, Navbar} from 'react-bootstrap';
import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const NavBar = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Compras Gamers
          </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#proces">Procesadores</Nav.Link>
          <Nav.Link href="#gpu">Placas de video</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;