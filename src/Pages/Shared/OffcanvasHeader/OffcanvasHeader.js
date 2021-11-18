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
          style={{width: "auto"}}
          >
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>{ user.displayName}</Offcanvas.Title>
            </Offcanvas.Header>
          <Offcanvas.Body style={{ display: "flex", flexDirection: "column" , textAlign: "center"}}>
              <Link to="/payment"> Payment</Link>
              <Link to="/myorders"> My Orders</Link>
              <Link to="/reviews"> Review</Link>
              <Link to="/reviews" onClick={handleLogout}>
                LogOut
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
      </>
    );
};

export default OffcanvasHeader;

