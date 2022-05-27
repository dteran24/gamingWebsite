import React from 'react'
import { Navbar, Container, Nav, Form, FormControl , Button } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      
   <LinkContainer to='/'> 
      <Navbar.Brand className='ms-3'>Logo Here</Navbar.Brand> 
  </LinkContainer>
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
    <Navbar.Collapse id="basic-navbar-nav">
     <Container className='d-flex justify-content-center'>
     <Form className="d-flex w-50">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
     </Container>
      <Nav className='me-3'>
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
    </Navbar.Collapse>

  
</Navbar>
  )
}
