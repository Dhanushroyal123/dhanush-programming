import { cleanup } from '@testing-library/react'
import { useState, useEffect } from 'react'
import adwords from '../../assets/adwords.png'
import {
  Navbar,
  Button,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Row,
  Col,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  const style = {
    textDecoration: 'none',
  }
  return (
    <div className='header'>
      <Navbar className='mainheader' bg='light' expand='lg'>
        <Navbar.Brand href='#home'>
          <img src={adwords} />
        </Navbar.Brand>
        <Navbar.Brand href='#home'>
          <h2 style={{ fontWeight: 'bold', color: '#473080' }}>MOSH</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link className='item' href='#home'>
              Subscrie
            </Nav.Link>
            <Nav.Link className='item' href='/courses'>
              Courses
            </Nav.Link>

            <Nav.Link className='item' href='#home'>
              Forum
            </Nav.Link>
            <Nav.Link className='item' href='#link'>
              Learning Paths
            </Nav.Link>
            <Nav.Link className='item' href='#home'>
              Blog
            </Nav.Link>
            <Nav.Link className='item' href='#more'>
              More
            </Nav.Link>
            <Nav.Link className='item' href='/login'>
              Login
            </Nav.Link>

            <Nav.Link className='button' href='#link'>
              <button>Sign Up</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
