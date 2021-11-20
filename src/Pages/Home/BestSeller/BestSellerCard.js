import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const BestSellerCard = ({ seller }) => {
  const { imageURL, brandName, title, price, _id } = seller;
  const { user } = useAuth();
    return (
      <Col>
        <Card>
          <Card.Img
            style={{ width: "100%", height: "250px" }}
            variant="top"
            src={imageURL}
          />
          <Card.Body>
            <Card.Title>{brandName}</Card.Title>
            <Card.Text>{title}</Card.Text>
            <Card.Text>Price: $ {price}</Card.Text>
            {user?.email ? (
              <Link to={`/purchase/${_id}`}>
                <Button style={{ margin: "auto" }} type="button">
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
    );
};

export default BestSellerCard;