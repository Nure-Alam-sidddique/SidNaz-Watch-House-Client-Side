import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AboutPhoto from '../../BannerImage/login.jpg';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div>
        <h1 style={{textAlign: "center", marginTop: "10px", marginBottom: "20px"}}>
          Welcome To <span style={{color: "orange"}}>SidNaz Watch House</span>
        </h1>
        <section style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <Row>
            <div>
              <p className="text-align-center m-4 ">
                Our goal is to remove any technical or financial barriers that
                can prevent you from making your own website. Our powerful tools
                empower individuals and business owners to create a website,
                sell online, or reach global audiences. Whether you're a
                beginner or website expert, we're excited to help you on your
                journey!
              </p>
            </div>
          </Row>
          <Row className="w-100 h-100">
            <Col style={{ height: "vh-100" }}>
              <div>
                <p className="p-3">
                  Our team started in the web hosting industry. After a few
                  years, we discovered there were too many challenges to making
                  a website. Traditional web hosting services were complicated
                  and expensive to manage.
                </p>
                <p className="p-3">
                  Seeing a need for simplicity, the Website.com site builder was
                  born. We wanted to offer a website building platform that
                  would require no coding skills or design experience, with
                  everything needed to get published online. You can simply
                  focus on creating an amazing website that reflects your brand.
                </p>
                <p className="p-3">
                  After seeing an increased need for ecommerce solutions, we
                  developed one of the only fully-featured, free and
                  commission-free online store builders. As our global userbase
                  grew, we expanded our editor with the ability to make
                  multilingual websites.
                </p>
               
              </div>
            </Col>
            <Col>
              <div>
                  <img
                    style={{width: "100%", height: "100vh"}}
                  src={AboutPhoto}
                  alt="Banner"
                />
              </div>
            </Col>
          </Row>
        </section>
      </div>
            <Footer></Footer>
        </div>
    );
};

export default About;



