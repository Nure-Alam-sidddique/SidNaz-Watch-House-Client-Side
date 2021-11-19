import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../BannerImage/banner1.jpg';
import banner2 from '../../../BannerImage/banner2.jpg';
import banner3 from '../../../BannerImage/banner3.jpg';
import banner4 from '../../../BannerImage/banner4.jpg';
const carouselImages = [
  {
    id: 1,
    title: " Chopard",
    description:
      "Known for their Swiss watches, Chopard is not only known for their unique timepieces, but also for their jewelry",
    image: banner1
     
  },
  {
    id: 2,
    title: " Ulysse Nardin",
    description:
      "Ulysse Nardin has been in continuous production since its creation in 1846. Specializing in wristwatches ",
    image:banner2
  },
  {
    id: 3,
    title: "Panerai",
    description:
      "Founded in 1860 in Florence Italy, today Panerai’s headquarters are located in Milan Italy",
    image: banner3
    
  },
  {
    id: 4,
    title: " Glashütte Original",
    description:
      "While you may automatically think of Switzerland for luxury timepieces, Germany also knows how to create an impeccable wristwatch.",
    image:banner4
  },
];
const CarouselSlider = () => {
  return (
    <Carousel>
      {carouselImages.map((image) => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100"
            style={{ height: "450px" }}
            src={image.image}
            alt="First slide"
          />
          <Carousel.Caption style={{ marginTop: "-30px" }}>
            <h3>{image.title}</h3>
            <p>{image.description}</p>
            <Button style={{ backgroundColor: "rgba(52, 52, 52, alpha)", width: "180px"}}>
             <Link style={{textDecoration: "none", fontSize: "18px", color:"white"}} to ='/shop'>Explore More</Link>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;