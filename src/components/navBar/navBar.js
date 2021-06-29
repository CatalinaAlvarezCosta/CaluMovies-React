import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-cont">
      <Navbar.Brand>
        <Link to="/" className="navbar-logo">
          Calu Movies
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/category/romantica" className="navbar-items">
              Romantica
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/category/comedia" className="navbar-items">
              Comedia
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/category/accion" className="navbar-items">
              Acción
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/category/all" className="navbar-items">
              Ver Todas
            </Link>
          </Nav.Item>
        </Nav>
        <Form inline>
          <CartWidget>
            <Link to="/cart" className="navbar-items"></Link>
          </CartWidget>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
