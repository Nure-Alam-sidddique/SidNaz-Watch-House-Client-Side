import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ContactPhoto from '../../login.jpg';
import '../Contact/Contact.css';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Contact = () => {
     const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <Header></Header>
              <div className="add-services-form ">
        <h1 style={{textAlign:"center"}}>Contact Us</h1>
        <Container>
          <Row>
            <Col xs={12}md={6}>
               <form onSubmit={handleSubmit(onSubmit)} className="w-25">
          <input placeholder="Name" {...register("userName", { required: true, maxLength: 20 })} />
          <input placeholder="E-mail" {...register("email", { required: true })} />
          <input placeholder="Location" {...register("location", { required: true })} />
          <input placeholder="Mobile No" type="mobile" {...register("mobile")} />
          <input type="submit" />
        </form>
            </Col>
            <Col xs={12} md={6}>
              <img style={{width: "100%", height: "100vh"}} src={ContactPhoto} alt="contactPhoto"/>
            </Col>
          </Row>
          </Container>
      </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;

