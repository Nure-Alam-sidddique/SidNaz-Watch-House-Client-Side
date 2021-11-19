import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const OffcanvasHeader = (props) => {
  const {user, logOut } = useAuth();
   const history = useHistory();
const handleLogout = () => {
    logOut(history);
  }
    return (
      <>
        <Offcanvas
          placement="end"
          show={props.show}
          onHide={props.handleClose}
          style={{ width: "auto" }}
        >
          <Offcanvas.Header>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <img style={{borderRadius: "50%", width: "100px", height: "100px" , margin: "auto"}} src={`${user.photoURL}`} alt="userPhoto"/>
          <h5 style={{marginTop: "30px", padding: "8px"}}>{user.displayName}</h5>
          <Offcanvas.Body
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Link style={{textDecoration: "none", fontSize: "20px", color: "MenuText" , margin: "3px"}}to="/payment"> Payment</Link>
            <Link style={{textDecoration: "none", fontSize: "20px", color: "MenuText" , margin: "3px"}} to="/myorders"> My Orders</Link>
            <Link style={{ textDecoration: "none", fontSize: "20px", color: "MenuText", margin: "3px" }} to="/reviews"> Review</Link>
            <hr/>
            <Link style={{textDecoration: "none", fontSize: "20px", color: "MenuText" , margin: "3px"}} to="/reviews" onClick={handleLogout}>
              Logout
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
};

export default OffcanvasHeader;

