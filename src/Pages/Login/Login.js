import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import login from '../../../src/login.png';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const { user, isLoading, authError, loginUser, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleInputField = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }
  const formHandler = e => {
    loginUser(loginData.email, loginData.password, location , history);
    e.preventDefault();
  }
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  }
  console.log(loginData);
    return (
      <div>
        <Header></Header>
        <Container>
          <Row>
            <Col xs={6} md={4} /*style={{ marginTop: "200px" }}*/>
              {isLoading && (
                <Spinner
                  className="m-auto p-4 mt-3"
                  animation="border"
                  variant="primary"
                />
              )}
              {user?.email && (
                <Alert variant="success">User Successfully Login</Alert>
              )}
              {authError && <Alert variant="danger">{authError}</Alert>}
              <h1>Please Login</h1>
              <Form
                onSubmit={formHandler}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Form.Control
                  style={{ margin: 8 }}
                  type="email"
                  name="email"
                  onBlur={handleInputField}
                  placeholder="Enter email"
                />
                <Form.Control
                  style={{ margin: 4 }}
                  type="password"
                  name="password"
                  onBlur={handleInputField}
                  placeholder="Enter Password"
                />
                <Button
                  style={{ width: "100%", margin: 4 }}
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
                <p>........................................................</p>
                <Button
                  style={{ width: "100%", margin: 4 }}
                  variant="primary"
                  type="submit"
                  onClick={handleGoogleSignIn}
                >
                  Google Login
                </Button>
                <p >
                  <span> Are You New User?   <Link style={{textDecoration: "none"}} to="/register">Please Register</Link></span>
                </p>
              </Form>
            </Col>
            <Col xs={12} md={8}>
              <img src={login} />
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
};

export default Login;