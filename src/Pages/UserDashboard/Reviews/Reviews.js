import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Reviews = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit =(data) => {
    axios.post('http://localhost:5000/review', data).then(res => {
      if (res.data.insertedId) {
        alert("Comment Successfully Send");
        console.log(res.data.insertedId);
      }
    })
  }
    return (
      <>
        <Header></Header>
        <h1>This is Review</h1>
        <Container>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              defaultValue={user.displayName}
              {...register("name")}
            />
            <input
              defaultValue={user.email}
              {...register("email")}
            />
            <textarea
              placeholder="comment"
              {...register("comment")}
            />
            <input
              placeholder="User PhotoURL"
              {...register("photoURL")}
            />
            <input
              placeholder="Rating Between 0 to 5"
              type="number"
              {...register("rating", { min: 0, max: 5 })}
            />
            <input type="submit" />
          </form>
        </Container>
      </>
    );
};

export default Reviews;