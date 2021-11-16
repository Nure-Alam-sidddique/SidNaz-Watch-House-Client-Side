import React from 'react';
import { Col, Figure, Row } from 'react-bootstrap';
import figureImage from '../../../BannerImage/slider1.jpg';
const WatchGallery = () => {
    return (
      <div>
        <h1>Watch Gallery</h1>
        <Row xs={1} md={4} className="gx-1 gy-0 mt-0">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col>
              <Figure>
                <Figure.Image
                  width={400}
                  height={400}
                  alt="171x180"
                  src={figureImage}
                />
              </Figure>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default WatchGallery;