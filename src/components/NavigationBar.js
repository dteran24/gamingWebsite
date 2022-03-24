import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
   <LinkContainer to='/'> 
      <Navbar.Brand>Logo Here</Navbar.Brand> 
   </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Container>
    <Navbar.Collapse id="basic-navbar-nav">
      <Container>
      <Nav className="me-auto">
      <LinkContainer to='/'>
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/reviews'>
          <Nav.Link>Reviews</Nav.Link> 
        </LinkContainer>
        <LinkContainer to='/signin'> 
          <Nav.Link>SignIn</Nav.Link> 
        </LinkContainer>
      </Nav>
      </Container>
    </Navbar.Collapse>
  
</Navbar>
  )
}
