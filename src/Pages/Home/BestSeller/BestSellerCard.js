import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BestSellerCard = ({ seller }) => {
  const { imageURL, brandName, title } = seller;
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src={imageURL} />
          <Card.Body>
            <Card.Title>{ brandName}</Card.Title>
            <Card.Text>
              {title}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default BestSellerCard;