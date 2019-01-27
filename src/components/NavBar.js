import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect style={{ color: 'purple' }}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Ferris Draouil</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/about">
              About
            </NavItem>
            <NavItem eventKey={1} href="/portfolio">
              Portfolio
            </NavItem>
            <NavItem eventKey={1} href="/contact">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
