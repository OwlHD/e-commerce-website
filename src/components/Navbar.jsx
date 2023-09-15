import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-primary bg-gradient" data-bs-theme='dark' fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to="/">iShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/1">Category 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/2">Category 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/3">Category 3</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/4">Category 4</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/5">Category 5</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}