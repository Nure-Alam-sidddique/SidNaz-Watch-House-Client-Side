import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const LatestArrivalCard = ({ arrival }) => {
  const { imageURL, title, brandName, _id, price } = arrival;
  const { user } = useAuth();
    return (
      <div style={{ marginBottom: "30px" }}>
        <Col>
          <Card>
            <Card.Img
              style={{ width: "100%", height: "250px" }}
              variant="top"
              src={imageURL}
            />
            <Card.Body style={{ margin: "auto" }}>
              <Card.Title>{brandName}</Card.Title>
              <Card.Text>{title}</Card.Text>
              <Card.Text>Price: $ {price}</Card.Text>
              {user?.email ? (
                <Link to={`/purchase/${_id}`}>
                  <Button
                    style={{ margin: "auto" }}
                    style={{ margin: "auto" }}
                    type="button"
                  >
                    {" "}
                    Add To Cart
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button style={{ margin: "auto" }} type="button">
                    Add to Cart
                  </Button>
                </Link>
              )}
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default LatestArrivalCard;