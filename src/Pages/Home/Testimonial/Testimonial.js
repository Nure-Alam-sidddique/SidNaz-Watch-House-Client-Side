import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [reviews, setReviews] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const sellerLoading = async () => {
    try {
      await axios("https://quiet-springs-91793.herokuapp.com/review").then(
        (res) => setReviews(res.data)
      );
      setIsLoading(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    sellerLoading();
  }, []);
  return (
    <div>
      <h1>Client Says</h1>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {isLoading ? (
            reviews
              .slice(0, 9)
              .map((review) => (
                <TestimonialCard
                  key={review.id}
                  review={review}
                ></TestimonialCard>
              ))
          ) : (
            <Spinner
              className="m-auto p-4 mt-3"
              animation="border"
              variant="primary"
            />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
