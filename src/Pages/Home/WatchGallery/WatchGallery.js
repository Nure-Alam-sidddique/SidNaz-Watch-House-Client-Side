import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const WatchGallery = () => {
    return (
      <div>
        <h1>Watch Gallery</h1>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 12 }).map((_, idx) => (
              <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default WatchGallery;