import React from 'react';
import { Col, Row } from 'react-bootstrap';
import featuredImage from '../../../BannerImage/banner1.jpg';

const FeaturesProduct = () => {
    return (
      <div style={{ backgroundColor: "lightgray" }}>
        <Row>
          <Col>
            <div style={{ marginLeft: "20px" }}>
              <div>
                <h1>Featured Product</h1>
                <h4>
                  Constrain <br /> Chornograph Watches
                </h4>
                <p>
                  Luxury French brand, Bell & Ross is headed by Bruno Belamich
                  and Carlos A. Rosillo. Launched in 1992, the design influences
                  of these watches include Aircraft instruments. Most noted
                  about this fine watch company is the square shaping that
                  frames many of its watches’ faces. Its aesthetic boasts modern
                  influence and can be identified by its sporty and athletic
                  references.
                </p>
              </div>
              <div>
                <div>
                  <h1>logo</h1>
                  <h5>Warranty</h5>
                </div>
                <div>
                  <h1>logo</h1>
                  <h5>Warranty</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <img
                style={{ width: "100%", height: "400px" }}
                src={featuredImage}
                alt="featuredImage"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default FeaturesProduct;