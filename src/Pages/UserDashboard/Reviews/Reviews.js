import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import ReviewPhoto from "../../../BannerImage/watchReview.svg";
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Reviews = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit =(data) => {
    axios
      .post("https://quiet-springs-91793.herokuapp.com/review", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Comment Successfully Send");
          console.log(res.data.insertedId);
        }
      });
  }
    return (
      <>
        <Header></Header>
        <h1>This is Review</h1>
        <Container>
          <Row>
            <Col xs={12} md={6} style={{ marginTop: "100px" }}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100vh",
                }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <input style={{margin: "2px", padding: "10px", borderRadius: "5px"}}defaultValue={user.displayName} {...register("name")} />
                <input style={{margin: "2px", padding: "10px", borderRadius: "5px"}} defaultValue={user.email} {...register("email")} />
                <textarea style={{margin: "2px", padding: "10px", row:"10", col:"30", borderRadius: "5px"}} placeholder="comment" {...register("comment")} />
                <input style={{margin: "2px", padding: "10px", borderRadius: "5px"}} placeholder="User PhotoURL" {...register("photoURL")} />
                <input
                  style={{margin: "2px", padding: "10px", borderRadius: "5px"}}
                  placeholder="Rating Between 0 to 5"
                  type="number"
                  {...register("rating", { min: 0, max: 5 })}
                />
                <input style={{margin: "5px", padding: "10px", borderRadius: "5px"}} type="submit" />
              </form>
            </Col>
            <Col xs={12} md={6}>
              <img
                style={{ width: "65%", height: "100vh", marginLeft: "100px" }}
                src={ReviewPhoto}
                alt="reviewPhoto"
              />
              ;
            </Col>
          </Row>
        </Container>
      </>
    );
};

export default Reviews;
 