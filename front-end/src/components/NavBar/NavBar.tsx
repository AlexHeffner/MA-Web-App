import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/about" id='nav-link'>about</Nav.Link>
            <Nav.Link href="/test">test</Nav.Link>
            <NavDropdown title="Junklist" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/junk">Junk1</NavDropdown.Item>
              <NavDropdown.Item href="/junk">
                Junk 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/junk">
                Junk down below
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="junk" disabled>
              Junk disabled
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}