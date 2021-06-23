import React from 'react'
import {Navbar ,Nav, FormControl,Form,Button,} from 'react-bootstrap'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

function NavBar (){
return (
    <Navbar expand="lg" className="navbar-cont" >
    <Navbar.Brand  className="navbar-logo" ><Link to="/">Calu Movies</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link ><Link to='/category/romanticas' >Romanticas</Link></Nav.Link>
        <Nav.Link ><Link to='/category/comedia' >Comedia</Link></Nav.Link>
        <Nav.Link ><Link to='/category/accion'  >Acción</Link></Nav.Link>
        <Nav.Link ><Link to='/category/'>Ver Todas</Link></Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Buscar películas..." className="mr-sm-2" />
        <Button variant="outline-light"  className="mr-sm-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></Button>
        <CartWidget/>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)
}

export default NavBar;