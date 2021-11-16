import React from "react";
import { Card, Col } from "react-bootstrap";

const TestimonialCard = ({ review }) => {
  const { name, email, imageURL, comment, rating } = review;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{comment}</Card.Text>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TestimonialCard;
