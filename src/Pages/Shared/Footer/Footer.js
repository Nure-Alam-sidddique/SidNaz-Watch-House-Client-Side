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
            <h1>Sidnaz Watch</h1>
            <div className="text-white">
              <p>x flor , 500/D kings road</p>
              <p>NewWork City-1872</p>
              <p>+56870909876</p>
              <p>contact@sidnazwatch.com</p>
            </div>
          </Col>
          <Col xs={6} md={3} className="mt-3">
            <div className="d-flex flex-column">
              <h4>Company</h4>
              <div className="d-flex flex-column">
                <Link className="text-white text-decoration-none" to="/pricing">
                  Pricing
                </Link>
                <Link className="text-white text-decoration-none" to="/about">
                  About
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
            <h4>Popular Watch</h4>
            <div className="d-flex justify-content-evenly">
              <div className="d-flex flex-column">
                <Link
                  className="text-white text-decoration-none"
                  to="/bangladesh"
                >
                  Bangladesh
                </Link>
                <Link className="text-white text-decoration-none" to="/england">
                  England
                </Link>
                <Link
                  className="text-white text-decoration-none"
                  to="/switzerland"
                >
                  Switzerland
                </Link>
                <Link className="text-white text-decoration-none" to="/franch">
                  Franch
                </Link>
              </div>

              <div className="d-flex flex-column">
                <Link
                  className="text-white text-decoration-none"
                  to="/indonesia"
                >
                  Indronesis
                </Link>
                <Link className="text-white text-decoration-none" to="/canada">
                  Canada
                </Link>
                <Link className="text-white text-decoration-none" to="/italy">
                  Italy
                </Link>
                <Link className="text-white text-decoration-none" to="/india">
                  India
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} className="mt-3">
            <h4> Instragram</h4>
            <div className="d-flex flex-row justify-content-center">
              <img
                className="h-50 w-25 m-2 rounded"
                src="../../../BannerImage/banner1.jpeg"
              />
              <img
                className="h-25 w-25 m-2 rounded"
                src="../../../BannerImage/banner1.jpeg"
              />
            </div>
            <div className="d-flex flex-row justify-content-center">
              <img
                className="h-25 w-25 m-2 rounded"
                src="../../../BannerImage/banner2.jpeg"
              />
              <img
                className="h-25 w-25 m-2 rounded"
                src="../../../BannerImage/banner3.jpg"
              />
            </div>
          </Col>

          <hr />
          <div className="text-align-center mb-2 text-white">
            <p>
              Copyright ©2021 All rights reserved | This template is made with
              by NurNazTravleo
            </p>
          </div>
        </Row>
      </div>
    );
};

export default Footer;