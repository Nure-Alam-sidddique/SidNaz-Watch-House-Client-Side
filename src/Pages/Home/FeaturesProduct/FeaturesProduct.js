import React from 'react';
import { Col, Row } from 'react-bootstrap';
import featuredImage from '../../../BannerImage/banner1.jpg';

const FeaturesProduct = () => {
    return (
      <div style={{backgroundColor: "lightgray"}}>
        {/* <h1 className="text-center">Features Product</h1> */}
        <Row>
          <Col>
            <div style={{marginLeft: "20px"}}>
            <div >
              <h1>Featured Product</h1>
              <h4>
                Constrain <br /> Chornograph Watches
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus iste laudantium dolorum, consectetur ea iure hic?
                Libero illum cupiditate sed tenetur!
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
              <img style={{width: "100%", height: "400px"}} src={featuredImage} alt="featuredImage"/>
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default FeaturesProduct;