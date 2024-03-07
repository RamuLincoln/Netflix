import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
        </Navbar>
      </>
    );
  }
  
  export default Navbars;