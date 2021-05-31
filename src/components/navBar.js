import React from 'react'
import {Navbar ,Nav, FormControl,Form,Button} from 'react-bootstrap'


function NavBar (){
return (
    <Navbar expand="lg" className="navbar-cont" >
    <Navbar.Brand href="#home" className="navbar-logo"  >Calu Cakes</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#tortas">Tortas</Nav.Link>
        <Nav.Link href="#nosotras">Nosotras</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Busca tu torta" className="mr-sm-2" />
        <Button variant="outline-light">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)
}

export default NavBar;