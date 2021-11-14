import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import banner1 from '../../../BannerImage/banner1.jpeg';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user, signInUsingGoogle, logOut}= useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/home">
          <img
            style={{ height: "20px", width: "20px", marginRight: "20px" }}
            src={banner1}
            alt=""
          />
        </NavLink>
        <NavLink className="nav-brand" to="/">
          Sidnaz Watch
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <NavLink className="nav-item" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-item" to="/about">
              About us
            </NavLink>
            <NavLink className="nav-item" to="/shop">
              shop
            </NavLink>
            <NavLink className="nav-item" to="/blog">
              blog
            </NavLink>
            <NavLink className="nav-item" to="/contact">
              Contact
            </NavLink>
          </Nav>
          {user?.displayName ? <span style={{color:"white", fontSize: "15px"}}>{ user?.displayName}</span>: <span></span>}
          <Nav>
            <NavLink
              className="nav-item"
              style={{ marginLeft: "30px" }}
              to="/admin"
            >
              Admin Login
            </NavLink>
          </Nav>

          <Nav>
            <NavLink className="nav-item" to="/login">
              {user?.email ? (
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Dashboard"
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Payment
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        My Orders
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Reviews
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logOut}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              ) : (
                <NavLink to="/login">
                  <Button>Login</Button>
                </NavLink>
              )}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;