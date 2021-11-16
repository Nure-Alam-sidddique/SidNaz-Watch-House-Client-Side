import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import login from "../../../src/login.png";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Register = () => {
  const { registerUser, isLoading , authError, user, signInWithGoogle} = useAuth();
  const [registerData, setRegisterData] = useState({});
  const location = useLocation();
  const history= useHistory()

  const handleInputField = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...registerData };
    newLoginData[field] = value;
    setRegisterData(newLoginData);
  };
    const formHandler = (e) => {
      if (registerData.password !== registerData.password2) {
        alert("Your password don't Match");
            return;
      }
      else {
        registerUser(registerData.email, registerData.password, registerData.name, history);
        // alert('Register Succssfully');
      }
     
    console.log(registerData);
    e.preventDefault();
  };
  console.log(registerData);
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  }
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col xs={6} md={4} /*style={{ marginTop: "200px" }}*/>
            <h1>Please Register</h1>
            {!isLoading && (
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
                  type="name"
                  name="name"
                  onBlur={handleInputField}
                  placeholder="Display Name"
                />
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
                <Form.Control
                  style={{ margin: 4 }}
                  type="password"
                  name="password2"
                  onBlur={handleInputField}
                  placeholder="Enter Password"
                />
                <Button
                  style={{ width: "100%", margin: 4 }}
                  variant="primary"
                  type="submit"
                >
                  Register
                </Button>
                <Button
                  style={{ width: "100%", margin: 4 }}
                  variant="primary"
                  type="submit"
                  onClick={handleGoogleSignIn}
                >
                  Sign In Google
                </Button>
                <p>
                  <span>
                    Already have an account?{" "}
                    <Link style={{textDecoration: "none"}} to="/login">Please Login</Link>
                  </span>
                </p>
              </Form>
            )}
            {isLoading && (
              <Spinner
                className="m-auto p-4 mt-3"
                animation="border"
                variant="primary"
              />
            )}
            {user?.email && (
              <Alert variant="success">User Successfully Register</Alert>
            )}
            {authError && <Alert variant="danger">{authError}</Alert>}
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

export default Register;
