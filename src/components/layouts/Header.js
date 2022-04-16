import React from 'react'
import {  Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import Search from './Search';
import { Route, Link } from "react-router-dom";





const Header = () => {
 
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="/">SoftShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Route render={({ history }) => <Search history={history} />} />
            <Nav>
              <Nav.Link href="">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "gray",marginLeft:'4' }}
                >
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="">
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  Register
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header