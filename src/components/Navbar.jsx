import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar({ setRefresh, user, setUser }) {
  const navigate = useNavigate()
  function clearInfo() {
    localStorage.removeItem('Username'); 
    localStorage.removeItem('Token');
    setUser({})
    navigate('/')
  }

  return (
    (user.Token) 
    ?
    <Navbar expand="lg" className="bg-primary bg-gradient" data-bs-theme='dark' fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to="/">iShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/all">All Items</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/jewelery">Jewelery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/men's clothing">Men's Clothing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/women's clothing">Women's Clothing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Button onClick={clearInfo}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    :
    <Navbar expand="lg" className="bg-primary bg-gradient" data-bs-theme='dark' fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to="/">iShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/all">All Items</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/jewelery">Jewelery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/men's clothing">Men's Clothing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/women's clothing">Women's Clothing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}