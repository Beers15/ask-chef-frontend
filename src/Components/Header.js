import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import logo from '../img/ask-chef-logo.png';

class Header extends Component {
  render() {
    return (
      <Navbar style={{ fontSize: '1.5rem' }} expand="lg">
        <Navbar.Brand className="m-2" href="#">
          <img id="logo-img" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="m-3" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="ml-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavItem>
              <Link to="/" className="nav-link">
                <span className="link">Home</span>
              </Link>
            </NavItem>
            {this.props.auth0.isAuthenticated ? (
              <>
                <NavItem>
                  <Link to="/askchef" className="nav-link">
                    <span className="link">Ask Chef</span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/profile" className="nav-link">
                    <span className="link">Profile</span>
                  </Link>
                </NavItem>
              </>
            ) : (
              ''
            )}
            <NavItem>
              <Link to="/about" className="nav-link">
                <span className="link">About Us</span>
              </Link>
            </NavItem>
            <NavItem className="log-btn">{this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
