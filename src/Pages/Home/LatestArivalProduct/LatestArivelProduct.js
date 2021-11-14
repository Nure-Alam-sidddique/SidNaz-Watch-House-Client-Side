import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import LatestArrivalCard from './LatestArrivalCard';
const LatestArivelProduct = () => {
  const [arrivals, SetArrival] = useState([]);
  // const { isLoading } = useAuth();
  const [isLoading, SetIsLoading] = useState(false);
  const newArrivalLoading = async () => {
    try {
      await  axios("http://fakestoreapi.com/products").then((res) =>
          SetArrival(res.data)
      );
      SetIsLoading(true);
    }
    catch(e){
      console.log(e.message);
    }
  }
  useEffect(() => {
    newArrivalLoading();
  }, [])
  console.log(arrivals);
    return (
      <div>
        <h1>Latest Product</h1>
        <Row xs={1} md={3} className="g-4">
            {isLoading ? (
            arrivals.map((arrival) =><LatestArrivalCard key= {arrival.id} arrival = {arrival}></LatestArrivalCard>)
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

export default LatestArivelProduct;