import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {
  const { user } = useAuth();
    const [myorders, setMyorders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const url = `http://localhost:5000/placeOrders?email=${user.email}`;
    const myOrderLoading = async () => {
      try {
          await axios(url).then(res => setMyorders(res.data));
        setIsLoading(true);
      }
      catch (error) {
        console.log(error.message);
      }
    };

    useEffect(() => {
        myOrderLoading();
    }, [])

  const deleteOrders = (orderId) => {
    const procceed = window.confirm('Are you sure you want to delete your favourite Order');
    if (procceed) {
       const url = `http://localhost:5000/placeOrders/${orderId}`;
       axios.delete(url).then((res) => {
         if (res.data.deletedCount) {
           alert("Delete Successfully");
           const remaining = myorders.filter((order) => order._id !== orderId);
           setMyorders(remaining);
         }
       });
    }
   
    }
    return (
      <div>
        <Header></Header>
        <h1>This is my orders</h1>
        <Container>
          <Row xs={1} md={3} className="g-4">
            {isLoading ? (
              myorders.map((order) => (
                <MyOrderCard
                  key={order._id}
                  order={order}
                  deleteOrders = {deleteOrders}
                ></MyOrderCard>
              ))
            ) : (
              <Spinner
                className="m-auto p-4 mt-3"
                animation="border"
                variant="primary"
              />
            )}
          </Row>
        </Container>
      </div>
    );
        }

export default MyOrders;