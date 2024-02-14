import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useQuery } from "react-query";
import { axiosClient } from "../axiosConfig";
import { setProducts } from "../features/getProductsSlice";
function HomeScreen() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery("products", async () => {
    const response = await axiosClient.get("/api/products/");
    return response.data;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (products) {
      dispatch(setProducts(products));
    }
  }, [dispatch, products]);

  return (
    <div>
      <h1>Latest Products</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
