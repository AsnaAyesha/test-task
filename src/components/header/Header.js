import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./header.css"
const Header = () => {
  return (
    
      <Navbar bg="primary" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#">
              <Link to={"/"} className='LinkColor'>Dashboard</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to={"/register"} className='LinkColor'> Register</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  )
}

export default Header
