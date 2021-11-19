import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const ShopCard = ({product}) => {
    const { imageURL, brandName, title, price, rating,_id } =product;
    // console.log("shop card", props.product);
  return (
    <div>
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
            <Card.Text> Price :$ {price}</Card.Text>
            <Card.Text> Rating : {rating}</Card.Text>
            <Link to={`/purchase/${_id}`}>
              <Button type="button"> Add To Cart</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ShopCard;
