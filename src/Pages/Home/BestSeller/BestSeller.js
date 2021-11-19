import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import BestSellerCard from './BestSellerCard';

const BestSeller = () => {
  const [sellers, setSellers] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const sellerLoading = async () => {
    try {
      await axios("https://quiet-springs-91793.herokuapp.com/products").then(
        (res) => setSellers(res.data)
      );
      setIsLoading(true);
    }
    catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    sellerLoading();
  }, [])
    return (
      <div>
        <h1>Best Product</h1>
        <Row xs={1} md={3} className="g-4">
          {isLoading ? (
            sellers
              .slice(0, 9)
              .map((seller) => (
                <BestSellerCard
                  key={seller.id}
                  seller={seller}
                ></BestSellerCard>
              ))
          ) : (
            <Spinner
              className="m-auto p-4 mt-3"
              animation="border"
              variant="primary"
            />
          )}
        </Row>
      </div>
    );
};

export default BestSeller;