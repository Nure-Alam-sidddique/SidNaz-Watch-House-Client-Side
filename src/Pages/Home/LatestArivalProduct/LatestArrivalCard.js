import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const LatestArrivalCard = ({ arrival }) => {
    const { image, category, description } = arrival;
    return (
      <div>
        <Col>
          <Card>
            <Card.Img
              style={{ width: "300px", height: "300px" }}
              variant="top"
              src={image}
            />
            <Card.Body style={{margin:"auto"}}>
              <Card.Title>{category}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button type ="button"> Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default LatestArrivalCard;