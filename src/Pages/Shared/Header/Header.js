import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import OffcanvasHeader from '../OffcanvasHeader/OffcanvasHeader';
import './Header.css';

const Header = () => {
  const { user, signInUsingGoogle, logOut } = useAuth();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => {
    logOut(history);
  }
  console.log(user);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className="nav-brand" to="/">
          Sidnaz Watch
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <NavLink className="nav-item" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-item" to="/shop">
               Shop
            </NavLink>
            <NavLink className="nav-item" to="/about">
              About us
            </NavLink>
            <NavLink className="nav-item" to="/contact">
              Contact Us
            </NavLink>
          </Nav>
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
            {user?.email ? (
              <>
                <img
                  onClick={handleShow}
                  style={{
                    width: "30px",
                    height: "30px",
                    background: "white",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  src={user?.photoURL}
                />

                <OffcanvasHeader
                  show={show}
                  handleClose={handleClose}
                ></OffcanvasHeader>
              </>
            ) : (
              <NavLink to="/login">
                <Button>Login</Button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;