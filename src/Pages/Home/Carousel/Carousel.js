import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../../BannerImage/banner1.jpeg';
import banner2 from '../../../BannerImage/banner2.jpeg';
import banner3 from '../../../BannerImage/banner3.jpg';
const carouselImages = [
  {
    id: 1,
    title: "America",
    description:
      "Room to breathe. We’ve got all the social distancing you want with hundreds of acres of parks",
    image: banner1,
  },
  {
    id: 2,
    title: "Brazil",
    description:
      "Brazil, officially the Federative Republic of Brazil, is the largest country in both South America ",
    image: banner2,
  },
  {
    id: 3,
    title: "Nepal",
    description:
      "Nepal, officially the Federal Democratic Republic of Nepal, is a landlocked country in South Asia.",
    image: banner3,
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
          <Carousel.Caption style={{marginTop: "-30px"}}>
            <h3>{image.title}</h3>
            <p>{image.description}</p>
            <Button>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;