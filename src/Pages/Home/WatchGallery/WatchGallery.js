import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Figure, Row, Spinner } from 'react-bootstrap';
const WatchGallery = () => {
  const [photos, setPhoto] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const galleryPhotoLoading = async ()=>{
    try {
      await axios("https://quiet-springs-91793.herokuapp.com/products").then(
        (res) => {
          setPhoto(res.data);
        }
      );
      setIsLoading(true);
    }
    catch(error){
      console.log(error.message)
    }
  }

  useEffect(() => {
    galleryPhotoLoading();
  }, [])
  console.log("comes form photo gallery",photos);
    return (
      <div>
        <h1>Watch Gallery</h1>
        <Row xs={1} md={4} className="gx-1 gy-0 mt-0">
          {isloading ? (photos.map(photo=>
               <Col>
              <Figure>
                <Figure.Image
                  width={400}
                  height={400}
                  alt="171x180"
                  src={photo.imageURL}
                />
              </Figure>
            </Col>)):<Spinner
                className="m-auto p-4 mt-3"
                animation="border"
                variant="primary"
              />}
        </Row>
      </div>
    );
};

export default WatchGallery;