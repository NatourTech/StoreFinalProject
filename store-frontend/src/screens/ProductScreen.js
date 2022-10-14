import React, { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import { Col, Row } from "react-bootstrap";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
function ProductScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Feaured Products</h1>
      <div className="products">
        {/* Products card */}
        {loading ? (
          <LoadingBox/>
        ) : error ? (
          <MessageBox variant="danger" >{error}</MessageBox>
        ) : (
          <Row>
            {products.map(
              (
                product // {/* Product card */}
              ) => (
                <Col sm={6} md={4} lg={4} className="mb-3" key={product.id}>
                  <Product product={product} />
                </Col>
              )
            )}
          </Row>
        )}
      </div>
    </div>
  );
}

export default ProductScreen;
