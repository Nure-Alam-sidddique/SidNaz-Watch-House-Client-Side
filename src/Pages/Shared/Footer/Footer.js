import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="container-fluid">
        <Row
          className="h-50 text-white mt-4"
          style={{ backgroundColor: "#20232A" }}
        >
          <Col xs={6} md={3} className="mt-3">
            <h4>Sidnaz Watch</h4>
            <div className="text-white">
              <p>KingRoad, England</p>
              <p>England City-1872</p>
              <p>+5065745947575</p>
              <p>contact@sidnazwatch.com</p>
            </div>
          </Col>
          <Col xs={6} md={3} className="mt-3">
            <div className="d-flex flex-column">
              <h4>Company</h4>
              <div className="d-flex flex-column">
                <Link className="text-white text-decoration-none" to="/home">
                  Home
                </Link>
                <Link className="text-white text-decoration-none" to="/shop">
                  Shop
                </Link>
                <Link className="text-white text-decoration-none" to="/gallery">
                  Gallery
                </Link>
                <Link className="text-white text-decoration-none" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} className="mt-3">
            <h4>Popular Sidnaz Watch</h4>
            <div className="d-flex justify-content-evenly">
              <div className="d-flex flex-column">
                <Link
                  className="text-white text-decoration-none"
                  to="/bangladesh"
                >
                  Rolex
                </Link>
                <Link className="text-white text-decoration-none" to="/england">
                  Blancpain
                </Link>
                <Link
                  className="text-white text-decoration-none"
                  to="/switzerland"
                >
                  Chopard
                </Link>
                <Link className="text-white text-decoration-none" to="/franch">
                  Ulysse Nardin
                </Link>
              </div>

              <div className="d-flex flex-column">
                <Link
                  className="text-white text-decoration-none"
                  to="/indonesia"
                >
                  Panerai
                </Link>
                <Link className="text-white text-decoration-none" to="/canada">
                  Piaget SA
                </Link>
                <Link className="text-white text-decoration-none" to="/italy">
                  Cartier
                </Link>
                <Link className="text-white text-decoration-none" to="/india">
                  Breitling
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} className="mt-3">
            <h4> Instragram</h4>
            <div className="d-flex flex-row justify-content-center">
              <img
                className="h-50 w-25 m-2 rounded"
                src="../../../BannerImage/banner1.jpg"
              />
              <img
                className="h-25 w-25 m-2 rounded"
                src="../../../BannerImage/banner2.jpg"
              />
            </div>
            <div className="d-flex flex-row justify-content-center">
              <img
                className="h-25 w-25 m-2 rounded"
                src="../../../BannerImage/banner3.jpg"
              />
              <img
                className="h-25 w-25 m-2 rounded"
                src="../../../BannerImage/banner4.jpg"
              />
            </div>
          </Col>

          <hr />
          <div className="text-align-center mb-2 text-white">
            <p className="text-align-center">
              Copyright ©2021 All rights reserved | SidNaz Watch
            </p>
          </div>
        </Row>
      </div>
    );
};

export default Footer;