import React, { useState } from 'react'
import { Badge, Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../Header/Header.css'
import { Link } from 'react-router-dom'


function Header() {

  return (
<>

  
   
    <Navbar bg="dark" data-bs-theme="light">
      <Container>
      <Link to='/' className='me-4 text-white text-decoration-none'>Home</Link>
        <Nav className="me-auto me-2 ">
          <Link className='text-white text-decoration-none' to={'/view'}>View Student </Link>
        </Nav>
      </Container>
    </Navbar>
    </>

  )
}

export default Header