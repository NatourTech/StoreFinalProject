import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../Store";
import { useContext } from "react";

function NavBarB() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand href="#">Insta Store</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link href="#action1">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link href="#action2">About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link href="#action3">Contact</Nav.Link>
            </LinkContainer>
          </Nav>

          {/* cart */}
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarB;
