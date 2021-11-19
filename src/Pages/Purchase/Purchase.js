import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';

const Purchase = () => {
    const { user } = useAuth();
    const { purchaseId } = useParams();
    const [purchaseProudct, setPurchaseProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm(); //  Form hooks
    // console.log(purchaseId);
    const url = `https://quiet-springs-91793.herokuapp.com/products/${purchaseId}`;
    const purchaseProductLoading = async () => {
        try {
            axios(url).then((res) => setPurchaseProduct(res.data));
            setLoading(true);
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        purchaseProductLoading();
    }, []);
    // Form handler
    const onSubmit = (data) => {
        data.displayName = user.displayName;
        data.email = user.email;
        data.price = purchaseProudct.price;
        data.brandName = purchaseProudct.brandName;
        data.title = purchaseProudct.title;
        data.imageURL = purchaseProudct.imageURL;
        // console.log(data);
        axios.post('https://quiet-springs-91793.herokuapp.com/placeOrders', data).then(res => {
            if (res.data.insertedId) {
                alert('Data Successfully Send');
                console.log(res.data);
            } 
        })
}
  return (
    <div>
      <Header></Header>
      <Container>
        <Row style={{ marginTop: "20px" }}>
          {loading ? (
            <Col>
              <Card>
                <Card.Img variant="top" src={purchaseProudct.imageURL} />
                <Card.Body>
                  <Card.Title>{purchaseProudct.brandName}</Card.Title>
                  <Card.Text>{purchaseProudct.title}</Card.Text>
                  <Card.Text> Price : $ {purchaseProudct.price} </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ) : (
            <Spinner
              className="m-auto p-4 mt-3"
              animation="border"
              variant="primary"
            />
          )}
          <Col>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input defaultValue={user.displayName} {...register("displayName")} />
              <input defaultValue={user.email} {...register("email")} />
              <select placeholder="Gender" {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              <input
                defaultValue={purchaseProudct.brandName}
                {...register("brandName")}
              />
              <input
                defaultValue={purchaseProudct.title}
                {...register("title")}
              />
              <input
                defaultValue={purchaseProudct.price}
                {...register("price")}
              />
              <input
                defaultValue={purchaseProudct.imageURL}
                {...register("imageURL")}
              />
              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Purchase;