import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Headers from '../Shared/Header/Header';
import ShopCard from "./ShopCard";
const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  // const { isLoading } = useAuth();
  const [isLoading, SetIsLoading] = useState(false);
  const productsLoading = async () => {
    try {
      await axios("http://localhost:5000/products").then((res) =>
        setAllProducts(res.data)
      );
      SetIsLoading(true);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    productsLoading();
  }, []);
  console.log(allProducts);
  return (
      <div>
          <Headers></Headers>
          <Container>
      <h1>All Product</h1>
      <Row xs={1} md={4} className="g-4">
        {isLoading ? (
          allProducts.map((product) => (
              <ShopCard
                key={product.id}
                product={product}
              ></ShopCard>
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
      <Footer></Footer>
    </div>
  );
};

export default Shop;
