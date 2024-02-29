import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Navbars() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Netflix</Navbar.Brand>
              <Nav className="me-auto">
                <Link className='nav-link' to='/'>Movie</Link>
                <Link className='nav-link' to='/movie/:id'>video</Link> 
              </Nav>
          </Container>
          <Form className="d-flex">
            <input type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button className="me-2">Search</Button>
          </Form>
        </Navbar>
      </>
    );
  }
  
  export default Navbars;