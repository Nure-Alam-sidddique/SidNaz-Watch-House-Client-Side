import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const AdminHeader = () => {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >Sidnaz Watch</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link to = "/manageOrders">Manage Orders</Nav.Link>
              <Nav.Link to= "/addProduct">Add Product</Nav.Link>
              <Nav.Link  to="/makeAdmin">Make Admin</Nav.Link>
             <Nav.Link to="/manageProduct">Manage Products</Nav.Link>
                
              <Nav.Link>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
};

export default AdminHeader;