import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import banner1 from '../../../BannerImage/slider1.jpg';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, signInUsingGoogle, logOut } = useAuth();
  const history = useHistory();
  const handleLogout = () => {
    logOut(history);
  }
  console.log(user);
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
          {user?.displayName ? (
            <span style={{ color: "white", fontSize: "15px" }}>
              {user?.displayName}
            </span>
          ) : (
            <span></span>
          )}
          <Nav>
            <NavLink
              className="nav-item"
              style={{ marginLeft: "30px" }}
              to="/admin"
            >
              Admin Dashboard
            </NavLink>
          </Nav>

          <Nav>
            <NavLink className="nav-item" to="/login">
              {user?.email ? (
                <Navbar.Collapse id="navbar-dark-example">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={<img
                          style={{ width: "30px", height: "30px", background: "white" , borderRadius: "50%"}}
                          src={ user?.photoURL}
                        />
                        
                      }
                      menuVariant="dark"
                    >
                      <NavDropdown.Item href= "#action/3.1">
                        <NavLink to="/payment"> Payment</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item to="#action/3.2">
                        <NavLink to="/myorders"> My Orders</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                     <NavLink to="/reviews"> Review</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleLogout}>
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