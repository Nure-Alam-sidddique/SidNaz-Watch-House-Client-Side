import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const MyOrderCard = (props) => {
    const { imageURL, price, title, brandName, _id} = props.order;
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src={imageURL} />
          <Card.Body>
            <Card.Title>{brandName}</Card.Title>
            <Card.Text>{title}</Card.Text>
            <Card.Text> price: $ {price}</Card.Text>
            <Button onClick={()=>props.deleteOrders(_id)}>Cancle</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default MyOrderCard;