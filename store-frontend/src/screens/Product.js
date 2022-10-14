import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, ListGroup, Card, Badge, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
function Product() {
  const params = useParams();
  const { id } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/${id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [id]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {/* change page title to product name */}
              <Helmet>
                <title>{product.name}</title>
              </Helmet>

              <h1>{product.name}</h1>
            </ListGroup.Item>

            {/* מבצע + מחיר */}
            <ListGroup.Item>
              <h1> ₪ {product.price}</h1>
            </ListGroup.Item>

            {/* זמינות במלאי */}
            <ListGroup.Item>
              <h1>{product.name} זמינות במלאי </h1>
            </ListGroup.Item>

            {/* מידע על המוצר \ מפרט*/}
            <ListGroup.Item>
              <p>{product.description}</p>
            </ListGroup.Item>

            {/* הערות שלי על המוצר */}
            <ListGroup.Item>
              <p>{product.description} הערות שלי על המוצר </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>₪ {product.price}</Col>
                    <Col>:מחיר </Col>
                  </Row>
                </ListGroup.Item>

                {/* זמינות במלאי */}
                <ListGroup.Item>
                  <Row>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success"> זמין</Badge>
                      ) : (
                        <Badge bg="danger"> לא זמין</Badge>
                      )}
                    </Col>
                    <Col>זמינות במלאי</Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">הוסף לעגלה</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Product;
